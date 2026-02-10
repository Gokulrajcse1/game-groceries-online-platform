/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'assets.mixkit.co',
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
