'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AdminDashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()
  
  useEffect(() => {
    console.error('Admin dashboard error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold text-crispy-white">Admin Dashboard Error</h1>
          <p className="mt-2 text-crispy-gray">
            Critical error in admin dashboard.
          </p>
        </div>
        
        <div className="bg-crispy-charcoal rounded-lg p-6">
          <p className="text-sm text-crispy-error mb-4">
            {error.message || 'Failed to load admin dashboard. This has been logged.'}
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="text-xs text-crispy-gray mb-4 text-left">
              <summary className="cursor-pointer hover:text-crispy-white">Error Details</summary>
              <pre className="mt-2 overflow-auto bg-black p-2 rounded">
                {error.stack}
              </pre>
            </details>
          )}
          
          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full bg-crispy-gold text-crispy-black font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Reload Dashboard
            </button>
            
            <button
              onClick={() => router.push('/dashboard')}
              className="w-full bg-crispy-charcoal border border-crispy-gray text-crispy-white font-semibold py-3 px-4 rounded-lg hover:bg-crispy-gray/20 transition-colors"
            >
              Back to Dashboard Home
            </button>
            
            <Link
              href="/contact"
              className="block text-crispy-gray hover:text-crispy-white transition-colors"
            >
              Contact Technical Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}