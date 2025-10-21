import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="glass-light rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-gray-300">
            © {year} Aryan Raj. All rights reserved.
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="mailto:aryanraj2713@gmail.com"
              className="text-gray-300 hover:text-emerald-300 underline underline-offset-4"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/aryanraj13/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-300 underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aryanraj2713"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-300 underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="/Aryan_Raj_ML_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-300 underline underline-offset-4"
            >
              Resume
            </a>
            <a
              href="https://arxiv.org/pdf/2507.21287"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-300 underline underline-offset-4"
            >
              Publication
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer


