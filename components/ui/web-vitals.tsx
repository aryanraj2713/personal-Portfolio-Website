'use client'

import { useEffect } from 'react'
import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals'

/**
 * Web Vitals reporting component
 * Tracks and reports Core Web Vitals for performance monitoring
 */
export function WebVitals() {
  useEffect(() => {
    // Function to send metrics to analytics
    const sendToAnalytics = (metric: Metric) => {
      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Web Vitals] ${metric.name}:`, {
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
        })
      }

      // Send to analytics in production
      // You can integrate with Google Analytics, Vercel Analytics, or custom endpoint
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Example: Google Analytics 4
        if ('gtag' in window) {
          ;(window as any).gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          })
        }

        // Example: Custom endpoint
        // fetch('/api/analytics/vitals', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(metric),
        // })
      }
    }

    // Track all Core Web Vitals
    onCLS(sendToAnalytics) // Cumulative Layout Shift
    onFCP(sendToAnalytics) // First Contentful Paint
    onLCP(sendToAnalytics) // Largest Contentful Paint
    onTTFB(sendToAnalytics) // Time to First Byte
    onINP(sendToAnalytics) // Interaction to Next Paint (replaces deprecated FID)

    // Additional custom performance monitoring
    if ('performance' in window && 'getEntriesByType' in performance) {
      // Monitor navigation timing
      const navigationEntries = performance.getEntriesByType(
        'navigation'
      ) as PerformanceNavigationTiming[]
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0]
        const metrics = {
          dns: nav.domainLookupEnd - nav.domainLookupStart,
          tcp: nav.connectEnd - nav.connectStart,
          ttfb: nav.responseStart - nav.requestStart,
          download: nav.responseEnd - nav.responseStart,
          domInteractive: nav.domInteractive - nav.fetchStart,
          domComplete: nav.domComplete - nav.fetchStart,
        }

        if (process.env.NODE_ENV === 'development') {
          console.log('[Performance Timing]', metrics)
        }
      }

      // Monitor resource loading
      const resourceEntries = performance.getEntriesByType(
        'resource'
      ) as PerformanceResourceTiming[]
      const slowResources = resourceEntries.filter(entry => entry.duration > 1000)

      if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
        console.warn(
          '[Slow Resources]',
          slowResources.map(r => ({ name: r.name, duration: r.duration }))
        )
      }
    }

    // Monitor long tasks (tasks that block the main thread for >50ms)
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (process.env.NODE_ENV === 'development') {
              console.warn('[Long Task]', {
                duration: entry.duration,
                startTime: entry.startTime,
              })
            }
          }
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })

        return () => {
          longTaskObserver.disconnect()
        }
      } catch (e) {
        // Long tasks not supported
      }
    }
  }, [])

  return null // This component doesn't render anything
}

/**
 * Performance budget checker
 * Warns if performance budgets are exceeded
 */
export function PerformanceBudget() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const checkBudget = () => {
      if (!('performance' in window)) return

      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming

      if (navigation) {
        const budgets = {
          LCP: 2500, // Largest Contentful Paint should be < 2.5s
          FID: 100, // First Input Delay should be < 100ms
          CLS: 0.1, // Cumulative Layout Shift should be < 0.1
          TTFB: 800, // Time to First Byte should be < 800ms
          DOMContentLoaded: 1500, // DOM Content Loaded should be < 1.5s
        }

        const metrics = {
          TTFB: navigation.responseStart - navigation.requestStart,
          DOMContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        }

        console.group('[Performance Budget]')
        Object.entries(metrics).forEach(([name, value]) => {
          const budget = budgets[name as keyof typeof budgets]
          const status = value <= budget ? '✅' : '❌'
          console.log(`${status} ${name}: ${value.toFixed(0)}ms (budget: ${budget}ms)`)
        })
        console.groupEnd()
      }
    }

    // Check budget after page load
    if (document.readyState === 'complete') {
      checkBudget()
    } else {
      window.addEventListener('load', checkBudget)
      return () => window.removeEventListener('load', checkBudget)
    }
  }, [])

  return null
}
