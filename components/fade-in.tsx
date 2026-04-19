'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

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

  const Component = motion[as]

  return (
    <Component
      ref={ref}
      className={className}
      initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : reduceMotion ? undefined : { opacity: 0, y: 8 }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.15, delay, ease: [0.4, 0, 0.2, 1] }
      }
    >
      {children}
    </Component>
  )
}
