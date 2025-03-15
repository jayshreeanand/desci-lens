/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com', 'pbs.twimg.com', 'res.cloudinary.com'],
  },
  experimental: {
    serverActions: true,
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    HETU_TESTNET_RPC_URL: process.env.HETU_TESTNET_RPC_URL,
    HETU_TESTNET_CHAIN_ID: process.env.HETU_TESTNET_CHAIN_ID,
    HETU_TESTNET_BLOCK_EXPLORER: process.env.HETU_TESTNET_BLOCK_EXPLORER,
    HETU_TESTNET_FAUCET: process.env.HETU_TESTNET_FAUCET,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 