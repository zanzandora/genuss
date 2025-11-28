import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin({
  experimental: {
    // trỏ tới file messages mặc định (ví dụ en.json)
    createMessagesDeclaration: './messages/en.json',
  },
});

const nextConfig: NextConfig = {
  // ! Core Configuration
  reactStrictMode: true,
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,

  // ! Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // * Experimental Features
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-icons',
      'lucide-react',
      'framer-motion',
    ],
  },

  // ! Server External Packages at top-level (Next.js 16.x)
  serverExternalPackages: ['sharp'],

  // ! outputFileTracingIncludes at top-level
  outputFileTracingIncludes: {
    '*': [
      'node_modules/next/dist/compiled/**/*',
      'messages/**/*', // Cho next-intl
      'src/**/*.{js,ts,tsx,jsx}', // Đảm bảo source files được trace
    ],
  },

  // * Webpack Configuration
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },

  // * HTTP Headers for Caching & Security
  async headers() {
    return [
      // Security + Performance headers cho tất cả routes
      {
        source: '/(.*)',
        headers: [
          // Security headers (giữ nguyên)
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), unload=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self';",
          },

          // Performance headers - Enable back/forward cache
          {
            key: 'Cache-Control',
            value:
              'public, max-age=0, must-revalidate, stale-while-revalidate=60',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },

      // Images có thể thay đổi
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },

      // Icons có thể thay đổi
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },

      // Logo ít thay đổi hơn
      {
        source: '/logo/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, must-revalidate',
          },
        ],
      },

      // UI assets
      {
        source: '/rectangles/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, must-revalidate',
          },
        ],
      },

      // Next.js optimized images
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },

      // Next.js static files (immutable)
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // Cho webpack chunks
      {
        source: '/_next/static/chunks/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // Fonts (immutable)
      {
        source: '/:path*.(woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // * Redirects
  async redirects() {
    return [
      {
        source: '/img/:path*',
        destination: '/images/:path*',
        permanent: true,
      },
    ];
  },
};

export default bundleAnalyzer(withNextIntl(nextConfig));
