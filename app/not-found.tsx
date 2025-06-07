import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18m-9-9l9 9-9 9" />
            </svg>
            Back to Home
          </Link>
          
          <div className="text-sm text-gray-400">
            <p>
              Or visit my{' '}
              <Link href="/#projects" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                projects
              </Link>
              {' '}or{' '}
              <Link href="/#contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                contact
              </Link>
              {' '}section
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: '404 - Page Not Found | Aryan Raj',
  description: 'The page you are looking for could not be found.',
} 