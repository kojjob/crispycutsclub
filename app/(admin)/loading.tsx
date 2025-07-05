export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-crispy-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-64 bg-crispy-charcoal animate-pulse rounded-lg mb-2"></div>
          <div className="h-4 w-96 bg-crispy-charcoal/50 animate-pulse rounded-lg"></div>
        </div>

        {/* Stats Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-crispy-charcoal rounded-lg p-6 animate-pulse">
              <div className="h-4 w-24 bg-crispy-gray/20 rounded mb-2"></div>
              <div className="h-8 w-32 bg-crispy-gray/20 rounded"></div>
            </div>
          ))}
        </div>

        {/* Content Area Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-crispy-charcoal rounded-lg p-6">
              <div className="h-6 w-48 bg-crispy-gray/20 animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-crispy-black rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 bg-crispy-gray/20 animate-pulse rounded-full"></div>
                      <div>
                        <div className="h-4 w-32 bg-crispy-gray/20 animate-pulse rounded mb-1"></div>
                        <div className="h-3 w-24 bg-crispy-gray/20 animate-pulse rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 w-20 bg-crispy-gold/20 animate-pulse rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-crispy-charcoal rounded-lg p-6">
              <div className="h-6 w-32 bg-crispy-gray/20 animate-pulse rounded mb-4"></div>
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-10 bg-crispy-gray/20 animate-pulse rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}