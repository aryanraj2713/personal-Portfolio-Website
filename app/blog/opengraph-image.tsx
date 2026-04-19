import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Aryan Raj - AI & Machine Learning Blog'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
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
          fontSize: 56,
          fontWeight: 700,
          color: '#fafafa',
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        Writing
      </div>
      <div
        style={{
          fontSize: 28,
          color: '#10b981',
          marginBottom: 40,
        }}
      >
        AI, Machine Learning & Software Engineering
      </div>
      <div
        style={{
          fontSize: 20,
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        Aryan Raj · aryanraj.cv/blog
      </div>
    </div>,
    { ...size }
  )
}
