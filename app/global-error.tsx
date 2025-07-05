'use client'

import { useEffect } from 'react'

export default function GlobalError({
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
    <html>
      <body className="bg-black">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4">
                Critical Error
              </h1>
              
              <p className="text-white/60 mb-8">
                A critical error has occurred. Please refresh the page or contact support if the problem persists.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => reset()}
                  className="bg-yellow-600 text-black px-6 py-3 font-semibold hover:bg-yellow-700 transition-colors rounded"
                >
                  Try Again
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-white/10 text-white px-6 py-3 font-semibold hover:bg-white/20 transition-colors border border-white/20 rounded"
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}