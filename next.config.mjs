/** @type {import('next').NextConfig} */
const isProd = true;

const nextConfig = {
  output: 'export', // Enables static export
  basePath: isProd ? '/dilawari2008.github.io' : '', // Replace with your repository name (e.g., '/my-project')
  assetPrefix: isProd ? '/dilawari2008.github.io/' : '', // Ensures assets are correctly pathed
  images: {
    unoptimized: true, // Disables Next.js image optimization (not supported on GitHub Pages)
  },
};

export default nextConfig;