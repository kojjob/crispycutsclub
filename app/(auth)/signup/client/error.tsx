'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function ClientSignupError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Client signup error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold text-crispy-white">Registration Failed</h1>
          <p className="mt-2 text-crispy-gray">
            We couldn't create your client account.
          </p>
        </div>
        
        <div className="bg-crispy-charcoal rounded-lg p-6">
          <p className="text-sm text-crispy-error mb-4">
            {error.message || 'Failed to create client account. Please check your information and try again.'}
          </p>
          
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full bg-crispy-gold text-crispy-black font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
            
            <Link
              href="/signup"
              className="block w-full bg-crispy-charcoal border border-crispy-gray text-crispy-white font-semibold py-3 px-4 rounded-lg hover:bg-crispy-gray/20 transition-colors text-center"
            >
              Choose Different Account Type
            </Link>
            
            <Link
              href="/contact"
              className="block text-crispy-gray hover:text-crispy-white transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}