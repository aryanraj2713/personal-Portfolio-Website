'use client'

import { useRef, useState, useEffect, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section'
}

export default function FadeIn({ children, delay = 0, className, as: Tag = 'div' }: FadeInProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const isInViewport = el.getBoundingClientRect().top < window.innerHeight
    if (isInViewport) return

    setVisible(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-40px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement> & React.RefObject<HTMLElement>}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(8px)',
        transition: visible
          ? `opacity 0.15s ease ${delay}s, transform 0.15s ease ${delay}s`
          : 'none',
      }}
    >
      {children}
    </Tag>
  )
}
