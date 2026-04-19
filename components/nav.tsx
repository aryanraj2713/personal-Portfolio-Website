'use client'

import { useState, useEffect, useCallback } from 'react'
import { layout } from '@/lib/design-tokens'
import { useTheme } from '@/components/theme-provider'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'contact', label: 'Contact' },
]

interface NavProps {
  onCommandPalette: () => void
}

export default function Nav({ onCommandPalette }: NavProps) {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle: toggleTheme } = useTheme()

  const handleScroll = useCallback(() => {
    const sections = [
      'home',
      'about',
      'meeting',
      'work',
      'education',
      'projects',
      'writing',
      'engineering',
      'contact',
    ]
    const scrollY = window.scrollY + 100

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sections[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const section = el.closest('section') || el.parentElement
      if (section) {
        section.style.opacity = '1'
        section.style.transform = 'none'
      }
      const offset = parseInt(layout.navHeight) + 16
      const top = el.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-14 border-b b-subtle bg-surface/80 backdrop-blur-md transition-colors"
      role="navigation"
    >
      <div
        className="mx-auto h-full flex items-center justify-between px-6"
        style={{ maxWidth: layout.maxWidth }}
      >
        <button
          onClick={() => scrollTo('home')}
          className="text-sm font-semibold t-primary transition-colors"
        >
          Aryan Raj
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm transition-colors ${
                activeSection === item.id ? 'text-emerald-500' : 't-secondary hover:t-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="t-primary hover:text-emerald-500 transition-colors p-1"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={onCommandPalette}
            className="text-xs t-muted hover:t-secondary transition-colors border b-muted rounded px-2 py-1"
          >
            <kbd>⌘K</kbd>
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="t-primary hover:text-emerald-500 transition-colors p-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          <button
            className="t-secondary hover:t-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-b b-subtle bg-surface px-6 py-4 space-y-3">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block w-full text-left text-sm ${
                activeSection === item.id ? 'text-emerald-500' : 't-secondary'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onCommandPalette()
              setMobileOpen(false)
            }}
            className="block text-sm t-muted pt-2 border-t b-subtle"
          >
            Search <kbd className="text-xs">⌘K</kbd>
          </button>
        </div>
      )}
    </nav>
  )
}
