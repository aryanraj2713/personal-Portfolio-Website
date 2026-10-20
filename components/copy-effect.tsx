'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CopyEffect() {
  const [toast, setToast] = useState<{ id: number; x: number; y: number } | null>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleCopy = useCallback((e: ClipboardEvent) => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) return

    const text = selection.toString().trim()
    if (!text) return

    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()

    setToast({
      id: Date.now(),
      x: Math.min(rect.left + rect.width / 2, window.innerWidth - 120),
      y: rect.top - 8,
    })

    // A new copy restarts the timer instead of being hidden by the previous one.
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setToast(null), 1800)
  }, [])

  useEffect(() => {
    document.addEventListener('copy', handleCopy)
    return () => {
      document.removeEventListener('copy', handleCopy)
      clearTimeout(hideTimer.current)
    }
  }, [handleCopy])

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          // x lives in motion values; an inline transform would be overwritten.
          initial={{ opacity: 0, x: '-50%', y: 4, scale: 0.95 }}
          animate={{ opacity: 1, x: '-50%', y: -8, scale: 1 }}
          exit={{ opacity: 0, x: '-50%', y: -12, scale: 0.97, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          role="status"
          className="fixed z-[100] pointer-events-none origin-bottom"
          style={{ left: toast.x, top: toast.y }}
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-elevated border b-muted shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            <svg
              className="w-3.5 h-3.5 t-accent shrink-0"
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
            <span className="text-xs t-primary whitespace-nowrap">Copied</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
