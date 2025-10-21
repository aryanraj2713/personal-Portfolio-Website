'use client'

import React from 'react'
import { LazyLoad, SkeletonLoader } from '@/components/ui/lazy-load'

interface LinkedInFeedProps {
  embedUrls?: string[]
  profileUrl?: string
  itemHeight?: number
  heights?: number[]
  lazy?: boolean
  maxWidth?: number
  maxHeight?: number
}

// Renders a vertical list of LinkedIn post embeds using iframes.
// Pass LinkedIn embed URLs (Format: https://www.linkedin.com/embed/feed/update/urn:li:activity:...)
// You can copy an embed URL from any LinkedIn post via "Embed this post".
const LinkedInFeed: React.FC<LinkedInFeedProps> = ({
  embedUrls = [],
  profileUrl,
  itemHeight = 900,
  heights,
  lazy = true,
  maxWidth = 520,
  maxHeight,
}) => {
  if (!embedUrls.length) {
    return (
      <div className="glass rounded-xl p-6 text-gray-300">
        <p className="mb-3">No embedded posts yet.</p>
        {profileUrl ? (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
          >
            Visit my LinkedIn
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
            </svg>
          </a>
        ) : null}
      </div>
    )
  }

  const renderIframe = (url: string, idx: number) => {
    const computedHeight = Math.min(
      heights?.[idx] || itemHeight,
      typeof maxHeight === 'number' ? maxHeight : Number.MAX_SAFE_INTEGER
    )

    return (
      <div
        key={`${url}-${idx}`}
        className="relative w-full rounded-xl overflow-hidden glass mx-auto"
        style={{ maxWidth }}
      >
        <iframe
          src={url}
          height={computedHeight}
        className="w-full rounded-xl"
        frameBorder="0"
        allowFullScreen
        title={`LinkedIn Post ${idx + 1}`}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {embedUrls.map((url, idx) =>
        lazy ? (
          <LazyLoad
            key={`${url}-${idx}`}
            placeholder={<SkeletonLoader className="h-[600px] rounded-xl" />}
            rootMargin="200px"
          >
            {renderIframe(url, idx)}
          </LazyLoad>
        ) : (
          renderIframe(url, idx)
        )
      )}
    </div>
  )
}

export default LinkedInFeed


