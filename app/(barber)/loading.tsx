export default function BarberLoading() {
  return (
    <div className="min-h-screen bg-crispy-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-64 bg-crispy-charcoal animate-pulse rounded-lg mb-2"></div>
          <div className="h-4 w-48 bg-crispy-charcoal/50 animate-pulse rounded-lg"></div>
        </div>

        {/* Revenue and Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-crispy-charcoal rounded-lg p-6 animate-pulse">
              <div className="flex items-center justify-between mb-2">
                <div className="h-4 w-24 bg-crispy-gray/20 rounded"></div>
                <div className="h-8 w-8 bg-crispy-gray/20 rounded-full"></div>
              </div>
              <div className="h-8 w-32 bg-crispy-gray/20 rounded mb-1"></div>
              <div className="h-3 w-20 bg-crispy-gray/20 rounded"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div className="bg-crispy-charcoal rounded-lg p-6">
              <div className="h-6 w-48 bg-crispy-gray/20 animate-pulse rounded mb-6"></div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Day Headers */}
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((_, i) => (
                  <div key={i} className="h-8 bg-crispy-gray/20 animate-pulse rounded"></div>
                ))}
                
                {/* Calendar Days */}
                {[...Array(35)].map((_, i) => (
                  <div key={i} className="h-16 bg-crispy-gray/20 animate-pulse rounded"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Appointments List */}
          <div>
            <div className="bg-crispy-charcoal rounded-lg p-6">
              <div className="h-6 w-40 bg-crispy-gray/20 animate-pulse rounded mb-4"></div>
              
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="p-4 bg-crispy-black rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-4 w-20 bg-crispy-gray/20 animate-pulse rounded"></div>
                      <div className="h-6 w-16 bg-crispy-gold/20 animate-pulse rounded"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-crispy-gray/20 animate-pulse rounded-full"></div>
                      <div>
                        <div className="h-4 w-32 bg-crispy-gray/20 animate-pulse rounded mb-1"></div>
                        <div className="h-3 w-24 bg-crispy-gray/20 animate-pulse rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}