'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-crispy-charcoal/50 border border-crispy-white/10 p-8 text-center">
          <div className="w-16 h-16 bg-crispy-error/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-crispy-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-serif font-light text-crispy-white mb-4">
            Authentication Error
          </h2>
          
          <p className="text-crispy-white/60 text-sm mb-6">
            We encountered an error during authentication. Please try again.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => reset()}
              className="w-full bg-crispy-gold text-crispy-black px-6 py-3 font-semibold hover:bg-crispy-gold/90 transition-colors"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="block w-full bg-crispy-white/10 text-crispy-white px-6 py-3 font-semibold hover:bg-crispy-white/20 transition-colors border border-crispy-white/20"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}