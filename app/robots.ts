import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://www.aryanraj.cv/sitemap.xml',
  }
}

// LLMs.txt is available at: https://www.aryanraj.cv/llms.txt
