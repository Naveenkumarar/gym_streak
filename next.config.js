/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v2.exercisedb.io',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.giphy.com',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
