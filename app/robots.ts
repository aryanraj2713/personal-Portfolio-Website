import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const protectedPaths = ['/admin/', '/private/', '/api/']
  const allowPublicContent = (userAgent: string) => ({
    userAgent,
    allow: '/',
    disallow: protectedPaths,
  })

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: protectedPaths,
      },
      // Traditional search crawlers
      ...['Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot', 'YandexBot', 'Baiduspider'].map(
        allowPublicContent
      ),
      // OpenAI — search, user-requested browsing, and model improvement
      ...['OAI-SearchBot', 'GPTBot', 'ChatGPT-User'].map(allowPublicContent),
      // Anthropic — model, search, and user-requested browsing
      ...['ClaudeBot', 'Claude-SearchBot', 'Claude-User'].map(allowPublicContent),
      // Perplexity — search indexing and user-requested browsing
      ...['PerplexityBot', 'Perplexity-User'].map(allowPublicContent),
      // Google Extended — Gemini and generative AI controls
      allowPublicContent('Google-Extended'),
    ],
    sitemap: 'https://www.aryanraj.cv/sitemap.xml',
  }
}
