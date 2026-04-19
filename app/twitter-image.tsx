import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Aryan Raj - ML Engineer & Backend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#0a0a0b',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: '#fafafa',
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        Aryan Raj
      </div>
      <div
        style={{
          fontSize: 32,
          color: '#10b981',
          marginBottom: 40,
        }}
      >
        ML Engineer building AI systems at ValueLabs
      </div>
      <div
        style={{
          display: 'flex',
          gap: 24,
          fontSize: 20,
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        <span>LLMs</span>
        <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
        <span>Computer Vision</span>
        <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
        <span>RAG Systems</span>
        <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
        <span>Full-Stack AI</span>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: 80,
          fontSize: 18,
          color: 'rgba(255,255,255,0.2)',
        }}
      >
        aryanraj.cv
      </div>
    </div>,
    { ...size }
  )
}
