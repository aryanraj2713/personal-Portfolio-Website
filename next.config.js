const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  // Note: swcMinify is enabled by default in Next.js 13+

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.log in production
  },

  // Modern JavaScript targets to reduce polyfills
  env: {
    BROWSERSLIST_CONFIG: './.browserslistrc',
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'], // Tree shake lucide icons
    webpackBuildWorker: true, // Enable webpack build worker
    optimizeCss: true, // Enable CSS optimization
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Allow PDF files to be loaded in iframes
      {
        source: '/(.*\\.pdf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Remove X-Frame-Options for PDFs to allow iframe loading
        ],
      },
      // Security headers for all other routes
      {
        source: '/((?!.*\\.pdf).*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-eval needed for Next.js
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https:",
              "connect-src 'self'",
              "frame-src 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "media-src 'self'",
              "worker-src 'self' blob:",
            ].join('; '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://aryanraj13.vercel.app', // Restrict to same origin only
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, HEAD, OPTIONS', // Only allow safe methods
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type', // Minimal headers allowed
          },
          {
            key: 'Access-Control-Max-Age',
            value: '86400', // Cache preflight for 24 hours
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'false', // No credentials needed
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp', // Protect against Spectre attacks
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin', // Restrict resource loading to same origin
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin', // Isolate browsing context
          },
        ],
      },
    ]
  },

  // Temporary rewrites to avoid 404s for app icons until real PNGs are added
  async rewrites() {
    return [
      { source: '/icon-192.png', destination: '/og-image.jpg' },
      { source: '/icon-512.png', destination: '/og-image.jpg' },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
