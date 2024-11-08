/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable webpack caching in development
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
}

module.exports = nextConfig 