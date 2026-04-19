'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { personalInfo, projects, blogArticles } from '@/lib/data'

interface CommandItem {
  group: string
  label: string
  action: () => void
}

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const reduceMotion = useReducedMotion()

  const scrollTo = useCallback(
    (id: string) => {
      onClose()
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const section = el.closest('section') || el.parentElement
          if (section) {
            section.style.opacity = '1'
            section.style.transform = 'none'
          }
          const top = el.offsetTop - 72
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 50)
    },
    [onClose]
  )

  const items = useMemo<CommandItem[]>(
    () => [
      { group: 'Navigation', label: 'Home', action: () => scrollTo('home') },
      { group: 'Navigation', label: 'About', action: () => scrollTo('about') },
      { group: 'Navigation', label: 'Work', action: () => scrollTo('work') },
      { group: 'Navigation', label: 'Education', action: () => scrollTo('education') },
      { group: 'Navigation', label: 'Projects', action: () => scrollTo('projects') },
      { group: 'Navigation', label: 'Writing', action: () => scrollTo('writing') },
      { group: 'Navigation', label: 'Engineering', action: () => scrollTo('engineering') },
      { group: 'Navigation', label: 'Contact', action: () => scrollTo('contact') },
      ...projects.map(p => ({
        group: 'Projects',
        label: p.name,
        action: () => scrollTo('projects'),
      })),
      ...blogArticles.map(a => ({
        group: 'Writing',
        label: a.title,
        action: () => {
          onClose()
          window.open(a.url, '_blank')
        },
      })),
      {
        group: 'Links',
        label: 'Download Resume',
        action: () => {
          onClose()
          const link = document.createElement('a')
          link.href = personalInfo.resumeUrl
          link.download = ''
          link.click()
        },
      },
      {
        group: 'Links',
        label: 'Schedule a Call',
        action: () => {
          onClose()
          window.open(personalInfo.calUrl, '_blank')
        },
      },
      ...personalInfo.socials.map(s => ({
        group: 'Links',
        label: s.label,
        action: () => {
          onClose()
          window.open(s.url, '_blank')
        },
      })),
    ],
    [scrollTo, onClose]
  )

  const filtered = useMemo(() => {
    if (!query) return items
    const q = query.toLowerCase()
    return items.filter(i => i.label.toLowerCase().includes(q) || i.group.toLowerCase().includes(q))
  }, [items, query])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      filtered[activeIndex].action()
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  const groups = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    for (const item of filtered) {
      const g = map.get(item.group) ?? []
      g.push(item)
      map.set(item.group, g)
    }
    return map
  }, [filtered])

  let globalIndex = -1

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={reduceMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            className="fixed inset-x-0 top-[20%] z-[60] mx-auto w-full max-w-lg px-4"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.12 }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="bg-elevated border b-muted rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 border-b b-subtle">
                <svg
                  className="w-4 h-4 t-faint shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search..."
                  className="w-full bg-transparent px-3 py-3 text-sm t-primary placeholder:t-muted focus:outline-none"
                />
                <kbd className="text-[10px] t-faint border b-subtle rounded px-1.5 py-0.5 shrink-0">
                  esc
                </kbd>
              </div>

              <div className="max-h-[320px] overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <p className="px-4 py-6 text-sm t-faint text-center">No results</p>
                ) : (
                  Array.from(groups.entries()).map(([group, groupItems]) => (
                    <div key={group}>
                      <div className="px-4 pt-3 pb-1 text-[10px] font-medium t-faint uppercase tracking-wider">
                        {group}
                      </div>
                      {groupItems.map(item => {
                        globalIndex++
                        const idx = globalIndex
                        return (
                          <button
                            key={`${item.group}-${item.label}`}
                            onClick={item.action}
                            onMouseEnter={() => setActiveIndex(idx)}
                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                              activeIndex === idx
                                ? 'bg-white/[0.04] t-primary'
                                : 't-muted hover:t-secondary'
                            }`}
                          >
                            {item.label}
                          </button>
                        )
                      })}
                    </div>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
