import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found | Aryan Raj',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl font-bold t-faint">404</h1>
        <p className="text-sm t-muted">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-block text-sm text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4 decoration-emerald-400/30"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
