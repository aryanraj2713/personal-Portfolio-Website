'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutMe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 20,
        duration: 0.6,
      },
    },
  }

  const paragraphVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const highlightVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="mb-12" aria-labelledby="about-heading" ref={ref}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 id="about-heading" className="section-title flex items-center gap-3">
          <motion.svg
            className="w-7 h-7 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={isInView ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </motion.svg>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            About Me
          </motion.span>
        </h2>
        <motion.div
          className="h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-transparent rounded-full"
          variants={highlightVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative group"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Glass card container */}
        <div className="relative rounded-3xl p-8 md:p-10 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
          {/* Animated mesh gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Content */}
          <div className="relative">
            <motion.div className="space-y-6" variants={containerVariants}>
              {/* Heading */}
              <motion.h3
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent"
                variants={headingVariants}
              >
                Building AI Solutions that Matter
              </motion.h3>

              {/* Paragraphs with staggered animation */}
              <motion.div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed">
                <motion.p
                  variants={paragraphVariants}
                  className="relative pl-4 border-l-2 border-emerald-400/50"
                >
                  I am a{' '}
                  <span className="text-emerald-400 font-semibold">Machine Learning Engineer</span>{' '}
                  and <span className="text-cyan-400 font-semibold">Backend Developer</span> with
                  experience building practical AI solutions and scalable applications. I graduated
                  in Computer Science and Engineering from{' '}
                  <span className="text-white font-medium">
                    SRM Institute of Science and Technology
                  </span>
                  , with hands-on work in deep learning, generative AI, and cloud-based services.
                </motion.p>

                <motion.p
                  variants={paragraphVariants}
                  className="relative pl-4 border-l-2 border-cyan-400/50"
                >
                  I am currently working at{' '}
                  <span className="text-emerald-400 font-semibold">ValueLabs</span> on building
                  scalable AI solutions to drive growth. In my current role, I work on building{' '}
                  <span className="text-white font-medium">AI/ML solutions</span> and contributing
                  to developer tooling and analytics infrastructure. Previously, I've worked on
                  autonomous AI agents, prompt engineering frameworks, and scalable machine learning
                  systems that reduce manual effort and improve performance.
                </motion.p>

                <motion.p
                  variants={paragraphVariants}
                  className="relative pl-4 border-l-2 border-blue-400/50"
                >
                  My internship experience spans{' '}
                  <span className="text-white font-medium">
                    AI-driven identity and fraud detection
                  </span>
                  , serverless backend development, and research in machine learning systems for
                  autonomous perception. I have also developed full-stack AI-based platforms that
                  combine semantic search, OCR, and real-time inference.
                </motion.p>

                <motion.p
                  variants={paragraphVariants}
                  className="relative pl-4 border-l-2 border-purple-400/50"
                >
                  I enjoy working on projects that{' '}
                  <span className="text-emerald-400 font-semibold">solve real problems</span>{' '}
                  through practical application of AI and backend technologies, with a focus on{' '}
                  <span className="text-cyan-400 font-semibold">clean design</span> and{' '}
                  <span className="text-blue-400 font-semibold">measurable impact</span>.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe
