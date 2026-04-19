'use client'

import { useState, useEffect, useCallback } from 'react'
import Nav from '@/components/nav'
import CommandPalette from '@/components/command-palette'
import SectionIndicator from '@/components/section-indicator'
import CopyEffect from '@/components/copy-effect'

export default function HomeShell({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setCommandOpen(prev => !prev)
    }
    if (e.key === 'Escape') {
      setCommandOpen(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <>
      <Nav onCommandPalette={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <SectionIndicator />
      <CopyEffect />
      {children}
    </>
  )
}
