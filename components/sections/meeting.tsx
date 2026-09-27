import { ArrowUpRight, CalendarDays, Clock3 } from 'lucide-react'
import FadeIn from '@/components/fade-in'
import { personalInfo } from '@/lib/data'

export default function Meeting() {
  return (
    <FadeIn as="section" className="py-12 border-t b-subtle">
      <div id="meeting" className="meeting-panel">
        <div className="meeting-copy">
          <p className="section-eyebrow">Start a conversation</p>
          <h2>
            Let&apos;s talk<span className="t-accent">.</span>
          </h2>
          <p className="meeting-description">
            Have an AI/ML project in mind, a collaboration opportunity, or an idea to explore?
            Let&apos;s find a time to connect.
          </p>
          <span className="meeting-duration">
            <Clock3 size={15} aria-hidden="true" />
            30-minute conversation
          </span>
        </div>
        <div className="meeting-actions">
          <a
            href={personalInfo.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button hero-button-primary meeting-book"
          >
            <CalendarDays size={18} aria-hidden="true" />
            Schedule a call
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p className="meeting-booking-note">Choose a time on Cal.com</p>
          <a href={`mailto:${personalInfo.email}`} className="meeting-email">
            Prefer email?
            <span>
              Get in touch <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </FadeIn>
  )
}
