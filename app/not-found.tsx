import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          {/* 404 Display */}
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-serif font-bold text-crispy-white/10">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-7xl font-serif font-bold text-crispy-gold">
                404
              </span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-light text-crispy-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-crispy-white/60 mb-8 max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to a new location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-crispy-gold text-crispy-black px-6 py-3 font-semibold hover:bg-crispy-gold/90 transition-colors"
            >
              Back to Home
            </Link>
            
            <Link
              href="/contact"
              className="bg-crispy-white/10 text-crispy-white px-6 py-3 font-semibold hover:bg-crispy-white/20 transition-colors border border-crispy-white/20"
            >
              Contact Support
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-12 flex items-center justify-center space-x-2">
          <div className="w-8 h-px bg-crispy-gold/30"></div>
          <span className="text-crispy-gold text-sm">✦</span>
          <div className="w-8 h-px bg-crispy-gold/30"></div>
        </div>
      </div>
    </div>
  )
}