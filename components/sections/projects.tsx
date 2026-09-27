'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Trophy, Layers } from 'lucide-react'
import FadeIn from '@/components/fade-in'
import { projects } from '@/lib/data'

export default function Projects() {
  const [selected, setSelected] = useState(0)
  const [mobileSelected, setMobileSelected] = useState<number | null>(0)
  const project = projects[selected]

  return (
    <FadeIn as="section" className="py-16 border-t b-subtle">
      <div id="projects">
        <div className="collection-heading">
          <div>
            <p className="section-eyebrow">Ideas into applications</p>
            <h2>Projects</h2>
          </div>
          <span className="collection-count">
            {String(projects.length).padStart(2, '0')} projects
          </span>
        </div>
        <div className="collection-desktop">
          <div className="collection-list" aria-label="Choose a project">
            {projects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setSelected(i)}
                className="collection-option"
                aria-pressed={selected === i}
                aria-controls="project-detail"
              >
                <span className="collection-index">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="collection-title">{p.name}</span>
                  <span className="collection-summary">{p.description}</span>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div
            id="project-detail"
            className="collection-detail"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="detail-kicker">
              <Layers size={16} aria-hidden="true" /> Project{' '}
              {String(selected + 1).padStart(2, '0')}
            </div>
            <h3>{project.name}</h3>
            <p className="detail-description">{project.description}</p>
            <ProjectDetails project={project} />
          </div>
        </div>
        <div className="collection-mobile">
          {projects.map((p, i) => (
            <div key={p.name} className="mobile-project" data-open={mobileSelected === i}>
              <button
                className="mobile-project-toggle"
                onClick={() => setMobileSelected(mobileSelected === i ? null : i)}
                aria-expanded={mobileSelected === i}
                aria-controls={`mobile-project-${i}`}
              >
                <span>
                  <span className="collection-title">{p.name}</span>
                  <span className="collection-summary">{p.description}</span>
                </span>
                <ChevronDown size={18} aria-hidden="true" />
              </button>
              <div
                id={`mobile-project-${i}`}
                hidden={mobileSelected !== i}
                className="mobile-project-detail"
              >
                <ProjectDetails project={p} />
              </div>
            </div>
          ))}
        </div>
        <div className="collection-footer">
          <a href="https://github.com/aryanraj2713" target="_blank" rel="noopener noreferrer">
            More on GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href="/blog">
            Browse articles <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </FadeIn>
  )
}

function ProjectDetails({ project }: { project: (typeof projects)[number] }) {
  return (
    <>
      <div className="collection-tags" aria-label="Technologies">
        {project.stack.map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <ul className="project-points">
        {project.bullets.map(b => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {project.awards?.map(award => (
        <div key={award} className="project-award">
          <Trophy size={17} aria-hidden="true" />
          <span>{award}</span>
        </div>
      ))}
    </>
  )
}
