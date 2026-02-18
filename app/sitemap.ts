import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aryanraj.cv'
  const lastModified = new Date()

  // Only include actual crawlable URLs - hash fragments are NOT crawlable by search engines
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
