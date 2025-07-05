export default function ClientLoading() {
  return (
    <div className="min-h-screen bg-crispy-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-56 bg-crispy-charcoal animate-pulse rounded-lg mb-2"></div>
          <div className="h-4 w-80 bg-crispy-charcoal/50 animate-pulse rounded-lg"></div>
        </div>

        {/* Membership Card Skeleton */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-crispy-gold/20 to-crispy-gold/10 rounded-lg p-8 border border-crispy-gold/30">
            <div className="flex items-start justify-between">
              <div>
                <div className="h-8 w-48 bg-crispy-charcoal/50 animate-pulse rounded mb-2"></div>
                <div className="h-4 w-64 bg-crispy-charcoal/50 animate-pulse rounded mb-4"></div>
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="h-3 w-16 bg-crispy-charcoal/50 animate-pulse rounded mb-1"></div>
                    <div className="h-5 w-32 bg-crispy-charcoal/50 animate-pulse rounded"></div>
                  </div>
                  <div>
                    <div className="h-3 w-20 bg-crispy-charcoal/50 animate-pulse rounded mb-1"></div>
                    <div className="h-5 w-24 bg-crispy-charcoal/50 animate-pulse rounded"></div>
                  </div>
                </div>
              </div>
              <div className="h-20 w-20 bg-crispy-charcoal/50 animate-pulse rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Next Appointment */}
            <div className="bg-crispy-charcoal rounded-lg p-6">
              <div className="h-6 w-40 bg-crispy-gray/20 animate-pulse rounded mb-4"></div>
              <div className="bg-crispy-black rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-crispy-gray/20 animate-pulse rounded-full"></div>
                    <div>
                      <div className="h-5 w-32 bg-crispy-gray/20 animate-pulse rounded mb-2"></div>
                      <div className="h-4 w-24 bg-crispy-gray/20 animate-pulse rounded mb-1"></div>
                      <div className="h-3 w-28 bg-crispy-gray/20 animate-pulse rounded"></div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-20 bg-crispy-gray/20 animate-pulse rounded"></div>
                    <div className="h-8 w-24 bg-crispy-gray/20 animate-pulse rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking History */}
            <div className="bg-crispy-charcoal rounded-lg p-6">
              <div className="h-6 w-36 bg-crispy-gray/20 animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="p-4 bg-crispy-black rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-crispy-gray/20 animate-pulse rounded-full"></div>
                        <div>
                          <div className="h-4 w-24 bg-crispy-gray/20 animate-pulse rounded mb-1"></div>
                          <div className="h-3 w-32 bg-crispy-gray/20 animate-pulse rounded"></div>
                        </div>
                      </div>
                      <div className="h-6 w-20 bg-crispy-gray/20 animate-pulse rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-crispy-charcoal rounded-lg p-6">
              <div className="h-6 w-32 bg-crispy-gray/20 animate-pulse rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-12 bg-crispy-gold/20 animate-pulse rounded-lg"></div>
                <div className="h-12 bg-crispy-gray/20 animate-pulse rounded-lg"></div>
                <div className="h-12 bg-crispy-gray/20 animate-pulse rounded-lg"></div>
              </div>
            </div>

            {/* Barber Info */}
            <div className="bg-crispy-charcoal rounded-lg p-6">
              <div className="h-6 w-28 bg-crispy-gray/20 animate-pulse rounded mb-4"></div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-16 w-16 bg-crispy-gray/20 animate-pulse rounded-full"></div>
                <div>
                  <div className="h-5 w-32 bg-crispy-gray/20 animate-pulse rounded mb-2"></div>
                  <div className="h-4 w-24 bg-crispy-gray/20 animate-pulse rounded"></div>
                </div>
              </div>
              <div className="h-10 w-full bg-crispy-gray/20 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}