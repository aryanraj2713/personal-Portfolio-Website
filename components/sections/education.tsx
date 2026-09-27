import { ArrowUpRight, GraduationCap, MapPin } from 'lucide-react'
import FadeIn from '@/components/fade-in'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="education">
        <div className="collection-heading">
          <div>
            <p className="section-eyebrow">Academic foundation</p>
            <h2>Education</h2>
          </div>
        </div>
        <div className="education-list">
          {education.map(ed => (
            <article key={ed.institution} className="education-card">
              <span className="education-icon">
                <GraduationCap size={22} aria-hidden="true" />
              </span>
              <div className="education-body">
                <div className="education-heading">
                  <h3>
                    <a href={ed.institutionUrl} target="_blank" rel="noopener noreferrer">
                      {ed.institution}
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </h3>
                  {ed.period && <p className="education-period">{ed.period}</p>}
                </div>
                <p className="education-degree">{ed.degree}</p>
                <div className="education-meta">
                  <span className="education-location">
                    <MapPin size={15} aria-hidden="true" />
                    {ed.location}
                  </span>
                  {ed.gpa && (
                    <span className="education-grade">
                      CGPA <strong>{ed.gpa}</strong>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
