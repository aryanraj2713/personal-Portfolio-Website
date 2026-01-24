import Image from 'next/image'

/**
 * Static Hero Section - No JavaScript required
 * Optimized for instant LCP (Largest Contentful Paint)
 * Progressive enhancement with animations loaded later
 */
export default function StaticHero() {
  return (
    <div id="home" className="text-center mb-12">
      {/* Avatar - Critical for LCP */}
      <div className="flex justify-center mt-10 md:mt-16 mb-6">
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative">
          {/* Gradient ring */}
          <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-emerald-400/70 via-cyan-400/70 to-blue-400/70 shadow-2xl">
            {/* Glow effect */}
            <div
              className="absolute -inset-3 rounded-full blur-2xl opacity-25 bg-emerald-400/50"
              aria-hidden
            />

            {/* Image - This is the LCP element */}
            <Image
              src="/aryan_image.jpeg"
              alt="Aryan Raj - Machine Learning Engineer & Backend Developer"
              width={192}
              height={192}
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
              className="rounded-full object-cover w-full h-full ring-2 ring-white/10"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div>

      {/* Name - Critical content */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text leading-tight">Aryan Raj</h1>

      {/* Title */}
      <p className="text-xl text-gray-300 mb-6">Machine Learning Engineer & Backend Developer</p>

      {/* Contact Info - Static version */}
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <a
            href="https://www.linkedin.com/in/aryanraj13/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
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

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
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

        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
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
  )
}
