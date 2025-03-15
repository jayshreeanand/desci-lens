/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'pbs.twimg.com'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig 