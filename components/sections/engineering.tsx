import type { ReactNode } from 'react'
import { ArrowUpRight, ChevronDown, Trophy, BookOpen } from 'lucide-react'
import FadeIn from '@/components/fade-in'
import { skills, publications, achievements, clubs } from '@/lib/data'

function EngineeringGroup({
  number,
  title,
  count,
  children,
}: {
  number: string
  title: string
  count: string
  children: ReactNode
}) {
  return (
    <details open className="engineering-group">
      <summary>
        <span className="engineering-number" aria-hidden="true">
          {number}
        </span>
        <h3>{title}</h3>
        <span className="engineering-count">{count}</span>
        <ChevronDown size={18} aria-hidden="true" />
      </summary>
      <div className="engineering-content">{children}</div>
    </details>
  )
}

export default function Engineering() {
  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="engineering">
        <div className="collection-heading">
          <div>
            <p className="section-eyebrow">Tools, research &amp; community</p>
            <h2>Engineering</h2>
          </div>
        </div>
        <div className="engineering-groups">
          <EngineeringGroup
            number="01"
            title="Technical skills"
            count={`${skills.length} disciplines`}
          >
            <div className="engineering-skills">
              {skills.map(category => (
                <div key={category.category} className="engineering-skill">
                  <h4>{category.category}</h4>
                  <ul className="engineering-tags">
                    {category.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </EngineeringGroup>
          <EngineeringGroup
            number="02"
            title="Publications"
            count={`${publications.length} paper${publications.length === 1 ? '' : 's'}`}
          >
            {publications.map(pub => (
              <article key={pub.doi} className="engineering-paper">
                <p className="engineering-paper-meta">
                  <BookOpen size={16} aria-hidden="true" />
                  <span>
                    {pub.publisher} · {pub.date}
                  </span>
                </p>
                <h4>
                  <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </a>
                </h4>
                <p className="engineering-authors">
                  {pub.authors.map((author, i) => (
                    <span key={author.name}>
                      {i > 0 && ', '}
                      {author.highlighted ? <strong>{author.name}</strong> : author.name}
                    </span>
                  ))}
                </p>
                <p className="engineering-paper-description">{pub.description}</p>
                <p className="engineering-volume">{pub.volume}</p>
                <div className="engineering-paper-links">
                  <a href={pub.springerUrl} target="_blank" rel="noopener noreferrer">
                    Springer <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer">
                    Read on arXiv <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="engineering-doi"
                  >
                    DOI: {pub.doi} <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </EngineeringGroup>
          <EngineeringGroup
            number="03"
            title="Achievements"
            count={`${achievements.length} highlights`}
          >
            <ul className="engineering-achievements">
              {achievements.map(a => (
                <li key={a.text}>
                  <span className="engineering-award-icon">
                    {a.type === 'mention' ? (
                      <BookOpen size={19} aria-hidden="true" />
                    ) : (
                      <Trophy size={19} aria-hidden="true" />
                    )}
                  </span>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>
          </EngineeringGroup>
          <EngineeringGroup number="04" title="Community" count={`${clubs.length} communities`}>
            <ul className="engineering-community">
              {clubs.map(c => (
                <li key={c.name}>
                  <div className="engineering-community-heading">
                    <h4>
                      {c.link ? (
                        <a href={c.link} target="_blank" rel="noopener noreferrer">
                          {c.name}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ) : (
                        c.name
                      )}
                    </h4>
                    {c.period && <span>{c.period}</span>}
                  </div>
                  <p className="engineering-role">{c.role}</p>
                  <p className="engineering-community-description">{c.description}</p>
                </li>
              ))}
            </ul>
          </EngineeringGroup>
        </div>
      </div>
    </FadeIn>
  )
}
