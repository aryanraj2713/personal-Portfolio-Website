export const motion = {
  fadeIn: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
  },
  expand: {
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  },
  stagger: {
    transition: { staggerChildren: 0.04 },
  },
} as const

export const layout = {
  maxWidth: '1120px',
  sectionGap: '6rem',
  navHeight: '56px',
} as const
