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
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  adjustFontFallback: false, // Prevent layout shift
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aryanraj.cv'),
  title: {
    default: 'Aryan Raj - Machine Learning Engineer & Backend Developer',
    template: '%s | Aryan Raj Portfolio',
  },
  description:
    'Portfolio of Aryan Raj - ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications. SRM graduate with internships at HyperVerge, Emendo AI, and IIT Madras. Published researcher in RAG systems.',
  authors: [{ name: 'Aryan Raj', url: 'https://www.aryanraj.cv' }],
  creator: 'Aryan Raj',
  publisher: 'Aryan Raj',
  keywords: [
    'Aryan Raj',
    'Machine Learning Engineer',
    'Backend Developer',
    'AI Engineer',
    'Python Developer',
    'React Developer',
    'Next.js Developer',
    'LLM Engineer',
    'Computer Vision Engineer',
    'Deep Learning',
    'Neural Networks',
    'AWS Cloud Engineer',
    'TensorFlow',
    'PyTorch',
    'LangChain',
    'LangGraph',
    'LlamaIndex',
    'RAG',
    'Retrieval Augmented Generation',
    'Generative AI',
    'Large Language Models',
    'AI Agents',
    'Portfolio',
    'SRM Institute',
    'Ganga International School',
    'Valuelabs',
    'SEOstack',
    'HyperVerge',
    'Emendo AI',
    'IIT Madras',
    'KYC Solutions',
    'Fraud Detection',
    'Natural Language Processing',
    'NLP',
    'OpenCV',
    'FastAPI',
    'Docker',
    'Kubernetes',
    'MLOps',
    'Data Science',
    'Software Engineering',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Aryan Raj - Machine Learning Engineer & Backend Developer',
    description:
      'Portfolio of Aryan Raj - ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications.',
    url: 'https://www.aryanraj.cv',
    siteName: 'Aryan Raj Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aryan Raj - Machine Learning Engineer & Backend Developer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryan Raj - Machine Learning Engineer & Backend Developer',
    description:
      'Portfolio of Aryan Raj - ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications.',
    creator: '@aryanraj2713',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'cRgIWr43Ax_DNTaFQ8VOkdNWt6jkjmG5jpqJYm5tAn0',
  },
  alternates: {
    canonical: 'https://www.aryanraj.cv',
    languages: {
      'en-US': 'https://www.aryanraj.cv',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  category: 'Technology',
  classification: 'Portfolio Website',
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '28.6139;77.2090',
    ICBM: '28.6139, 77.2090',
    // Additional SEO meta tags
    'article:author': 'Aryan Raj',
    'article:published_time': '2024-01-01T00:00:00Z',
    'article:modified_time': new Date().toISOString(),
    'application-name': 'Aryan Raj Portfolio',
    'apple-mobile-web-app-title': 'Aryan Raj',
    'format-detection': 'telephone=yes',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Aryan Raj',
      jobTitle: ['Machine Learning Engineer', 'Backend Developer'],
      description:
        'ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications',
      url: 'https://www.aryanraj.cv',
      email: 'aryanraj2713@gmail.com',
      telephone: '+91-8287276911',
      sameAs: [
        'https://www.linkedin.com/in/aryanraj13/',
        'https://github.com/aryanraj2713',
        'https://x.com/aryanraj2713',
        'https://medium.com/@aryanraj2713',
      ],
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'SRM Institute of Science and Technology',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Chennai',
            addressCountry: 'India',
          },
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Ganga International School',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hiran Kudna',
            addressRegion: 'New Delhi',
            addressCountry: 'India',
          },
        },
      ],
      worksFor: [
        {
          '@type': 'Organization',
          name: 'Valuelabs',
          jobTitle: 'Software Engineer (AI/ML)',
          startDate: '2025-12',
        },
        {
          '@type': 'Organization',
          name: 'SEOstack',
          jobTitle: 'Machine Learning Engineer',
          startDate: '2025-09',
          endDate: '2025-12',
        },
        {
          '@type': 'Organization',
          name: 'HyperVerge',
          jobTitle: 'Machine Learning Engineering Intern',
          startDate: '2024-08',
          endDate: '2025-07',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Bengaluru',
            addressCountry: 'India',
          },
        },
      ],
      knowsAbout: [
        'Machine Learning',
        'Artificial Intelligence',
        'Computer Vision',
        'Natural Language Processing',
        'Large Language Models',
        'AI Agents',
        'LangChain',
        'LangGraph',
        'RAG (Retrieval Augmented Generation)',
        'Python',
        'TensorFlow',
        'PyTorch',
        'AWS',
        'React',
        'Next.js',
        'FastAPI',
        'Docker',
        'Kubernetes',
        'KYC Solutions',
        'Fraud Detection',
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'B.Tech Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning',
          educationalLevel: "Bachelor's Degree",
          credentialCategory: 'Degree',
          credentialAwardedBy: {
            '@type': 'EducationalOrganization',
            name: 'SRM Institute of Science and Technology',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'High School, CBSE (X and XII) Non Medical Sciences',
          educationalLevel: 'High School',
          credentialCategory: 'Diploma',
          credentialAwardedBy: {
            '@type': 'EducationalOrganization',
            name: 'Ganga International School',
          },
        },
      ],
      award: [
        '1st place at Standard Chartered Hackathon 2024 for OpenKYC',
        '2nd place at Hack Nova 2024 for Educative.AI',
        'Best Project Award in Open Innovation at MLH MesoHack 2022 for AI-RoadGuard',
      ],
      publications: [
        {
          '@type': 'ScholarlyArticle',
          '@id': 'https://www.aryanraj.cv#publication-1',
          headline:
            'Structured Relevance Assessment for Robust Retrieval-Augmented Language Models',
          author: [
            { '@type': 'Person', name: 'Aryan Raj' },
            { '@type': 'Person', name: 'Astitva Veer Garg' },
            { '@type': 'Person', name: 'Dr. Anitha D' },
          ],
          publisher: {
            '@type': 'Organization',
            name: 'Springer Nature',
          },
          datePublished: '2025',
          about: 'LLM-based automated evaluation for educational assessments',
          url: 'https://arxiv.org/pdf/2507.21287',
          inLanguage: 'en-US',
          keywords:
            'Retrieval-Augmented Generation, Large Language Models, RAG, Educational Assessment, LLM Evaluation',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Aryan Raj Portfolio',
      url: 'https://www.aryanraj.cv',
      author: {
        '@type': 'Person',
        name: 'Aryan Raj',
      },
      description:
        'Portfolio showcasing machine learning projects, backend development work, and professional experience in AI/ML domain.',
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.aryanraj.cv?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.aryanraj.cv#home',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Education',
          item: 'https://www.aryanraj.cv#education',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Experience',
          item: 'https://www.aryanraj.cv#experience',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Projects',
          item: 'https://www.aryanraj.cv#projects',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Skills',
          item: 'https://www.aryanraj.cv#skills',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Publications',
          item: 'https://www.aryanraj.cv#publications',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Contact',
          item: 'https://www.aryanraj.cv#contact',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SEOstack',
      url: 'https://seostack.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressCountry: 'India',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'HyperVerge',
      url: 'https://hyperverge.ai',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressCountry: 'India',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Aryan Raj - ML Engineering Services',
      description:
        'Machine Learning Engineering and Backend Development services specializing in AI solutions, LLMs, computer vision, and scalable web applications',
      url: 'https://www.aryanraj.cv',
      provider: {
        '@type': 'Person',
        name: 'Aryan Raj',
      },
      areaServed: 'Worldwide',
      serviceType: [
        'Machine Learning Engineering',
        'Backend Development',
        'AI Solutions',
        'LLM Integration',
        'Computer Vision',
        'RAG Systems',
      ],
    },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="apple-touch-icon" href="/icon-512.png" sizes="512x512" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="content-language" content="en-US" />

        {/* AI Visibility Meta Tags */}
        <meta
          name="ai:description"
          content="Portfolio of Aryan Raj - ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications. SRM graduate with internships at HyperVerge, Emendo AI, and IIT Madras. Published researcher in RAG systems."
        />
        <meta
          name="ai:keywords"
          content="Machine Learning Engineer, Backend Developer, LLM Engineer, AI Engineer, Computer Vision, NLP, RAG, LangChain, Python, TensorFlow, PyTorch, AWS, Next.js, FastAPI"
        />
        <meta name="ai:author" content="Aryan Raj" />
        <meta name="ai:contact" content="aryanraj2713@gmail.com" />

        {/* AI Visibility - LLMs.txt */}
        <link rel="llms.txt" href="/llms.txt" />

        {/* Performance hints - Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//arxiv.org" />
        <link rel="dns-prefetch" href="//x.com" />
        <link rel="dns-prefetch" href="//medium.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/aryan_image.jpeg" as="image" type="image/jpeg" />
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />

        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
        ))}
      </head>
      <body className={inter.className}>
        <PerformanceOptimizer />
        <ConsoleHttpCat statusCode={496} />
        {children}
      </body>
    </html>
  )
}
