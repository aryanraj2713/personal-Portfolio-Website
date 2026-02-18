'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
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
  const reduceMotion = useReducedMotion()

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.92 },
      visible: { opacity: 1, scale: 1 },
    },
    flip: {
      hidden: { opacity: 0, rotateY: -60 },
      visible: { opacity: 1, rotateY: 0 },
    },
    bounce: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
  }

  const reducedVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={reduceMotion ? reducedVariants : variants[variant]}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay,
              ease: [0.22, 1, 0.36, 1],
              type: variant === 'bounce' ? 'spring' : 'tween',
              stiffness: variant === 'bounce' ? 120 : undefined,
              damping: variant === 'bounce' ? 20 : undefined,
            }
      }
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.02,
              y: -3,
              boxShadow: '0 20px 40px -12px rgba(16, 185, 129, 0.2)',
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard
