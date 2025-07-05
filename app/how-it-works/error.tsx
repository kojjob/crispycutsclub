'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function HowItWorksError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('How it works page error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold text-crispy-white">Page Error</h1>
          <p className="mt-2 text-crispy-gray">
            Unable to load the How It Works page.
          </p>
        </div>
        
        <div className="bg-crispy-charcoal rounded-lg p-6">
          <p className="text-sm text-crispy-error mb-4">
            {error.message || 'Failed to load page content. Please try again.'}
          </p>
          
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full bg-crispy-gold text-crispy-black font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="block w-full bg-crispy-charcoal border border-crispy-gray text-crispy-white font-semibold py-3 px-4 rounded-lg hover:bg-crispy-gray/20 transition-colors text-center"
            >
              Back to Home
            </Link>
            
            <Link
              href="/contact"
              className="block text-crispy-gray hover:text-crispy-white transition-colors"
            >
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}