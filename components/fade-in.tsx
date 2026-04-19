'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState, useEffect, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section'
}

export default function FadeIn({ children, delay = 0, className, as = 'div' }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const Component = motion[as]

  if (!mounted || reduceMotion) {
    const Tag = as
    return (
      <Tag ref={ref} className={className}>
        {children}
      </Tag>
    )
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.15, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Component>
  )
}
