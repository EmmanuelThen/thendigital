/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    env: {
        SUCCESS_URL: 'http://localhost:3000/success', // Replace with your actual success URL
        CANCEL_URL: 'http://localhost:3000/pixelcare', // Replace with your actual cancel URL
    },
}

module.exports = nextConfig
