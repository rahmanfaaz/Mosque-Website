/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  
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
  