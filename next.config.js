/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.vtcp.vn' },
    ],
    // Use Next.js built-in image optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable built-in font optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable gzip/brotli compression headers
  compress: true,
  // Strict mode for catching bugs
  reactStrictMode: true,
  // Power header removal for security & tiny speed gain
  poweredByHeader: false,
}

module.exports = nextConfig
