/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/accredian-assets/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
