/** @type {import('next').NextConfig} */

nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true, transpilePackages: ['ui'] },
};

module.exports = nextConfig;
