/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'],
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
