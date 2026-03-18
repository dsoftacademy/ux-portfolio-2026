/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Re-enable strict linting checks
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Re-enable strict type checking
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;