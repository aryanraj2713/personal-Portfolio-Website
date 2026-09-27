'use client'

import { useState } from 'react'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import FadeIn from '@/components/fade-in'
import { blogArticles } from '@/lib/data'

export default function Writing() {
  const [selected, setSelected] = useState(0)
  const article = blogArticles[selected]

  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="writing">
        <div className="collection-heading">
          <div>
            <p className="section-eyebrow">Notes from the work</p>
            <h2>Writing</h2>
          </div>
          <span className="collection-count">
            {String(blogArticles.length).padStart(2, '0')} articles
          </span>
        </div>
        <div className="collection-desktop">
          <div className="collection-list" aria-label="Choose an article">
            {blogArticles.map((a, i) => (
              <button
                key={a.url}
                onClick={() => setSelected(i)}
                className="collection-option"
                aria-pressed={selected === i}
                aria-controls="article-detail"
              >
                <span className="collection-index">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="collection-title">{a.title}</span>
                  <span className="collection-meta">
                    {a.date} · {a.readTime}
                  </span>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div
            id="article-detail"
            className="collection-detail article-detail"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="detail-kicker">
              <BookOpen size={16} aria-hidden="true" /> {article.date} · {article.readTime}
            </div>
            <h3>{article.title}</h3>
            <p className="detail-description">{article.description}</p>
            <div className="collection-tags">
              {article.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-primary article-read"
            >
              Read on Medium <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="collection-mobile">
          {blogArticles.map(a => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-article"
            >
              <span className="collection-meta">
                {a.date} · {a.readTime}
              </span>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
              <span className="article-link">
                Read on Medium <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
        <div className="collection-footer">
          <a href="https://medium.com/@aryanraj2713" target="_blank" rel="noopener noreferrer">
            Follow on Medium <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </FadeIn>
  )
}
