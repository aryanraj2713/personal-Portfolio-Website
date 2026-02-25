'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Navbar from '@/components/ui/navbar'
import AnimatedSection from '@/components/ui/animated-section'
import AnimatedCard from '@/components/ui/animated-card'

const Footer = dynamic(() => import('@/components/ui/footer'))

interface MediumArticle {
  title: string
  description: string
  url: string
  date: string
  readTime: string
  tags: string[]
}

const mediumArticles: MediumArticle[] = [
  {
    title: 'Building the AI Agents That Can Think and Act',
    description:
      'Explore the fascinating world of AI agents that can reason, plan, and execute complex tasks autonomously. Learn about the architectures and methodologies that enable AI systems to think and act intelligently.',
    url: 'https://medium.com/@aryanraj2713/building-the-ai-agents-that-can-think-and-act-0b195ccd6ece?source=friends_link&sk=43ef2b34ec4da20f79c0ded805a7ba04',
    date: 'January 2026',
    readTime: '8 min read',
    tags: ['AI', 'Machine Learning', 'Agents'],
  },
  {
    title: 'Exploring Attention Mechanisms in Large Language Models',
    description:
      'Deep dive into the attention mechanisms that power modern large language models. Understand how transformers use attention to process and generate human-like text.',
    url: 'https://medium.com/data-science-community-srm/exploring-attention-mechanisms-in-large-language-models-33549ae2c5b8?source=friends_link&sk=0c12b79b1b0740ee5b18fd8a4b315aee',
    date: 'December 2025',
    readTime: '10 min read',
    tags: ['LLM', 'Transformers', 'Deep Learning'],
  },
  {
    title: 'EfficientNet: A New Approach to Model Scaling',
    description:
      'Discover how EfficientNet revolutionizes neural network scaling by balancing depth, width, and resolution. Learn about compound scaling and its impact on model efficiency.',
    url: 'https://medium.com/data-science-community-srm/efficientnet-a-new-approach-to-model-scaling-213a56b89bd0?source=friends_link&sk=6beb3d3b3235471a9f3ad42fd9dc2399',
    date: 'November 2025',
    readTime: '7 min read',
    tags: ['Computer Vision', 'Neural Networks', 'Optimization'],
  },
  {
    title: 'Should You Still Learn to Code Deeply in 2026?',
    description:
      'In an era of AI-powered code generation, is deep coding knowledge still valuable? Explore why understanding fundamentals remains crucial for software engineers and AI practitioners.',
    url: 'https://medium.com/data-science-community-srm/should-you-still-learn-to-code-deeply-in-2026-e8d05b8d2081?source=friends_link&sk=ddaccfcdeb4343c9bd62b473f2f65e32',
    date: 'January 2026',
    readTime: '6 min read',
    tags: ['Career', 'Programming', 'AI'],
  },
  {
    title: 'How to Become a 100x Python Developer',
    description:
      'Master the tools and practices that separate exceptional Python developers from the rest. Learn about modern development workflows, testing, and best practices.',
    url: 'https://medium.com/@aryanraj2713/how-to-become-a-100x-python-developer-master-the-tools-and-practices-that-matter-d796788c2aa7?source=friends_link&sk=fe5d918218b304b2c0c9a1684ee2a2ed',
    date: 'December 2025',
    readTime: '12 min read',
    tags: ['Python', 'Development', 'Best Practices'],
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      {/* Immersive animated background - consistent with homepage */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div className="absolute top-[-10%] left-[-5%] w-[45rem] h-[45rem] bg-gradient-to-br from-emerald-500/35 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-blob-1" />
        <div className="absolute top-[30%] right-[-8%] w-[50rem] h-[50rem] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-blob-2" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-gradient-to-br from-pink-500/25 via-orange-500/15 to-transparent rounded-full blur-3xl animate-blob-3" />
      </div>

      <main className="relative min-h-screen">
        <div className="container mx-auto px-4 pt-24 pb-12 max-w-7xl">
          {/* Hero Section */}
          <AnimatedSection className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                {/* Medium logo */}
                <svg className="w-12 h-12 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Medium Articles
                </h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Exploring AI, Machine Learning, and Software Engineering through in-depth technical
              articles
            </motion.p>
          </AnimatedSection>

          {/* Articles Grid */}
          <AnimatedSection className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediumArticles.map((article, index) => (
                <AnimatedCard
                  key={article.url}
                  variant="scale"
                  delay={index * 0.1}
                  className="glass rounded-xl overflow-hidden border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group"
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full p-6"
                  >
                    {/* Meta info with Medium icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {article.readTime}
                        </span>
                      </div>
                      {/* Medium icon */}
                      <svg
                        className="w-5 h-5 text-white/40 group-hover:text-emerald-400 transition-colors duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read more indicator */}
                    <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Read article</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </a>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>

          {/* Call to action */}
          <AnimatedSection className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-xl p-8 border border-white/10 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Want to read more?</h3>
              <p className="text-gray-300 mb-6">
                Follow me on Medium for the latest articles on AI, Machine Learning, and Software
                Engineering
              </p>
              <a
                href="https://medium.com/@aryanraj2713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                Follow on Medium
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </>
  )
}
