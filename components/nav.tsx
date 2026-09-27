'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Sun, Moon, ArrowUpRight, Search } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { personalInfo } from '@/lib/data'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ onCommandPalette }: { onCommandPalette: () => void }) {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const update = () => {
      let current = 'home'
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= 120) current = item.id
      }
      setActiveSection(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        menuButton.current?.focus()
      }
    }
    const closeOutside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setMobileOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [mobileOpen])

  return (
    <nav ref={navRef} className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#home" className="nav-brand" onClick={() => setMobileOpen(false)}>
          Aryan Raj<span className="t-accent">.</span>
        </a>
        <div className="desktop-nav">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-controls">
          <button
            onClick={toggle}
            className="nav-icon"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun size={19} aria-hidden="true" />
            ) : (
              <Moon size={19} aria-hidden="true" />
            )}
          </button>
          <button
            ref={menuButton}
            className="nav-icon mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div id="mobile-navigation" className="mobile-navigation">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
          <div className="mobile-nav-footer">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              View resume <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <button
              onClick={() => {
                onCommandPalette()
                setMobileOpen(false)
              }}
            >
              <Search size={16} aria-hidden="true" /> Search
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
