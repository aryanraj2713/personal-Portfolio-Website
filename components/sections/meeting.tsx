'use client'

import FadeIn from '@/components/fade-in'
import { personalInfo } from '@/lib/data'

export default function Meeting() {
  return (
    <FadeIn as="section" className="py-12 border-t b-subtle">
      <div id="meeting">
        <h2 className="text-xl md:text-2xl font-semibold t-primary mb-2">Let&apos;s talk</h2>
        <p className="text-sm t-muted mb-4 max-w-md">
          Book a 30-minute call to discuss AI/ML projects, collaboration opportunities, or ideas.
        </p>
        <a
          href={personalInfo.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Schedule on Cal.com
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </FadeIn>
  )
}
