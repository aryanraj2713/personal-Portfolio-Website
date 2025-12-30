import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://aryanraj13.vercel.app/sitemap.xml',
  }
}

// LLMs.txt is available at: https://aryanraj13.vercel.app/llms.txt
