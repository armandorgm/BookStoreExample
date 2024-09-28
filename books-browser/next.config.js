/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      remotePatterns: [
          {
            //protocol: 'https',
            hostname: 'images-na.ssl-images-amazon.com',
            //port: '',
            //pathname: '/account123/**',
            //search: '',
          }
        ]
  }
}

module.exports = nextConfig
