export default function AgencyLoading() {
  return (
    <div className="min-h-screen bg-crispy-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-10 w-80 bg-crispy-charcoal animate-pulse rounded-lg mb-2"></div>
          <div className="h-4 w-64 bg-crispy-charcoal/50 animate-pulse rounded-lg"></div>
        </div>

        {/* Agency Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-crispy-charcoal rounded-lg p-6 animate-pulse">
              <div className="h-4 w-32 bg-crispy-gray/20 rounded mb-2"></div>
              <div className="h-8 w-24 bg-crispy-gray/20 rounded mb-2"></div>
              <div className="h-3 w-40 bg-crispy-gray/20 rounded"></div>
            </div>
          ))}
        </div>

        {/* Models Table Skeleton */}
        <div className="bg-crispy-charcoal rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="h-6 w-48 bg-crispy-gray/20 animate-pulse rounded"></div>
            <div className="h-10 w-32 bg-crispy-gold/20 animate-pulse rounded"></div>
          </div>
          
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 pb-4 border-b border-crispy-gray/20">
            {['Name', 'Status', 'Last Booking', 'Total Cuts', 'Actions'].map((_, i) => (
              <div key={i} className="h-4 bg-crispy-gray/20 animate-pulse rounded"></div>
            ))}
          </div>

          {/* Table Rows */}
          <div className="space-y-3 mt-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="grid grid-cols-5 gap-4 py-3">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-crispy-gray/20 animate-pulse rounded-full"></div>
                  <div className="h-4 w-32 bg-crispy-gray/20 animate-pulse rounded"></div>
                </div>
                <div className="h-4 w-20 bg-crispy-gray/20 animate-pulse rounded"></div>
                <div className="h-4 w-24 bg-crispy-gray/20 animate-pulse rounded"></div>
                <div className="h-4 w-16 bg-crispy-gray/20 animate-pulse rounded"></div>
                <div className="h-8 w-24 bg-crispy-gray/20 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}