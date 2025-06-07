'use client'

import React, { useState, useEffect } from 'react'

const FloatingResumeButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Aryan_resume_new.pdf'
    link.download = 'Aryan_Raj_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={handleDownload}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              group relative
              w-14 h-14 rounded-full
              glass border border-emerald-400/30
              bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30
              hover:from-emerald-500/50 hover:via-cyan-500/50 hover:to-blue-500/50
              transform transition-all duration-300 ease-out
              ${isHovered ? 'scale-110 shadow-2xl shadow-emerald-500/30' : 'scale-100'}
              hover:border-emerald-400/60
              flex items-center justify-center
            `}
            title="Download Resume"
          >
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
            
            {/* Download icon */}
            <svg
              className={`
                w-6 h-6 text-emerald-400 relative z-10
                transform transition-transform duration-300
                ${isHovered ? 'scale-110' : 'scale-100'}
              `}
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
            
            {/* Tooltip */}
            {isHovered && (
              <div className="absolute right-full mr-3 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap">
                Download Resume
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45" />
              </div>
            )}
          </button>
        </div>
      )}
    </>
  )
}

export default FloatingResumeButton 