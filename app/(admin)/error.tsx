'use client'

export default function AdminError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-2xl font-serif text-crispy-white mb-4">Admin Error</h2>
        <p className="text-crispy-white/60 mb-4">An error occurred in the admin panel.</p>
        <button
          onClick={() => reset()}
          className="bg-crispy-gold text-crispy-black px-6 py-2 font-semibold hover:bg-crispy-gold/90"
        >
          Try again
        </button>
      </div>
    </div>
  )
}