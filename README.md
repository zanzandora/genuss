# 🏨 Genuss Hotel - Modern Hotel Booking Website

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A modern, responsive hotel booking website built with Next.js 16, featuring multi-language support, optimized performance, and beautiful animations.

## ✨ Features

- 🏨 **Room Booking System** - Complete booking workflow with room selection
- 🌍 **Multi-language Support** - English and Vietnamese with next-intl
- 📱 **Responsive Design** - Optimized for all devices
- 🎨 **Modern Animations** - Smooth scroll animations with Framer Motion
- 🖼️ **Image Optimization** - Next.js Image with blur placeholders and lazy loading
- 🐳 **Docker Support** - Ready for containerized deployment
- ⚡ **Performance Optimized** - Core Web Vitals focused
- 🎯 **TypeScript** - Full type safety throughout the application

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/zanzandora/genuss.git
   cd genuss
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure your environment variables in `.env.local`:

   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   # Add other environment variables as needed
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
genuss/
├── public/                     # Static assets
│   ├── images/                # Hotel images and banners
│   ├── icons/                 # SVG icons
│   └── logo/                  # Brand assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── (maketing)/    # Marketing pages
│   │   │   └── layout.tsx     # Root layout
│   │   └── globals.css        # Global styles
│   │   └── robots.ts          # Robots.txt generation
│   │   └── sitemap.ts         # Global styles
│   ├── components/            # Reusable components
│   │   ├── common/            # Shared components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and configurations
│   │   ├── action/            # Server actions
│   │   ├── animations/        # Animation configs
│   │   ├── data/              # Static data
│   │   ├── seo/               # Seo data
│   │   └── utils/             # Helper functions
│   ├── stores/                # State management (Zustand)
│   ├── types/                 # TypeScript type definitions
│   └── i18n/                  # Internationalization config
├── messages/                  # Translation files
│   ├── en.json               # English translations
│   └── vi.json               # Vietnamese translations
└── docker-compose.yml         # Docker configuration
```

## 🛠️ Technology Stack

### Core Framework

- **Next.js 16** - React framework with App Router
- **React 19.2** - UI library
- **TypeScript 5.9** - Type safety

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Internationalization

- **next-intl** - Internationalization for Next.js

### State Management

- **Zustand** - Lightweight state management

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static typing

### Deployment

- **Docker** - Containerization
- **Docker Compose** - Multi-container deployment

## 🎨 Components Architecture

### UI Components (`src/components/ui/`)

- Reusable UI components built with Radix UI
- Consistent design system with Tailwind CSS
- Fully typed with TypeScript

### Page Sections (`src/components/sections/`)

- **Home Page**: Header, Introduce, Summary, Rooms, Facilities, Testimonials
- **Rooms Page**: Room listings with filtering and booking
- **Services Page**: Hotel services showcase
- **Contact Page**: Contact information and form

### Common Components (`src/components/common/`)

- **RoomCard** - Reusable room display component
- **BookingRoomForm** - Booking form with validation
- **BookNowButton** - Call-to-action button
- **BackToTopButton** - Scroll to top functionality

## 🌍 Internationalization

The application supports English and Vietnamese languages:

- **Configuration**: `src/i18n/`
- **Translations**: `messages/`
- **Routing**: `/en/` and `/vi/` prefixes

### Adding New Translations

1. Add translation keys to `messages/en.json` and `messages/vi.json`
2. Use `useTranslations()` hook in components:

   ```typescript
   import { useTranslations } from 'next-intl';

   const t = useTranslations('HomePage');
   return <h1>{t('title')}</h1>;
   ```

## 🎯 Performance Optimizations

### Image Optimization

- **Next.js Image Component** with AVIF/WebP support
- **Blur Placeholders** for better UX
- **Lazy Loading** for non-critical images
- **Responsive Sizing** with proper breakpoints

### Animation Performance

- **Viewport-based Animations** with Framer Motion
- **Reduced Motion Support** for accessibility
- **Mobile Optimization** - animations disabled on mobile
- **Stagger Animations** for smooth sequential effects

### Bundle Optimization

- **Code Splitting** with Next.js App Router
- **Tree Shaking** for unused code
- **Bundle Analyzer** integration
- **Turbopack** for faster builds

## 🐳 Docker Deployment

### Development Environment

```bash
# Build and start development containers
pnpm docker:dev

# View logs
pnpm docker:logs:dev

# Stop containers
pnpm docker:dev:down
```

### Production Environment

```bash
# Build and start production containers
pnpm docker:prod

# View logs
pnpm docker:logs:prod

# Stop containers
pnpm docker:prod:down
```

### Docker Configuration

- **Multi-stage builds** for optimized production images
- **Health checks** for container monitoring
- **Environment variables** for configuration
- **Volume mounting** for development

## 📊 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm analyze          # Analyze bundle size

# Docker
pnpm docker:dev       # Development with Docker
pnpm docker:prod      # Production with Docker
pnpm docker:logs:dev  # Development logs
pnpm docker:logs:prod # Production logs

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
```

## 🔧 Development Guidelines

### Code Standards

- **TypeScript** for all new code
- **ESLint** configuration for code quality
- **Prettier** for consistent formatting
- **Conventional Commits** for commit messages

### Component Guidelines

- Use **functional components** with hooks
- Implement **proper TypeScript types**
- Follow **React best practices**
- Use **Tailwind CSS** for styling
- Implement **responsive design**

### Performance Guidelines

- **Optimize images** with Next.js Image component
- Use **lazy loading** for non-critical resources
- Implement **proper caching strategies**
- Monitor **Core Web Vitals**
- Use **React.memo** for expensive components

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Docker Production

```bash
# Build production image
docker build -t genuss-hotel .

# Run with environment variables
docker run -p 3000:3000 --env-file .env.local genuss-hotel
```

### Environment Variables

```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://api.your-domain.com
# Add other required environment variables
```

## 📈 Performance Monitoring

### Core Web Vitals

- **Largest Contentful Paint (LCP)** - Optimized with image loading
- **First Input Delay (FID)** - Minimized with code splitting
- **Cumulative Layout Shift (CLS)** - Prevented with proper image dimensions

### Bundle Analysis

```bash
# Analyze bundle size
pnpm analyze
```

### Monitoring Tools

- **Lighthouse** for performance auditing
- **Bundle Analyzer** for size optimization
- **Chrome DevTools** for debugging

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Pull Request Guidelines

- **Follow** the existing code style
- **Add** tests for new features
- **Update** documentation as needed
- **Ensure** all tests pass
- **Keep** PRs focused and small

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment platform
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Radix UI** for accessible components

## 📞 Support

For support and questions:

- Create an issue on [GitHub Issues](https://github.com/zanzandora/genuss/issues)
- Contact the development team

---

**Built with ❤️ using Next.js 16 and modern web technologies**
