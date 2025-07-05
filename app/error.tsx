'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-crispy-error/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-crispy-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-crispy-white mb-4">
            Something went wrong!
          </h1>
          
          <p className="text-crispy-white/60 mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="bg-crispy-gold text-crispy-black px-6 py-3 font-semibold hover:bg-crispy-gold/90 transition-colors"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="bg-crispy-white/10 text-crispy-white px-6 py-3 font-semibold hover:bg-crispy-white/20 transition-colors border border-crispy-white/20"
            >
              Go Home
            </Link>
          </div>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-crispy-white/40 text-sm cursor-pointer hover:text-crispy-white/60">
              Error Details (Development Only)
            </summary>
            <pre className="mt-4 p-4 bg-crispy-charcoal/50 border border-crispy-white/10 text-crispy-white/60 text-xs overflow-auto rounded">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}