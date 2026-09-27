'use client'

import Image from 'next/image'
import { ArrowDownRight, ArrowUpRight, FileText, Mail } from 'lucide-react'
import FadeIn from '@/components/fade-in'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  return (
    <FadeIn as="section" className="hero-section">
      <div id="home" className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">AI / ML &amp; Backend Engineering</p>
          <h1 className="hero-name">
            {personalInfo.name}
            <span className="t-accent">.</span>
          </h1>
          <p className="hero-role">{personalInfo.title}</p>
          <p className="hero-description">{personalInfo.subtitle}</p>
          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              Explore projects <ArrowDownRight size={18} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button-secondary"
            >
              <FileText size={18} aria-hidden="true" /> View resume
            </a>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="hero-photo-frame">
            <Image
              src="/aryan_image.jpeg"
              alt={personalInfo.name}
              width={240}
              height={280}
              sizes="(max-width: 767px) 80px, 240px"
              priority
              className="hero-photo"
            />
          </div>
          <p className="hero-location">{personalInfo.location}</p>
        </div>
      </div>
      <div className="hero-links">
        <a href={`mailto:${personalInfo.email}`} className="hero-email">
          <Mail size={16} aria-hidden="true" />
          {personalInfo.email}
        </a>
        <div className="hero-socials" aria-label="Social profiles">
          {personalInfo.socials.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
