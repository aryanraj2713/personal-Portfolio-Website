'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fade' | 'slide' | 'scale' | 'flip' | 'bounce'
}

const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
  variant = 'slide',
}: AnimatedCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    flip: {
      hidden: { opacity: 0, rotateY: -90 },
      visible: { opacity: 1, rotateY: 0 },
    },
    bounce: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.45, 0.27, 0.9],
        type: variant === 'bounce' ? 'spring' : 'tween',
        stiffness: variant === 'bounce' ? 100 : undefined,
      }}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
