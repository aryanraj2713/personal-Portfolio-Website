'use client'

import React, { useState } from 'react'
import ResumePreviewModal from './resume-preview-modal'

const ResumePreview = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const scrollToMeeting = () => {
    const element = document.getElementById('book-meeting')
    if (element) {
      const navbarHeight = 100 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Aryan_Raj_ML_Engineer.pdf'
    link.download = 'Aryan_Raj_ML_Engineer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-3 sm:gap-4 mb-8 px-4 sm:px-0">
        {/* Preview Resume Button */}
        <button
          onClick={() => setShowPreview(true)}
          onMouseEnter={() => setHoveredButton('preview')}
          onMouseLeave={() => setHoveredButton(null)}
          className={`
            group relative overflow-hidden glass rounded-xl px-4 sm:px-6 py-3 sm:py-4 border-2 border-transparent
            bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20
            hover:from-emerald-500/30 hover:via-cyan-500/30 hover:to-blue-500/30
            hover:border-emerald-400/50 transform transition-all duration-300 ease-out
            ${hoveredButton === 'preview' ? 'sm:scale-105 shadow-2xl shadow-emerald-500/25' : 'scale-100'}
            active:scale-95 w-full sm:w-auto
          `}
        >
          <div
            className={`
            absolute inset-0 
            bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10
            transform transition-transform duration-700 ease-out
            ${hoveredButton === 'preview' ? 'scale-110 rotate-1' : 'scale-100 rotate-0'}
          `}
          />

          <div
            className={`
            absolute inset-0 
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform transition-transform duration-1000 ease-out
            ${hoveredButton === 'preview' ? 'translate-x-full' : '-translate-x-full'}
          `}
          />

          <div className="relative flex items-center justify-center gap-2 sm:gap-3">
            <div
              className={`transform transition-transform duration-300 ${hoveredButton === 'preview' ? 'scale-110' : 'scale-100'}`}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>

            <div>
              <div
                className={`text-sm sm:text-base font-semibold text-white transition-colors duration-300 ${hoveredButton === 'preview' ? 'text-emerald-300' : 'text-white'}`}
              >
                Preview Resume
              </div>
            </div>
          </div>
        </button>

        {/* Download Resume Button */}
        <button
          onClick={handleDownload}
          onMouseEnter={() => setHoveredButton('download')}
          onMouseLeave={() => setHoveredButton(null)}
          className={`
            group relative overflow-hidden glass rounded-xl px-4 sm:px-6 py-3 sm:py-4 border-2 border-transparent
            bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20
            hover:from-purple-500/30 hover:via-blue-500/30 hover:to-cyan-500/30
            hover:border-purple-400/50 transform transition-all duration-300 ease-out
            ${hoveredButton === 'download' ? 'sm:scale-105 shadow-2xl shadow-purple-500/25' : 'scale-100'}
            active:scale-95 w-full sm:w-auto
          `}
        >
          <div
            className={`
            absolute inset-0 
            bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-cyan-400/10
            transform transition-transform duration-700 ease-out
            ${hoveredButton === 'download' ? 'scale-110 rotate-1' : 'scale-100 rotate-0'}
          `}
          />

          <div
            className={`
            absolute inset-0 
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform transition-transform duration-1000 ease-out
            ${hoveredButton === 'download' ? 'translate-x-full' : '-translate-x-full'}
          `}
          />

          <div className="relative flex items-center justify-center gap-2 sm:gap-3">
            <div
              className={`transform transition-transform duration-300 ${hoveredButton === 'download' ? 'scale-110' : 'scale-100'}`}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <div>
              <div
                className={`text-sm sm:text-base font-semibold text-white transition-colors duration-300 ${hoveredButton === 'download' ? 'text-purple-300' : 'text-white'}`}
              >
                Download Resume
              </div>
            </div>
          </div>
        </button>

        {/* Schedule Meeting Button */}
        <button
          onClick={scrollToMeeting}
          onMouseEnter={() => setHoveredButton('meeting')}
          onMouseLeave={() => setHoveredButton(null)}
          className={`
            group relative overflow-hidden glass rounded-xl px-4 sm:px-6 py-3 sm:py-4 border-2 border-transparent
            bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-emerald-500/20
            hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-emerald-500/30
            hover:border-cyan-400/50 transform transition-all duration-300 ease-out
            ${hoveredButton === 'meeting' ? 'sm:scale-105 shadow-2xl shadow-cyan-500/25' : 'scale-100'}
            active:scale-95 w-full sm:w-auto
          `}
        >
          <div
            className={`
            absolute inset-0 
            bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-emerald-400/10
            transform transition-transform duration-700 ease-out
            ${hoveredButton === 'meeting' ? 'scale-110 rotate-1' : 'scale-100 rotate-0'}
          `}
          />

          <div
            className={`
            absolute inset-0 
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform transition-transform duration-1000 ease-out
            ${hoveredButton === 'meeting' ? 'translate-x-full' : '-translate-x-full'}
          `}
          />

          <div className="relative flex items-center justify-center gap-2 sm:gap-3">
            <div
              className={`transform transition-transform duration-300 ${hoveredButton === 'meeting' ? 'scale-110' : 'scale-100'}`}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div>
              <div
                className={`text-sm sm:text-base font-semibold text-white transition-colors duration-300 ${hoveredButton === 'meeting' ? 'text-cyan-300' : 'text-white'}`}
              >
                Schedule Meeting
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Resume Preview Modal */}
      <ResumePreviewModal isOpen={showPreview} onClose={() => setShowPreview(false)} />
    </>
  )
}

export default ResumePreview
