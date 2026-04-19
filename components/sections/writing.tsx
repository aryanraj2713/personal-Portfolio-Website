'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import FadeIn from '@/components/fade-in'
import { blogArticles } from '@/lib/data'

export default function Writing() {
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState(0)
  const reduceMotion = useReducedMotion()

  const article = blogArticles[selected]

  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="writing">
        {/* Header with toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left flex items-center justify-between mb-6 group"
          aria-expanded={expanded}
        >
          <h2 className="text-2xl md:text-3xl font-semibold t-primary">Writing</h2>
          <svg
            className={`w-5 h-5 t-muted transition-transform ${expanded ? 'rotate-180' : ''}`}
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

        {/* Collapsed: preview row */}
        {!expanded && (
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm t-muted">
            {blogArticles.slice(0, 3).map(a => (
              <span key={a.title} className="truncate max-w-[250px]">
                {a.title}
              </span>
            ))}
            <button
              onClick={() => setExpanded(true)}
              className="text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              +{blogArticles.length - 3} more
            </button>
          </div>
        )}

        {/* Expanded: split view like projects */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
              }
              className="overflow-hidden"
            >
              {/* Desktop split view */}
              <div className="hidden md:grid grid-cols-[280px_1fr] gap-8">
                {/* Left: article list */}
                <div className="space-y-1">
                  {blogArticles.map((a, i) => (
                    <button
                      key={a.url}
                      onClick={() => setSelected(i)}
                      className={`w-full text-left px-3 py-3 rounded-lg transition-colors group ${
                        selected === i
                          ? 'border-l-2 border-emerald-500 bg-[var(--border-subtle)]'
                          : 'border-l-2 border-transparent hover:bg-[var(--border-subtle)]'
                      }`}
                    >
                      <div
                        className={`font-medium text-sm ${selected === i ? 't-primary' : 't-secondary'} group-hover:t-primary transition-colors`}
                      >
                        {a.title}
                      </div>
                      <div className="text-xs t-faint mt-0.5">
                        {a.date} · {a.readTime}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Right: detail */}
                <div className="sticky top-20 self-start">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={article.url}
                      initial={reduceMotion ? undefined : { opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, x: -8 }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.15 }}
                    >
                      <h3 className="text-xl font-semibold t-primary mb-3">{article.title}</h3>
                      <p className="text-sm t-muted leading-relaxed mb-4">{article.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {article.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs t-faint border b-muted rounded px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
                      >
                        Read on Medium
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile: simple list */}
              <div className="md:hidden space-y-4">
                {blogArticles.map(a => (
                  <a
                    key={a.url}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 border-b b-subtle last:border-0 group"
                  >
                    <div className="text-sm font-medium t-secondary group-hover:text-emerald-500 transition-colors">
                      {a.title}
                    </div>
                    <div className="text-xs t-faint mt-1">
                      {a.date} · {a.readTime}
                    </div>
                  </a>
                ))}
              </div>

              {/* Follow link */}
              <div className="mt-6">
                <a
                  href="https://medium.com/@aryanraj2713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm t-muted hover:text-emerald-500 transition-colors underline underline-offset-4"
                >
                  Follow on Medium
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}
