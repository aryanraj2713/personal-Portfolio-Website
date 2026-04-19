'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import FadeIn from '@/components/fade-in'
import { skills, publications, achievements, clubs } from '@/lib/data'

type SectionKey = 'skills' | 'publications' | 'achievements' | 'community'

const sections: { id: SectionKey; label: string }[] = [
  { id: 'skills', label: 'Technical Skills' },
  { id: 'publications', label: 'Publications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'community', label: 'Community' },
]

export default function Engineering() {
  const [open, setOpen] = useState<Set<SectionKey>>(
    new Set(['skills', 'publications', 'achievements', 'community'])
  )
  const reduceMotion = useReducedMotion()

  const toggle = (id: SectionKey) => {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="engineering">
        <h2 className="text-2xl md:text-3xl font-semibold t-primary mb-10">Engineering</h2>
        <div className="space-y-1">
          {sections.map(s => (
            <div key={s.id}>
              <button
                onClick={() => toggle(s.id)}
                className="w-full text-left flex items-center justify-between py-3 group"
                aria-expanded={open.has(s.id)}
              >
                <span
                  className={`text-sm font-medium transition-colors ${open.has(s.id) ? 't-primary' : 't-muted group-hover:t-secondary'}`}
                >
                  {s.label}
                </span>
                <svg
                  className={`w-4 h-4 t-faint transition-transform ${open.has(s.id) ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence initial={false}>
                {open.has(s.id) && (
                  <motion.div
                    initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={
                      reduceMotion ? { duration: 0 } : { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                    }
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-1">
                      <SectionContent id={s.id} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

function SectionContent({ id }: { id: SectionKey }) {
  switch (id) {
    case 'skills':
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map(cat => (
            <div key={cat.category}>
              <h4 className="text-xs font-medium t-muted uppercase tracking-wider mb-2">
                {cat.category}
              </h4>
              <p className="text-sm t-muted leading-relaxed">{cat.items.join(', ')}</p>
            </div>
          ))}
        </div>
      )

    case 'publications':
      return (
        <div className="space-y-4">
          {publications.map(pub => (
            <div key={pub.doi}>
              <a
                href={pub.arxivUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm t-secondary hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-emerald-400/40 leading-relaxed"
              >
                {pub.title}
              </a>
              <p className="text-xs t-muted mt-1">
                {pub.authors
                  .map(a => (
                    <span key={a.name} className={a.highlighted ? 'text-emerald-400/60' : ''}>
                      {a.name}
                    </span>
                  ))
                  .reduce<React.ReactNode[]>(
                    (acc, el, i) => (i === 0 ? [el] : [...acc, ', ', el]),
                    []
                  )}
              </p>
              <p className="text-xs t-faint mt-1">
                {pub.publisher} · {pub.volume} · {pub.date}
              </p>
              <div className="flex gap-3 mt-2">
                <a
                  href={pub.springerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs t-muted hover:text-emerald-400 transition-colors"
                >
                  Springer
                </a>
                <a
                  href={pub.arxivUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs t-muted hover:text-emerald-400 transition-colors"
                >
                  arXiv
                </a>
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs t-muted hover:text-emerald-400 transition-colors"
                >
                  DOI: {pub.doi}
                </a>
              </div>
            </div>
          ))}
        </div>
      )

    case 'achievements':
      return (
        <ul className="space-y-3">
          {achievements.map((a, i) => {
            const color =
              a.type === 'gold'
                ? 'text-yellow-400/70'
                : a.type === 'silver'
                  ? 't-muted'
                  : a.type === 'bronze'
                    ? 'text-orange-400/60'
                    : 't-muted'
            return (
              <li key={i} className="text-sm t-muted leading-relaxed flex items-start gap-2">
                <span className={`${color} mt-0.5`}>*</span>
                <span>{a.text}</span>
              </li>
            )
          })}
        </ul>
      )

    case 'community':
      return (
        <ul className="space-y-3">
          {clubs.map(c => (
            <li key={c.name} className="text-sm t-muted leading-relaxed">
              <span className="t-secondary">
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-emerald-400/40"
                  >
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
              </span>
              {c.role && <span className="t-faint"> · {c.role}</span>}
              {c.period && <span className="t-faint"> · {c.period}</span>}
              <p className="t-muted mt-0.5">{c.description}</p>
            </li>
          ))}
        </ul>
      )
  }
}
