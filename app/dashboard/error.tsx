'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function DashboardError({
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
        <div className="bg-crispy-charcoal/50 border border-crispy-white/10 p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-crispy-error/20 rounded flex items-center justify-center">
              <svg className="w-6 h-6 text-crispy-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-crispy-white">
                Dashboard Error
              </h2>
              <p className="text-crispy-white/60 text-sm">
                Something went wrong
              </p>
            </div>
          </div>
          
          <p className="text-crispy-white/60 text-sm mb-6">
            We encountered an error while loading your dashboard. This might be a temporary issue.
          </p>
          
          <div className="flex space-x-3">
            <button
              onClick={() => reset()}
              className="flex-1 bg-crispy-gold text-crispy-black px-4 py-2 text-sm font-semibold hover:bg-crispy-gold/90 transition-colors"
            >
              Retry
            </button>
            
            <Link
              href="/dashboard"
              className="flex-1 bg-crispy-white/10 text-crispy-white px-4 py-2 text-sm font-semibold hover:bg-crispy-white/20 transition-colors border border-crispy-white/20 text-center"
            >
              Dashboard Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}