'use client'

import { useState, useEffect, useCallback } from 'react'

const sections = [
  'home',
  'about',
  'work',
  'education',
  'projects',
  'writing',
  'engineering',
  'contact',
]

export default function SectionIndicator() {
  const [active, setActive] = useState('home')

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + 200
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.offsetTop <= scrollY) {
        setActive(sections[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
      {sections.map(s => (
        <div
          key={s}
          className={`w-1.5 h-1.5 rounded-full transition-colors ${
            active === s ? 'bg-emerald-400' : 'bg-white/10'
          }`}
        />
      ))}
    </div>
  )
}
