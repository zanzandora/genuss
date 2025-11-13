import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */
};

export default bundleAnalyzer(withNextIntl()(nextConfig));
