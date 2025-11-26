import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Secure health check response - minimal information only
    return NextResponse.json(
      {
        status: 'healthy',
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          // Enable caching for health check (short TTL)
          'Cache-Control': 'public, max-age=30, stale-while-revalidate=10',
          Vary: 'Accept-Encoding',
        },
      },
    );
  } catch {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
      },
      {
        status: 503,
        headers: {
          // Don't cache error responses
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      },
    );
  }
}
