import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PerformanceOptimizer } from '@/components/ui/performance-optimizer'
import { ConsoleHttpCat } from '@/components/ui/console-cat'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improve font loading performance
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  adjustFontFallback: false // Prevent layout shift
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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aryan Raj",
      "jobTitle": ["Machine Learning Engineer", "Backend Developer"],
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
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressCountry": "India"
        }
      },
      "worksFor": [
        {
          "@type": "Organization",
          "name": "HyperVerge",
          "jobTitle": "Machine Learning Engineering Intern",
          "startDate": "2024-08",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bengaluru",
            "addressCountry": "India"
          }
        }
      ],
      "knowsAbout": [
        "Machine Learning",
        "Artificial Intelligence", 
        "Computer Vision",
        "Natural Language Processing",
        "Large Language Models",
        "Python",
        "TensorFlow",
        "PyTorch",
        "AWS",
        "React",
        "Next.js",
        "FastAPI",
        "Docker"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "B.Tech Computer Science and Engineering",
          "educationalLevel": "Bachelor's Degree",
          "credentialCategory": "Degree"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Aryan Raj Portfolio",
      "url": "https://aryanraj.dev",
      "author": {
        "@type": "Person",
        "name": "Aryan Raj"
      },
      "description": "Portfolio showcasing machine learning projects, backend development work, and professional experience in AI/ML domain.",
      "inLanguage": "en-US"
    }
  ]

  return (
    <html lang="en">
      <head>
        {/* PWA Support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aryan Raj" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData[0])
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData[1])
          }}
        />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizer />
        <ConsoleHttpCat statusCode={496} />
        {children}
      </body>
    </html>
  )
} 