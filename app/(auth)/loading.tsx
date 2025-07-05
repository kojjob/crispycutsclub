export default function AuthLoading() {
  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-crispy-charcoal/50 border border-crispy-white/10 p-12">
          <div className="flex flex-col items-center">
            {/* Logo Skeleton */}
            <div className="w-16 h-16 bg-crispy-white/10 rounded-full animate-pulse mb-6"></div>
            
            {/* Form Skeleton */}
            <div className="w-full space-y-4">
              <div className="h-10 bg-crispy-white/10 animate-pulse rounded"></div>
              <div className="h-10 bg-crispy-white/10 animate-pulse rounded"></div>
              <div className="h-12 bg-crispy-gold/20 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}