'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

interface AnalyticsProps {
  trackingId?: string
}

export function Analytics({ trackingId }: AnalyticsProps) {
  useEffect(() => {
    if (!trackingId) return

    // Load Google Analytics
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      const dataLayer = (window as any).dataLayer || []
      dataLayer.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    })

    // Track core web vitals
    trackWebVitals()
  }, [trackingId])

  return null
}

function trackWebVitals() {
  // Track Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        
        if (window.gtag) {
          window.gtag('event', 'web_vital', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
            non_interaction: true,
          })
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    } catch (e) {
      console.warn('Performance observer not supported')
    }
  }

  // Track First Input Delay (FID)
  if ('addEventListener' in window) {
    const firstInputDelay = (event: Event) => {
      const delay = performance.now() - event.timeStamp
      
      if (window.gtag) {
        window.gtag('event', 'web_vital', {
          event_category: 'Performance',
          event_label: 'FID',
          value: Math.round(delay),
          non_interaction: true,
        })
      }
      
      // Remove listener after first interaction
      window.removeEventListener('click', firstInputDelay)
      window.removeEventListener('keydown', firstInputDelay)
    }
    
    window.addEventListener('click', firstInputDelay, { once: true })
    window.addEventListener('keydown', firstInputDelay, { once: true })
  }
}

// Custom event tracking
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Track page views for SPA navigation
export function trackPageView(url: string, title?: string) {
  if (window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
      page_title: title || document.title,
      page_location: url,
    })
  }
} 