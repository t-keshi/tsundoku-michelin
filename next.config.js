/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['books.google.com', 'lh3.googleusercontent.com', 'storage.googleapis.com'],
  },
  eslint: {
    dirs: ['src/pages', 'src/templates', 'src/components', 'src/helpers'],
  },
};

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(nextConfig);
