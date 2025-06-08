'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      // Preload the resume PDF
      const resumeLink = document.createElement('link')
      resumeLink.rel = 'preload'
      resumeLink.href = '/Aryan_resume_new.pdf'
      resumeLink.as = 'document'
      document.head.appendChild(resumeLink)

      // Preload critical images if any
      const criticalImages: string[] = [
        '/og-image.jpg',
        '/icon-192.png',
        '/icon-512.png'
      ]

      criticalImages.forEach((src: string) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.href = src
        link.as = 'image'
        document.head.appendChild(link)
      })

      // Prefetch external domains
      const externalDomains = [
        'https://www.linkedin.com',
        'https://github.com',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ]

      externalDomains.forEach((domain: string) => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = domain
        document.head.appendChild(link)
      })
    }

    // Optimize third-party resources
    const optimizeThirdParty = () => {
      // Lazy load any third-party scripts
      const scripts = document.querySelectorAll('script[data-lazy]')
      scripts.forEach(script => {
        const newScript = document.createElement('script')
        newScript.src = script.getAttribute('data-src')!
        newScript.async = true
        document.head.appendChild(newScript)
      })
    }

    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        // Measure LCP
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          
          // Log performance metrics for debugging
          if (process.env.NODE_ENV === 'development') {
            console.log('LCP:', lastEntry.startTime)
          }
        })
        
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (e) {
          // Fallback for browsers that don't support LCP
        }
      }
    }

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false
      
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Handle scroll-based animations efficiently
            ticking = false
          })
          ticking = true
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    // Initialize optimizations
    preloadResources()
    optimizeThirdParty()
    measurePerformance()
    const cleanupScroll = optimizeScroll()

    return cleanupScroll
  }, [])

  return null // This component doesn't render anything
}

// Critical CSS injection for above-the-fold content
export function CriticalCSS() {
  return (
    <style jsx>{`
      /* Critical above-the-fold styles */
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .nav-container {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 50;
      }
      
      /* Prevent layout shift */
      .content-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
    `}</style>
  )
} 