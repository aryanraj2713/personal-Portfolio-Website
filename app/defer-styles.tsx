'use client'

import { useEffect } from 'react'

/**
 * Component to defer non-critical CSS loading
 * This prevents render-blocking while critical CSS is inline
 */
export function DeferStyles() {
  useEffect(() => {
    // Remove media attribute to load deferred stylesheets
    const deferredStyles = document.querySelectorAll('link[rel="stylesheet"][media="print"]')
    deferredStyles.forEach(link => {
      link.removeAttribute('media')
    })
  }, [])

  return null
}
