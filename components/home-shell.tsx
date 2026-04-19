'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect, useCallback } from 'react'
import Nav from '@/components/nav'

const CommandPalette = dynamic(() => import('@/components/command-palette'), { ssr: false })
const SectionIndicator = dynamic(() => import('@/components/section-indicator'), { ssr: false })
const CopyEffect = dynamic(() => import('@/components/copy-effect'), { ssr: false })

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
