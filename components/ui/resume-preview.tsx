'use client'

import React, { useState } from 'react'
import ResumePreviewModal from './resume-preview-modal'

const ResumePreview = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  return (
    <>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowPreview(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            group relative overflow-hidden glass rounded-xl px-8 py-4 border-2 border-transparent
            bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20
            hover:from-emerald-500/30 hover:via-cyan-500/30 hover:to-blue-500/30
            hover:border-emerald-400/50 transform transition-all duration-300 ease-out
            ${isHovered ? 'scale-105 shadow-2xl shadow-emerald-500/25' : 'scale-100'}
            active:scale-95
          `}
        >
          {/* Animated background gradient */}
          <div className={`
            absolute inset-0 
            bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10
            transform transition-transform duration-700 ease-out
            ${isHovered ? 'scale-110 rotate-1' : 'scale-100 rotate-0'}
          `} />
          
          {/* Shimmer effect */}
          <div className={`
            absolute inset-0 
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            transform transition-transform duration-1000 ease-out
            ${isHovered ? 'translate-x-full' : '-translate-x-full'}
          `} />
          
          <div className="relative flex items-center gap-3">
            {/* Preview icon with animation */}
            <div className={`
              transform transition-transform duration-300
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}>
              <svg
                className="w-6 h-6 text-emerald-400"
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
            
            {/* Text content */}
            <div className="text-center">
              <div className={`
                text-lg font-semibold text-white transition-colors duration-300
                ${isHovered ? 'text-emerald-300' : 'text-white'}
              `}>
                Preview & Download Resume
              </div>
              <div className="text-sm text-gray-300 opacity-80">
                PDF • View and download
              </div>
            </div>
            
            {/* Arrow icon with bounce animation */}
            <div className={`
              ml-2 transform transition-all duration-300
              ${isHovered ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-60'}
            `}>
              <svg
                className="w-5 h-5 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>

      {/* Resume Preview Modal */}
      <ResumePreviewModal 
        isOpen={showPreview} 
        onClose={() => setShowPreview(false)} 
      />
    </>
  )
}

export default ResumePreview 