// RUTA: /next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**', // Permite cualquier ruta dentro de este dominio
      },
    ],
  },
};

module.exports = nextConfig;