import FadeIn from '@/components/fade-in'
import { experience } from '@/lib/data'

export default function Work() {
  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="work">
        <h2 className="section-title mb-8">Work</h2>
        <div className="relative pl-6 border-l b-muted">
          {experience.map(exp => (
            <div key={`${exp.company}-${exp.period}`} className="relative mb-8 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute -left-[calc(1.5rem+4.5px)] top-1.5 w-[9px] h-[9px] rounded-full border-2 border-[var(--accent-ink)] bg-[var(--surface)]" />

              <div className="w-full text-left">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <span className="font-medium t-primary">{exp.company}</span>
                    <span className="t-muted mx-2">·</span>
                    <span className="text-sm t-secondary">{exp.title}</span>
                  </div>
                  <span className="text-xs t-muted shrink-0">{exp.period}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs t-muted">{exp.location}</span>
                  {exp.type === 'internship' && (
                    <span className="text-[11px] t-muted border b-muted rounded px-1.5 py-0.5">
                      Internship
                    </span>
                  )}
                </div>
              </div>

              <ul className="work-points">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
