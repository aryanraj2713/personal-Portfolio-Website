'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface LazyLoadProps {
  children: ReactNode
  placeholder?: ReactNode
  rootMargin?: string
  threshold?: number
}

export function LazyLoad({ 
  children, 
  placeholder = null, 
  rootMargin = '50px', 
  threshold = 0.1 
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [rootMargin, threshold, hasLoaded])

  return (
    <div ref={elementRef}>
      {isVisible ? children : placeholder}
    </div>
  )
}

// Skeleton loader component
export function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-700 rounded ${className}`}>
      <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-600 rounded w-2/3"></div>
    </div>
  )
} 