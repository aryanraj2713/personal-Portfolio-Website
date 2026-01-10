import dynamic from 'next/dynamic'
import Navbar from '@/components/ui/navbar'
import Avatar from '@/components/ui/avatar'

// Lazy load non-critical components for better initial page load
const ResumePreview = dynamic(() => import('@/components/ui/resume-preview'), {
  loading: () => <div className="min-h-[400px]" />,
})
const FloatingResumeButton = dynamic(() => import('@/components/ui/floating-resume-button'))
const ContactForm = dynamic(() => import('@/components/ui/contact-form'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Footer = dynamic(() => import('@/components/ui/footer'))

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Additional animated gradient blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-blob-1"></div>
        <div className="absolute top-1/2 right-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl animate-blob-2"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[25rem] h-[25rem] bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent rounded-full blur-3xl animate-blob-3"></div>

        {/* Animated SVG waves */}
        <div className="absolute top-0 left-0 w-full opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="animate-wave-1">
            <path
              fill="#10b981"
              fillOpacity="0.3"
              d="M0,96L84.7,128L169.4,96L254.1,128L338.8,160L423.5,128L508.2,96L592.9,128L677.6,160L762.4,128L847.1,96L931.8,128L1016.5,160L1101.2,128L1185.9,96L1270.6,128L1355.3,160L1440,128L1440,0L1355.3,0L1270.6,0L1185.9,0L1101.2,0L1016.5,0L931.8,0L847.1,0L762.4,0L677.6,0L592.9,0L508.2,0L423.5,0L338.8,0L254.1,0L169.4,0L84.7,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="absolute top-10 left-0 w-full opacity-15">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="animate-wave-2">
            <path
              fill="#06b6d4"
              fillOpacity="0.4"
              d="M0,160L84.7,138.7L169.4,160L254.1,138.7L338.8,117.3L423.5,138.7L508.2,160L592.9,138.7L677.6,117.3L762.4,138.7L847.1,160L931.8,138.7L1016.5,117.3L1101.2,138.7L1185.9,160L1270.6,138.7L1355.3,117.3L1440,138.7L1440,0L1355.3,0L1270.6,0L1185.9,0L1101.2,0L1016.5,0L931.8,0L847.1,0L762.4,0L677.6,0L592.9,0L508.2,0L423.5,0L338.8,0L254.1,0L169.4,0L84.7,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-full opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="animate-wave-3">
            <path
              fill="#3b82f6"
              fillOpacity="0.3"
              d="M0,96L84.7,192L169.4,96L254.1,192L338.8,128L423.5,256L508.2,32L592.9,64L677.6,224L762.4,128L847.1,224L931.8,128L1016.5,224L1101.2,64L1185.9,320L1270.6,64L1355.3,128L1440,256L1440,320L1355.3,320L1270.6,320L1185.9,320L1101.2,320L1016.5,320L931.8,320L847.1,320L762.4,320L677.6,320L592.9,320L508.2,320L423.5,320L338.8,320L254.1,320L169.4,320L84.7,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="absolute bottom-10 left-0 w-full opacity-15">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="animate-wave-4">
            <path
              fill="#8b5cf6"
              fillOpacity="0.4"
              d="M0,224L84.7,213.3L169.4,224L254.1,213.3L338.8,202.7L423.5,213.3L508.2,224L592.9,213.3L677.6,202.7L762.4,213.3L847.1,224L931.8,213.3L1016.5,202.7L1101.2,213.3L1185.9,224L1270.6,213.3L1355.3,202.7L1440,213.3L1440,320L1355.3,320L1270.6,320L1185.9,320L1101.2,320L1016.5,320L931.8,320L847.1,320L762.4,320L677.6,320L592.9,320L508.2,320L423.5,320L338.8,320L254.1,320L169.4,320L84.7,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <main className="min-h-screen pt-24 pb-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div id="home" className="text-center mb-12">
            <div className="flex justify-center mt-10 md:mt-16 mb-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <Avatar alt="Aryan Raj" className="w-full h-full" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text leading-tight">
              Aryan Raj
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Machine Learning Engineer & Backend Developer
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 8287276911</span>
              </div>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:aryanraj2713@gmail.com"
                  className="hover:text-emerald-400 transition-colors"
                >
                  aryanraj2713@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <a
                  href="https://www.linkedin.com/in/aryanraj13/"
                  target="_blank"
                  className="hover:text-emerald-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a
                  href="https://github.com/aryanraj2713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <a
                  href="https://x.com/aryanraj2713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  X
                </a>
              </div>
              <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.38-2.88-3.38-6.42s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-1.05 5.75-2.34 5.75-1.3 0-2.34-2.58-2.34-5.75s1.05-5.75 2.34-5.75C22.95 6.25 24 8.83 24 12" />
                </svg>
                <a
                  href="https://medium.com/@aryanraj2713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Medium
                </a>
              </div>
            </div>
          </div>

          {/* Resume Preview Component */}
          <ResumePreview />

          <section id="education" className="mb-12" aria-labelledby="education-heading">
            <h2 id="education-heading" className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              Education
            </h2>
            <div className="space-y-6">
              <div className="fancy-card group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    <a
                      href="https://www.srmist.edu.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      SRM Institute of Science and Technology
                    </a>
                  </h3>
                  <span className="text-sm text-gray-400">Chennai, IN</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  B.Tech Computer Science and Engineering with spl. in Artificial Intelligence and
                  Machine Learning
                </p>
                <p className="text-sm text-gray-300 mb-1">May 2021 - May 2025</p>
                <p className="text-sm text-emerald-400 font-semibold">CGPA: 8.4/10</p>
              </div>

              <div className="fancy-card group">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    <a
                      href="https://www.gangainternationalschool.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      Ganga International School
                    </a>
                  </h3>
                  <span className="text-sm text-gray-400">Hiran Kudna, New Delhi</span>
                </div>
                <p className="text-sm text-gray-300 mb-1">
                  High School, CBSE (X and XII) Non Medical Sciences
                </p>
                <p className="text-sm text-gray-300 mb-2">
                  (With Computer Science and Commercial Arts)
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="mb-12" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Experience
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">Software Engineer (AI/ML)</h3>
                  <span className="text-sm text-gray-400">Hyderabad, IN</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">
                    <a
                      href="https://www.valuelabs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      Valuelabs
                    </a>
                  </span>
                  <span className="text-sm text-gray-300">Dec 2025 - Present</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Building deep learning and generative AI proof-of-concepts (POCs) and MVPs for
                    client projects, delivering compelling product demos and driving internal AI
                    adoption initiatives across the organization.
                  </li>
                  <li>
                    • Contributing to the flagship product AiDE and its subsidiary tools,
                    architecting integrations with various productivity platforms to enhance
                    developer workflows and increase team efficiency.
                  </li>
                  <li>
                    • Architecting data analytics solutions, data warehousing infrastructure, and
                    lakehouse architectures to support company-wide KPIs and metrics adoption,
                    enabling data-driven decision making at scale.
                  </li>
                </ul>
              </div>

              <div className="glass rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">Machine Learning Engineer</h3>
                  <span className="text-sm text-gray-400">Hyderabad, IN</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">
                    <a
                      href="https://www.seo-stack.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      SEOstack
                    </a>
                  </span>
                  <span className="text-sm text-gray-300">Sep 2025 - Dec 2025</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Building and deploying autonomous AI agents to automate complex SEO workflows
                    and content analysis pipelines, reducing manual effort by 60% and improving
                    turnaround times.
                  </li>
                  <li>
                    • Designing and implementing scalable machine learning infrastructure to support
                    multi-step reasoning and real-time content optimization.
                  </li>
                  <li>
                    • Architecting prompt engineering frameworks and evaluation systems to ensure
                    high-quality, contextually relevant SEO recommendations across diverse client
                    domains.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="internships" className="mb-12" aria-labelledby="internships-heading">
            <h2 id="internships-heading" className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Internships
            </h2>

            <div className="space-y-6">
              <div className="glass rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    Machine Learning Engineer (Intern)
                  </h3>
                  <span className="text-sm text-gray-400">Bengaluru, IN</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">
                    <a
                      href="https://hyperverge.co/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      HyperVerge
                    </a>
                  </span>
                  <span className="text-sm text-gray-300">Aug 2024 - July 2025</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Developed and fine-tuned LLM-based solutions to automate KYC and fraud
                    detection workflows, tailored for real-world, domain-specific regulatory use
                    cases across financial institutions.
                  </li>
                  <li>
                    • Led evaluation and benchmarking of LLMs on over a million real-world data
                    points, setting up scalable performance monitoring pipelines and achieving
                    industry-accepted False Acceptance Rate (FAR) and False Rejection Rate (FRR)
                    thresholds.
                  </li>
                  <li>
                    • Optimized and deployed state-of-the-art computer vision and NLP models for
                    identity verification, significantly improving inference speed and accuracy
                    under production constraints.
                  </li>
                </ul>
              </div>

              <div className="glass rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">Machine Learning Intern</h3>
                  <span className="text-sm text-gray-400">California, USA (Remote)</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">
                    <a
                      href="https://emendo.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      Emendo AI
                    </a>
                  </span>
                  <span className="text-sm text-gray-300">Jan 2024 - Aug 2024</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Engineered and deployed AI solutions leveraging the AWS ecosystem with a focus
                    on Generative AI to build scalable, client-centric applications.
                  </li>
                  <li>
                    • Developed and maintained 10+ Generative AI-based microservices with
                    industry-standard integrations using AWS Lambda, API Gateway, and OpenTelemetry
                    for observability.
                  </li>
                  <li>
                    • Architected scalable, serverless backends to support efficient retrieval and
                    generation workflows across diverse application domains.
                  </li>
                </ul>
              </div>

              <div className="glass rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">Research Intern</h3>
                  <span className="text-sm text-gray-400">Chennai, IN</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">
                    <a
                      href="https://www.iitm.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      Indian Institute of Technology, Madras (IIT M)
                    </a>
                  </span>
                  <span className="text-sm text-gray-300">Feb 2023 - Jul 2023</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Collaborated with the Department of Ocean Engineering to design and implement
                    a machine learning-based anti-collision system, improving accuracy of existing
                    solutions by over 28%.
                  </li>
                  <li>
                    • Developed marine object detection, tracking, and localisation systems using
                    stereo vision-based camera setups for alternative navigation in unmanned surface
                    vehicles (USVs).
                  </li>
                  <li>
                    • Worked with state-of-the-art computer vision models and successfully deployed
                    the solution on edge-based IoT hardware for real-time maritime applications.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Book a Meeting Section */}
          <section id="book-meeting" className="mb-12" aria-labelledby="book-meeting-heading">
            <h2 id="book-meeting-heading" className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
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
              Book a Meeting
            </h2>

            {/* Liquid Glass Container - Apple Style */}
            <div className="relative group">
              {/* Background gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

              {/* Main liquid glass card */}
              <div className="relative rounded-3xl p-8 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
                {/* Subtle mesh gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5"></div>

                {/* Content */}
                <div className="relative flex flex-col md:flex-row items-center gap-8">
                  {/* Left side - Icon with liquid glass effect */}
                  <div className="flex-shrink-0">
                    <div className="relative group/icon">
                      {/* Icon container with liquid glass */}
                      <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center shadow-xl transform transition-all duration-500 group-hover/icon:scale-105 group-hover/icon:rotate-3">
                        {/* Inner glow */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-2xl"></div>

                        {/* Calendar icon */}
                        <svg
                          className="relative w-14 h-14 md:w-16 md:h-16 text-emerald-400 drop-shadow-lg"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
                      Let's Connect!
                    </h3>
                    <p className="text-white/70 mb-8 leading-relaxed text-base">
                      Schedule a 30-minute meeting to discuss:
                    </p>

                    {/* Meeting topics with liquid glass pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      <div className="group/item backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:border-emerald-400/30">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 shadow-lg shadow-emerald-400/50"></div>
                          <span className="text-white/90 text-sm font-medium">
                            Collaboration opportunities
                          </span>
                        </div>
                      </div>

                      <div className="group/item backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/30">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 shadow-lg shadow-cyan-400/50"></div>
                          <span className="text-white/90 text-sm font-medium">
                            Discuss ideas & projects
                          </span>
                        </div>
                      </div>

                      <div className="group/item backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:border-blue-400/30">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 shadow-lg shadow-blue-400/50"></div>
                          <span className="text-white/90 text-sm font-medium">
                            Discuss ML/AI topics
                          </span>
                        </div>
                      </div>

                      <div className="group/item backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white/10 hover:border-purple-400/30">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-300 shadow-lg shadow-purple-400/50"></div>
                          <span className="text-white/90 text-sm font-medium">Seek mentorship</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button - Liquid glass style */}
                    <a
                      href="https://cal.com/aryan-raj-kxydsh/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                        backdrop-blur-xl bg-gradient-to-r from-emerald-500/90 to-cyan-500/90
                        hover:from-emerald-400 hover:to-cyan-400
                        border border-white/20 shadow-2xl shadow-emerald-500/25
                        text-white font-semibold text-base
                        transform transition-all duration-500 ease-out
                        hover:scale-[1.02] hover:shadow-emerald-500/40 hover:-translate-y-0.5
                        active:scale-[0.98]"
                    >
                      <svg
                        className="w-5 h-5 transition-transform duration-500 group-hover/btn:rotate-12"
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
                      <span>Schedule a 30-Minute Meeting</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="mb-12" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-lg p-6 shadow-lg h-full">
                <h3 className="text-xl font-semibold text-white mb-2">PaperPilot</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Next.js, TailwindCSS, Python, Flask, Pinecone, Jina AI, LangChain
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Built a full-stack AI-powered research assistant platform for semantic search
                    and summarization of academic papers with high precision retrieval.
                  </li>
                  <li>
                    • Implemented advanced RAG pipelines using Pinecone for vector storage and Jina
                    AI embeddings, enabling context-aware paper discovery.
                  </li>
                  <li>
                    • Developed a Next.js frontend with TailwindCSS and a Flask backend, processing
                    over 500+ papers with structured metadata extraction and citation analysis.
                  </li>
                </ul>
              </div>

              <div className="glass rounded-lg p-6 shadow-lg h-full">
                <h3 className="text-xl font-semibold text-white mb-2">Open-KYC</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Next.js, OpenCV, TensorFlow, Tesseract, ShadCN, WebRTC
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Built an AI-based KYC portal with features like facial authentication,
                    Aadhaar/PAN card OCR, and liveness detection via video stream.
                  </li>
                  <li>
                    • Used OpenCV and TensorFlow for identity verification workflows, achieving high
                    accuracy and security standards.
                  </li>
                  <li>
                    •{' '}
                    <span className="text-yellow-400 font-semibold">
                      Secured 1st place at Standard Chartered Hackathon 2024
                    </span>{' '}
                    for end-to-end automation and production readiness.
                  </li>
                </ul>
              </div>

              <div className="glass rounded-lg p-6 shadow-lg h-full">
                <h3 className="text-xl font-semibold text-white mb-2">Educative.AI</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Python, FastAPI, React.js, TailwindCSS, LLMs, TensorFlow
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Developed a student assistance tool integrating OCR and 10+ fine-tuned
                    open-source LLMs to process handwritten and blackboard notes.
                  </li>
                  <li>
                    • Implemented a FastAPI backend and React.js frontend for features such as MCQ
                    generation, speech-to-text doubt resolution, and structured note organization.
                  </li>
                  <li>
                    • Enabled automatic resource retrieval and summarization, enhancing
                    accessibility and productivity for students.
                  </li>
                </ul>
              </div>

              <div className="glass rounded-lg p-6 shadow-lg h-full">
                <h3 className="text-xl font-semibold text-white mb-2">AI-RoadGuard</h3>
                <p className="text-sm text-gray-300 mb-4">
                  React.js, CNN, Flask, Python, TensorFlow
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Engineered a CNN-based accident detection system achieving over 90% accuracy
                    with 50% fewer false alerts than existing solutions.
                  </li>
                  <li>
                    • Developed a Flask backend and React.js frontend dashboard for real-time
                    alerting to emergency services.
                  </li>
                  <li>
                    •{' '}
                    <span className="text-yellow-400 font-semibold">
                      Recognized as the Best Project in Open Innovation
                    </span>{' '}
                    at MLH MesoHack 2022.
                  </li>
                </ul>
              </div>

              <div className="glass rounded-lg p-6 shadow-lg h-full">
                <h3 className="text-xl font-semibold text-white mb-2">OneMed</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Python, Next.js, JavaScript, LLMs, Pinecone, MongoDB, AWS
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • Built a full-stack AI-powered EHR platform for hospitals, integrating
                    LLM-based summarization and voice-to-text consultations.
                  </li>
                  <li>
                    • Developed a React Native app for syncing emergency data and patient conditions
                    in real-time.
                  </li>
                  <li>
                    • Implemented scalable vector search with Pinecone for intelligent patient
                    record retrieval;{' '}
                    <span className="text-yellow-400 font-semibold">
                      ranked Top 10 at MozoHack 2024
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>

            {/* More Projects on GitHub */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://github.com/aryanraj2713"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden glass rounded-xl px-8 py-6 border-2 border-transparent
                bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20
                hover:from-purple-500/30 hover:via-blue-500/30 hover:to-cyan-500/30
                hover:border-purple-400/50 transform transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                {/* Animated background gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-blue-400/10 to-cyan-400/10
                transform transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                transform transition-transform duration-1000 ease-out group-hover:translate-x-full -translate-x-full"
                />

                <div className="relative flex items-center gap-4">
                  {/* GitHub icon */}
                  <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <svg
                      className="w-8 h-8 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>

                  {/* Text content */}
                  <div className="text-left">
                    <div className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
                      View More Projects
                    </div>
                    <div className="text-sm text-gray-300 opacity-80">
                      Explore my complete portfolio on GitHub
                    </div>
                  </div>

                  {/* Arrow icon */}
                  <div className="ml-2 transform transition-all duration-300 group-hover:translate-x-1 opacity-60 group-hover:opacity-100">
                    <svg
                      className="w-5 h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section id="skills" className="mb-12" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Technical Skills
            </h2>

            <div className="glass rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-emerald-400 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'C',
                      'C++',
                      'Python',
                      'Java',
                      'JavaScript',
                      'SQL (Postgres)',
                      'HTML',
                      'CSS',
                      'R',
                    ].map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-emerald-400 mb-3">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React.js',
                      'Next.js',
                      'Node.js',
                      'Flask',
                      'FastAPI',
                      'TailwindCSS',
                      'JUnit',
                      'Material-UI',
                    ].map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-emerald-400 mb-3">Machine Learning</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'NumPy',
                      'Pandas',
                      'Scikit-learn',
                      'TensorFlow',
                      'PyTorch',
                      'OpenCV',
                      'NLP',
                      'LangChain',
                      'LangGraph',
                      'Llama-Index',
                      'Transformers',
                      'HuggingFace',
                    ].map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-emerald-400 mb-3">Developer Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Git',
                      'Docker',
                      'Kubernetes',
                      'AWS',
                      'Azure',
                      'Google Cloud Platform',
                      'CDK',
                      'Terraform',
                      'Redis',
                      'Pinecone',
                    ].map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="publications" className="mb-12" aria-labelledby="publications-heading">
            <h2 id="publications-heading" className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Publications
            </h2>

            <div className="glass rounded-lg p-6 shadow-lg">
              <div className="space-y-4">
                <article
                  itemScope
                  itemType="https://schema.org/ScholarlyArticle"
                  className="border-l-4 border-emerald-400 pl-4"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    <a
                      href="https://arxiv.org/pdf/2507.21287"
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="url"
                      className="hover:text-emerald-300 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      <span itemProp="headline">
                        Structured Relevance Assessment for Robust Retrieval-Augmented Language
                        Models
                      </span>
                    </a>
                  </h3>
                  <p
                    className="text-sm text-gray-300 mb-2"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">Astitva Veer Garg</span>,{' '}
                    <span className="text-emerald-400 font-medium" itemProp="name">
                      Aryan Raj
                    </span>
                    , <span itemProp="name">Dr. Anitha D</span>
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    <span className="font-medium">Conference:</span>{' '}
                    <span itemProp="about">
                      International Conference on Information Technology for Social Development
                      (ICT4SD 2025)
                    </span>
                  </p>
                  <p
                    className="text-sm text-gray-400 mb-2"
                    itemProp="publisher"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <span className="font-medium">Publisher:</span>{' '}
                    <span itemProp="name">Springer Nature</span> • Lecture Notes in Networks and
                    Systems, vol 1652
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    <span className="font-medium">Published:</span> October 31, 2025 • Pages 73-82
                  </p>
                  <p className="text-sm text-gray-400 mb-2">
                    <span className="font-medium">DOI:</span>{' '}
                    <a
                      href="https://doi.org/10.1007/978-3-032-06691-6_8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      10.1007/978-3-032-06691-6_8
                    </a>
                  </p>
                  <time itemProp="datePublished" dateTime="2025-10-31" className="sr-only">
                    October 31, 2025
                  </time>
                  <p className="text-xs text-gray-500 mb-3" itemProp="description">
                    This paper addresses the challenges faced by Retrieval-Augmented Language Models
                    (RALMs) in reducing factual errors by introducing a framework for structured
                    relevance assessment. The work proposes a multi-dimensional scoring system for
                    document relevance, embedding-based relevance scoring, and specialized
                    benchmarking showing significant reductions in hallucination rates.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href="https://link.springer.com/chapter/10.1007/978-3-032-06691-6_8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-orange-400/30 bg-orange-500/10 text-orange-300 hover:bg-orange-500/20 transition-colors"
                      aria-label="View paper on Springer"
                    >
                      View on Springer
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 3h7m0 0v7m0-7L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://arxiv.org/pdf/2507.21287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                      aria-label="View paper on arXiv"
                    >
                      View on arXiv
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 3h7m0 0v7m0-7L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              Achievements
            </h2>

            <div className="glass rounded-lg p-6 shadow-lg">
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Secured <span className="text-yellow-400 font-semibold">1st place</span> at the
                    Standard Chartered Hackathon for developing <em>OpenKYC</em>, an innovative KYC
                    solution that streamlined identity verification processes.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Won <span className="text-yellow-400 font-semibold">2nd place</span> at Hack
                    Nova 2024 with <em>Educative.AI</em>, an educational technology project later
                    selected to represent at Innverve 2023, Army Institute of Technology (AIT),
                    Pune.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span>
                    Received the{' '}
                    <span className="text-yellow-400 font-semibold">Best Project Award</span> in the
                    Open Innovation category at MLH Meso Hack 2022 for the project{' '}
                    <em>AI-Roadguard</em>.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <span>
                    Authored technical articles on AI for prestigious Medium journals, including the{' '}
                    <span className="text-yellow-400 font-semibold">DataX Journal</span>.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="section-title flex items-center gap-3">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Club and Contributions
            </h2>

            <div className="glass rounded-lg p-6 shadow-lg">
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>
                    Contributed to various open-source projects; notable contribution includes{' '}
                    <span className="text-emerald-400 font-semibold">Dify</span>, a project with
                    over <span className="text-emerald-400 font-semibold">100,000 stars</span> on
                    GitHub.
                  </span>
                </li>
                <li className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <span>
                    Conducted research at{' '}
                    <a
                      href="https://nexttechlab.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      Next Tech Lab
                    </a>{' '}
                    (2021-2025) as a member of Norman and McCarthy Labs, collaborating on web and
                    machine learning projects, specializing in deep learning for image-related
                    tasks.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <span>
                    Served as Technical Director at{' '}
                    <a
                      href="https://www.dscommunity.in/people"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors underline decoration-emerald-500/40 underline-offset-4"
                    >
                      Data Science Community SRM
                    </a>{' '}
                    (2022-2023), organizing technical events, workshops, and hackathons including DS
                    Hack 2.0.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <span>
                    Led machine learning initiatives at{' '}
                    <span className="text-emerald-400 font-semibold">
                      SRM Quantum Computing Club
                    </span>
                    , managing projects at the intersection of quantum computing and machine
                    learning.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h8a2 2 0 002-2V7M9 7h6M9 11h6m-3 4h3"
                      />
                    </svg>
                  </div>
                  <span>
                    Served as Event Domain Member of SRMKzilla, the official Mozilla club on campus,
                    promoting community contributions and engagement.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Floating Resume Download Button */}
        <FloatingResumeButton />
        <Footer />
      </main>
    </>
  )
}
