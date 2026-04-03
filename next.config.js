/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Avoid Windows ENOENT on webpack pack cache rename (common with spaces in path, AV locks).
    webpack: (config, { dev }) => {
      if (dev) {
        config.cache = false
      }
      return config
    },
  
    images: {
      domains: [],
      unoptimized: true,          // IMPORTANT for static export
    },
  
    compress: true,
    poweredByHeader: false,
  
    // Enable static export
    output: 'export',
    trailingSlash: true,          // recommended for static hosting
  };
  
  module.exports = nextConfig;
  