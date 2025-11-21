# Docker Setup for Genuss Hotel Website

This document explains how to use Docker to run the Genuss hotel website in both development and production environments.

## Prerequisites

- Docker installed on your system
- Docker Compose installed on your system

## Project Structure

```
├── Dockerfile                 # Multi-stage build configuration
├── docker-compose.yml         # Development configuration
├── docker-compose.prod.yml    # Production overrides
├── .dockerignore             # Files to exclude from Docker context
└── src/app/api/health/route.ts # Health check endpoint
```

## Development

### Start Development Server

```bash
# Using Docker Compose directly
docker-compose up --build

# Using pnpm scripts (recommended)
pnpm run docker:dev
```

This will:

- Build the Docker image using the base stage
- Start the development server with hot reload
- Mount source code for live updates
- Run on `http://localhost:3000`

### Stop Development Server

```bash
# Using Docker Compose directly
docker-compose down

# Using pnpm scripts (recommended)
pnpm run docker:dev:down
```

### Development Features

- **Hot Reload**: Changes to source code are automatically reflected
- **Volume Mounting**: Source code is mounted for live updates
- **Debugging**: Easy debugging with restart policy set to "no"
- **Environment**: Development environment variables

## Production

### Start Production Server

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
```

This will:

- Build the production Docker image
- Start the production server
- Run with security optimizations
- Include health checks
- Run on `http://localhost:3000`

### Stop Production Server

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down
```

### Production Features

- **Security**: Read-only filesystem, no new privileges
- **Resource Limits**: Memory and CPU limits configured
- **Health Checks**: Automatic health monitoring
- **Restart Policy**: Always restart on failure
- **Optimized**: Minimal image size with only production dependencies

## Environment Variables

### Development

- `NODE_ENV=development`
- `NEXT_PUBLIC_API_URL=http://localhost:3001`
- `NEXT_TELEMETRY_DISABLED=1`

### Production

- `NODE_ENV=production`
- `NEXT_PUBLIC_API_URL=https://api.yourdomain.com`
- `NEXT_TELEMETRY_DISABLED=1`

## Health Check

The application includes a health check endpoint at `/api/health` that returns:

```json
{
  "status": "healthy",
  "timestamp": "2025-11-20T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "production",
  "version": "0.1.0"
}
```

## Docker Configuration Details

### Dockerfile

- **Multi-stage build**: Separate build and runtime stages
- **Base Image**: Node.js 18 Alpine for minimal size
- **Package Manager**: Uses pnpm for efficient dependency management
- **Standalone Output**: Optimized for Next.js standalone mode

### Development Compose

- **Target**: Uses base stage for development
- **Volumes**: Mounts source code for hot reload
- **Command**: Runs `pnpm run dev` with Turbopack
- **Restart**: No restart policy for easier debugging

### Production Compose

- **Security**: Read-only filesystem, no new privileges
- **Resources**: Memory limit 512MB, CPU limit 0.5
- **Health Check**: Monitors application health every 30 seconds
- **User**: Runs as non-root user (UID 1001)

## PNPM Scripts

The project includes convenient pnpm scripts for Docker operations:

### Development Scripts

```bash
pnpm run docker:dev          # Start development server
pnpm run docker:dev:down     # Stop development server
pnpm run docker:logs:dev     # View development logs
pnpm run docker:build:dev    # Build development image
```

### Production Scripts

```bash
pnpm run docker:prod         # Start production server
pnpm run docker:prod:down    # Stop production server
pnpm run docker:logs:prod    # View production logs
pnpm run docker:build:prod   # Build production image
```

### Utility Scripts

```bash
pnpm run docker:clean        # Clean Docker system
```

## Useful Commands

### View Logs

```bash
# Using Docker Compose directly
docker-compose logs -f

# Using pnpm scripts (recommended)
pnpm run docker:logs:dev

# Production logs
pnpm run docker:logs:prod
```

### Rebuild Without Cache

```bash
# Development
docker-compose build --no-cache

# Production
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build --no-cache
```

### Execute Commands in Container

```bash
# Development
docker-compose exec app-dev sh

# Production
docker-compose -f docker-compose.yml -f docker-compose.prod.yml exec genuss-prod sh
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can change it in the docker-compose.yml file:

```yaml
ports:
  - '3001:3000' # Use port 3001 instead
```

### Build Issues

If you encounter build issues, try:

1. Clearing Docker cache: `docker system prune -a`
2. Rebuilding without cache: `--no-cache` flag
3. Checking .dockerignore for excluded files

### Performance Issues

For production, ensure:

- Sufficient memory allocation (default: 512MB)
- Proper CPU limits (default: 0.5 cores)
- Health checks are passing

## Customization

### Adding Environment Variables

Add them to the appropriate docker-compose file under the `environment` section.

### Changing Resource Limits

Modify the `deploy.resources` section in docker-compose.prod.yml.

### Adding Health Checks

Update the healthcheck configuration in docker-compose.prod.yml.

## Security Considerations

- Production runs as non-root user
- Filesystem is read-only (except /tmp)
- No new privileges allowed
- Resource limits prevent resource exhaustion
- Health checks ensure application availability

## Support

For issues related to:

- Docker setup: Check this documentation
- Application functionality: Check the main README
- Build errors: Check Docker logs and build output
