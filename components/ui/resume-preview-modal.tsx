'use client'

import React, { useState } from 'react'

interface ResumePreviewModalProps {
  isOpen: boolean
  onClose: () => void
}

const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({ isOpen, onClose }) => {
  const [error, setError] = useState<string | null>(null)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Aryan_Raj_ML_Engineer.pdf'
    link.download = 'Aryan_Raj_ML_Engineer.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-5xl h-[95vh] glass rounded-2xl border border-white/20 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 flex-shrink-0">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">Resume Preview</h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Aryan Raj - Machine Learning Engineer
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Download button */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 rounded-lg transition-all duration-200"
            >
              <svg
                className="w-4 h-4 text-emerald-400"
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
              <span className="text-emerald-400 text-xs sm:text-sm font-medium">Download</span>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="Close resume preview"
              type="button"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer - Full height */}
        <div className="flex-1 relative overflow-hidden">
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 z-10">
              <div className="flex flex-col items-center gap-4 text-center p-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-red-400 font-medium">Unable to preview PDF</p>
                  <p className="text-gray-400 text-sm mt-1">{error}</p>
                  <button
                    onClick={handleDownload}
                    className="mt-4 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 rounded-lg transition-all duration-200 text-emerald-400 text-sm"
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PDF iframe - Full size */}
          <iframe
            src="/Aryan_Raj_ML_Engineer.pdf"
            className="w-full h-full border-0"
            title="Resume Preview - Aryan Raj"
            onError={() => {
              console.error('Failed to load PDF in iframe')
              setError('Failed to load PDF preview')
            }}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ResumePreviewModal
