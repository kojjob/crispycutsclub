export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-crispy-black">
      {/* Header Skeleton */}
      <div className="bg-crispy-charcoal/50 border-b border-crispy-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-crispy-white/10 animate-pulse"></div>
              <div className="h-6 w-32 bg-crispy-white/10 animate-pulse rounded"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-4 w-24 bg-crispy-white/10 animate-pulse rounded"></div>
              <div className="h-4 w-16 bg-crispy-white/10 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="h-10 w-64 bg-crispy-white/10 animate-pulse rounded mb-4"></div>
          <div className="h-6 w-96 bg-crispy-white/10 animate-pulse rounded"></div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-crispy-charcoal/50 border border-crispy-white/10 p-6">
              <div className="h-8 w-16 bg-crispy-white/10 animate-pulse rounded mb-2"></div>
              <div className="h-4 w-24 bg-crispy-white/10 animate-pulse rounded"></div>
            </div>
          ))}
        </div>

        {/* Action Cards Skeleton */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-crispy-charcoal/50 border border-crispy-white/10 p-6">
              <div className="w-12 h-12 bg-crispy-white/10 animate-pulse rounded mb-4"></div>
              <div className="h-6 w-32 bg-crispy-white/10 animate-pulse rounded mb-2"></div>
              <div className="h-4 w-full bg-crispy-white/10 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}