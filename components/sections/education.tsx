'use client'

import FadeIn from '@/components/fade-in'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="education">
        <h2 className="text-2xl md:text-3xl font-semibold t-primary mb-10">Education</h2>
        <div className="space-y-8">
          {education.map(ed => (
            <div key={ed.institution}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <a
                  href={ed.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium t-primary hover:text-emerald-500 transition-colors underline underline-offset-4 decoration-current/20 hover:decoration-emerald-400/40"
                >
                  {ed.institution}
                </a>
                {ed.period && <span className="text-sm t-muted">{ed.period}</span>}
              </div>
              <p className="text-sm t-secondary mt-2">{ed.degree}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm t-muted">{ed.location}</span>
                {ed.gpa && <span className="text-sm t-muted">CGPA: {ed.gpa}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
