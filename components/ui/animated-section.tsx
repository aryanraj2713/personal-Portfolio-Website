'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  delay?: number
  'aria-labelledby'?: string
}

const AnimatedSection = ({
  children,
  id,
  className = '',
  delay = 0,
  'aria-labelledby': ariaLabelledby,
}: AnimatedSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      aria-labelledby={ariaLabelledby}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : reduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
