import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medium Articles | Aryan Raj - AI & Machine Learning Blog',
  description:
    'Explore in-depth technical articles on AI, Machine Learning, and Software Engineering by Aryan Raj. Learn about AI agents, LLMs, neural networks, and modern development practices.',
  keywords:
    'AI articles, machine learning blog, software engineering, AI agents, LLM, transformers, EfficientNet, python development, technical writing',
  openGraph: {
    title: 'Medium Articles | Aryan Raj',
    description:
      'Explore in-depth technical articles on AI, Machine Learning, and Software Engineering',
    url: 'https://www.aryanraj.cv/blog',
    siteName: 'Aryan Raj Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medium Articles | Aryan Raj',
    description:
      'Explore in-depth technical articles on AI, Machine Learning, and Software Engineering',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
