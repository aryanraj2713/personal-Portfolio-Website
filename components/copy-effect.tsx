'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CopyEffect() {
  const [toast, setToast] = useState<{ text: string; x: number; y: number } | null>(null)

  const handleCopy = useCallback((e: ClipboardEvent) => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) return

    const text = selection.toString().trim()
    if (!text) return

    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()

    setToast({
      text: text.length > 40 ? text.slice(0, 40) + '...' : text,
      x: Math.min(rect.left + rect.width / 2, window.innerWidth - 120),
      y: rect.top - 8,
    })

    setTimeout(() => setToast(null), 1800)
  }, [])

  useEffect(() => {
    document.addEventListener('copy', handleCopy)
    return () => document.removeEventListener('copy', handleCopy)
  }, [handleCopy])

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.95 }}
          animate={{ opacity: 1, y: -8, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="fixed z-[100] pointer-events-none"
          style={{ left: toast.x, top: toast.y, transform: 'translateX(-50%)' }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/20 backdrop-blur-md">
            <svg
              className="w-3.5 h-3.5 text-emerald-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-xs text-emerald-300 whitespace-nowrap">Copied</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
