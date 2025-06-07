import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PerformanceOptimizer } from '@/components/ui/performance-optimizer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improve font loading performance
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://aryanraj.dev'),
  title: 'Aryan Raj - Machine Learning Engineer & Backend Developer',
  description: 'Portfolio of Aryan Raj - Experienced ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications. SRM graduate with internships at HyperVerge, Emendo AI, and IIT Madras.',
  authors: [{ name: 'Aryan Raj' }],
  keywords: [
    'Aryan Raj',
    'Machine Learning Engineer', 
    'Backend Developer',
    'AI Engineer',
    'Python Developer',
    'React Developer',
    'LLM Engineer',
    'Computer Vision',
    'Deep Learning',
    'AWS',
    'TensorFlow',
    'PyTorch',
    'Next.js',
    'Portfolio',
    'SRM Institute',
    'HyperVerge',
    'Emendo AI',
    'IIT Madras'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Aryan Raj - Machine Learning Engineer & Backend Developer',
    description: 'Portfolio of Aryan Raj - Experienced ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications.',
    url: 'https://aryanraj.dev',
    siteName: 'Aryan Raj Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aryan Raj - Machine Learning Engineer & Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Raj - Machine Learning Engineer & Backend Developer',
    description: 'Portfolio of Aryan Raj - Experienced ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications.',
    creator: '@aryanraj2713',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'cRgIWr43Ax_DNTaFQ8VOkdNWt6jkjmG5jpqJYm5tAn0',
  },
  alternates: {
    canonical: 'https://aryanraj.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aryan Raj",
    "jobTitle": "Machine Learning Engineer & Backend Developer",
    "description": "Experienced ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications",
    "url": "https://aryanraj.dev",
    "email": "aryanraj2713@gmail.com",
    "telephone": "+91-8287276911",
    "sameAs": [
      "https://www.linkedin.com/in/aryanraj13/",
      "https://github.com/aryanraj2713"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SRM Institute of Science and Technology",
      "address": "Chennai, India"
    },
    "worksFor": [
      {
        "@type": "Organization",
        "name": "HyperVerge",
        "description": "Machine Learning Engineering Intern"
      }
    ],
    "knowsAbout": [
      "Machine Learning",
      "Artificial Intelligence", 
      "Computer Vision",
      "Natural Language Processing",
      "Python",
      "TensorFlow",
      "PyTorch",
      "AWS",
      "React",
      "Next.js"
    ]
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizer />
        {children}
      </body>
    </html>
  )
} 