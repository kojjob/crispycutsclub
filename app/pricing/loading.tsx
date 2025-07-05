export default function PricingLoading() {
  return (
    <div className="min-h-screen bg-crispy-black">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-16 w-96 bg-crispy-charcoal animate-pulse rounded-lg mx-auto mb-6"></div>
          <div className="h-6 w-full max-w-2xl bg-crispy-charcoal/50 animate-pulse rounded-lg mx-auto"></div>
        </div>
      </section>

      {/* Pricing Tiers Skeleton */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Tier */}
            <div className="bg-crispy-charcoal rounded-lg p-8 animate-pulse">
              <div className="h-8 w-32 bg-crispy-gray/20 rounded mb-2"></div>
              <div className="h-12 w-40 bg-crispy-gray/20 rounded mb-6"></div>
              <div className="h-px bg-crispy-gray/20 mb-6"></div>
              <div className="space-y-3 mb-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-crispy-gray/20 rounded-full"></div>
                    <div className="h-4 flex-1 bg-crispy-gray/20 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="h-12 bg-crispy-gray/20 rounded"></div>
            </div>

            {/* Premium Tier (Featured) */}
            <div className="relative">
              <div className="h-8 w-32 bg-crispy-gold/20 animate-pulse rounded-full mx-auto mb-4"></div>
              <div className="bg-crispy-charcoal rounded-lg p-8 border-2 border-crispy-gold/20 animate-pulse">
                <div className="h-8 w-32 bg-crispy-gray/20 rounded mb-2"></div>
                <div className="h-12 w-40 bg-crispy-gray/20 rounded mb-6"></div>
                <div className="h-px bg-crispy-gray/20 mb-6"></div>
                <div className="space-y-3 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="h-5 w-5 bg-crispy-gold/20 rounded-full"></div>
                      <div className="h-4 flex-1 bg-crispy-gray/20 rounded"></div>
                    </div>
                  ))}
                </div>
                <div className="h-12 bg-crispy-gold/20 rounded"></div>
              </div>
            </div>

            {/* VIP Tier */}
            <div className="bg-crispy-charcoal rounded-lg p-8 animate-pulse">
              <div className="h-8 w-32 bg-crispy-gray/20 rounded mb-2"></div>
              <div className="h-12 w-40 bg-crispy-gray/20 rounded mb-6"></div>
              <div className="h-px bg-crispy-gray/20 mb-6"></div>
              <div className="space-y-3 mb-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-crispy-gray/20 rounded-full"></div>
                    <div className="h-4 flex-1 bg-crispy-gray/20 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="h-12 bg-crispy-gray/20 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Skeleton */}
      <section className="py-16 px-4 bg-crispy-charcoal/10">
        <div className="max-w-4xl mx-auto">
          <div className="h-10 w-64 bg-crispy-charcoal animate-pulse rounded-lg mx-auto mb-12"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-crispy-charcoal rounded-lg p-6 animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="h-5 w-3/4 bg-crispy-gray/20 rounded"></div>
                  <div className="h-6 w-6 bg-crispy-gray/20 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}