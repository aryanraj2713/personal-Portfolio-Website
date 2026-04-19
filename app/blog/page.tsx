'use client'

import { useState, useEffect, useCallback } from 'react'
import Nav from '@/components/nav'
import CommandPalette from '@/components/command-palette'
import FadeIn from '@/components/fade-in'
import CopyEffect from '@/components/copy-effect'
import Footer from '@/components/sections/footer'
import { blogArticles } from '@/lib/data'

export default function BlogPage() {
  const [commandOpen, setCommandOpen] = useState(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setCommandOpen(prev => !prev)
    }
    if (e.key === 'Escape') setCommandOpen(false)
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <Nav onCommandPalette={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <CopyEffect />

      <main className="max-w-[1120px] mx-auto px-6 pt-14">
        <FadeIn className="pt-16 pb-8 md:pt-24">
          <h1 className="text-3xl md:text-4xl font-bold t-primary mb-2">Writing</h1>
          <p className="text-sm t-muted max-w-lg">
            Exploring AI, Machine Learning, and Software Engineering through in-depth technical
            articles.
          </p>
        </FadeIn>

        <div className="space-y-1 pb-16">
          {blogArticles.map((article, i) => (
            <FadeIn key={article.url} delay={i * 0.03}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 group border-b b-subtle last:border-0"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h2 className="text-sm font-medium t-secondary group-hover:text-emerald-500 transition-colors">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs t-faint shrink-0">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {article.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] t-faint border b-subtle rounded px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="pb-12">
          <a
            href="https://medium.com/@aryanraj2713"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm t-muted hover:text-emerald-500 transition-colors underline underline-offset-4 decoration-current/20"
          >
            Follow on Medium
          </a>
        </FadeIn>
      </main>

      <div className="max-w-[1120px] mx-auto px-6">
        <Footer />
      </div>
    </>
  )
}
