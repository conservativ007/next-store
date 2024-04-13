/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn2.gstatic.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
