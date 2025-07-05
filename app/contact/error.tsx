'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Contact page error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold text-crispy-white">Contact Page Error</h1>
          <p className="mt-2 text-crispy-gray">
            Unable to load contact information.
          </p>
        </div>
        
        <div className="bg-crispy-charcoal rounded-lg p-6">
          <p className="text-sm text-crispy-error mb-4">
            {error.message || 'Failed to load the contact page. Please try again.'}
          </p>
          
          <div className="bg-crispy-black/50 p-4 rounded-lg mb-4">
            <p className="text-sm text-crispy-gray mb-2">Alternative contact methods:</p>
            <p className="text-crispy-white">Email: support@crispycutsclub.com</p>
            <p className="text-crispy-white">Phone: +44 20 7946 0958</p>
          </div>
          
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
          </div>
        </div>
      </div>
    </div>
  )
}