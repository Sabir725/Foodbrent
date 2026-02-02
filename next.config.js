/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['source.unsplash.com', 'png.pngtree.com'],
  },
};

module.exports = nextConfig;
