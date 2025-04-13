/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: process.env.NODE_ENV === 'production' ? '/dilawari2008.github.io' : '', // Replace <repository-name> with your repo name
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

module.exports = nextConfig;