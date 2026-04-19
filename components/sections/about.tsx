'use client'

import FadeIn from '@/components/fade-in'

export default function About() {
  return (
    <FadeIn as="section" className="py-12 border-t b-subtle">
      <div id="about">
        <h2 className="text-2xl md:text-3xl font-semibold t-primary mb-4">
          Building AI Solutions that Matter
        </h2>
        <div className="space-y-5 text-base t-muted leading-relaxed">
          <p>
            I am a <span className="t-secondary">Machine Learning Engineer</span> and{' '}
            <span className="t-secondary">Backend Developer</span> with experience building
            practical AI solutions and scalable applications. I graduated in Computer Science and
            Engineering from{' '}
            <span className="t-secondary">SRM Institute of Science and Technology</span>, with
            hands-on work in deep learning, generative AI, and cloud-based services.
          </p>
          <p>
            I am currently working at <span className="t-secondary">ValueLabs</span> on building
            scalable AI solutions to drive growth. In my current role, I work on building AI/ML
            solutions and contributing to developer tooling and analytics infrastructure. I&apos;ve
            worked on autonomous AI agents, prompt engineering frameworks, and scalable machine
            learning systems that reduce manual effort and improve performance.
          </p>
          <p>
            My internship experience spans AI-driven identity and fraud detection, serverless
            backend development, and research in machine learning systems for autonomous perception.
            I have also developed full-stack AI-based platforms that combine semantic search, OCR,
            and real-time inference.
          </p>
          <p>
            I enjoy working on projects that{' '}
            <span className="t-secondary">solve real problems</span> through practical application
            of AI and backend technologies, with a focus on{' '}
            <span className="t-secondary">clean design</span> and{' '}
            <span className="t-secondary">measurable impact</span>.
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
