'use client'

import Image from 'next/image'
import FadeIn from '@/components/fade-in'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  return (
    <FadeIn as="section" className="pt-16 pb-12 md:pt-24 md:pb-16">
      <div id="home" className="flex items-center gap-4 mb-4">
        <Image
          src="/aryan_image.jpeg"
          alt={`${personalInfo.name} - Machine Learning Engineer`}
          width={48}
          height={48}
          priority
          className="rounded-full object-cover w-12 h-12"
        />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold t-primary tracking-[-0.02em]">
          {personalInfo.name}
        </h1>
      </div>
      <p className="text-xl md:text-2xl t-secondary mb-2">{personalInfo.title}</p>
      <p className="text-base md:text-lg t-muted mb-8 max-w-lg">{personalInfo.subtitle}</p>
      {/* Resume CTA */}
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-500 hover:text-emerald-300 transition-colors mb-6 group"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        View Resume
        <svg
          className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
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

      {/* Links row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm t-muted">
        <a
          href={`mailto:${personalInfo.email}`}
          className="hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-emerald-400/40"
        >
          {personalInfo.email}
        </a>
        {personalInfo.socials.map(s => (
          <span key={s.label} className="flex items-center gap-x-4">
            <span className="t-faint">·</span>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-emerald-400/40"
            >
              {s.label}
            </a>
          </span>
        ))}
      </div>
    </FadeIn>
  )
}
