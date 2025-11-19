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
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone',
  /* config options here */
};

export default bundleAnalyzer(withNextIntl(nextConfig));
