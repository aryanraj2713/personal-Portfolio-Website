'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  delay?: number
}

const AnimatedSection = ({ children, id, className = '', delay = 0 }: AnimatedSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.45, 0.27, 0.9],
      }}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
