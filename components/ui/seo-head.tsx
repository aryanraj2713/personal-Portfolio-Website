'use client'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}

export function SEOHead({ 
  title = "Aryan Raj - Machine Learning Engineer & Backend Developer",
  description = "Portfolio of Aryan Raj - Experienced ML Engineer & Backend Developer specializing in AI solutions, LLMs, computer vision, and scalable web applications.",
  keywords = [],
  image = "/og-image.jpg",
  url = "https://aryanraj.dev"
}: SEOHeadProps) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Aryan Raj Portfolio" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@aryanraj2713" />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Aryan Raj" />
      <link rel="canonical" href={url} />
    </>
  )
} 