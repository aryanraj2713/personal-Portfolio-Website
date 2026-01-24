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
  // Note: swcMinify is enabled by default in Next.js 13+
  env: {
    BROWSERSLIST_CONFIG: './.browserslistrc',
  },

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache optimized images for 1 year
    dangerouslyAllowSVG: true, // Allow SVG images
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.aryanraj.cv',
      },
    ],
  },

  // Experimental features for better performance
  experimental: {
    // Package optimization
    optimizePackageImports: ['lucide-react'], // Tree shake lucide icons
    webpackBuildWorker: true, // Enable webpack build worker
    optimizeCss: true, // Enable CSS optimization
    // CSS optimization - use strict for better optimization
    cssChunking: 'strict', // Better CSS code splitting
  },

  // Turbopack configuration (Next.js 16 default bundler)
  turbopack: {
    // Empty config to acknowledge we're using Turbopack
    // Most apps work fine with default Turbopack settings
  },

  // Compression (handled by Vercel automatically, but explicit for other platforms)
  compress: true,

  // Power optimization settings
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Note: Webpack config removed - Next.js 16 uses Turbopack by default
  // CSS optimization is handled by Turbopack and experimental.cssChunking
  // If you need webpack specifically, run with: next dev --webpack

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
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      // Strict no-cache headers for sensitive/admin routes
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, private',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https:",
              "connect-src 'self'",
              "frame-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
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
        ],
      },
      {
        source: '/private/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, private',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https:",
              "connect-src 'self'",
              "frame-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
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
        ],
      },
      // Security headers for all other routes (excluding admin/private)
      {
        source: '/((?!admin|private|.*\\.pdf).*)',
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
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Remove CORS headers - not needed for same-origin requests
          // Only add CORS if you have specific API endpoints that need cross-origin access
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'credentialless', // More compatible than require-corp, still provides protection
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          // Performance headers
          {
            key: 'Vary',
            value: 'Accept-Encoding, Accept',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
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
