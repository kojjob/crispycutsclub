export default function HowItWorksLoading() {
  return (
    <div className="min-h-screen bg-crispy-black">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-16 w-96 bg-crispy-charcoal animate-pulse rounded-lg mx-auto mb-6"></div>
          <div className="h-6 w-full max-w-2xl bg-crispy-charcoal/50 animate-pulse rounded-lg mx-auto mb-2"></div>
          <div className="h-6 w-3/4 max-w-2xl bg-crispy-charcoal/50 animate-pulse rounded-lg mx-auto"></div>
        </div>
      </section>

      {/* User Type Tabs Skeleton */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-12 w-32 bg-crispy-charcoal animate-pulse rounded-full"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section Skeleton */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 0 ? 'order-1' : 'order-2'}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-16 w-16 bg-crispy-gold/20 animate-pulse rounded-full"></div>
                    <div className="h-8 w-48 bg-crispy-charcoal animate-pulse rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-crispy-charcoal/50 animate-pulse rounded"></div>
                    <div className="h-4 w-5/6 bg-crispy-charcoal/50 animate-pulse rounded"></div>
                    <div className="h-4 w-4/6 bg-crispy-charcoal/50 animate-pulse rounded"></div>
                  </div>
                </div>
                <div className={i % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="h-80 bg-crispy-charcoal animate-pulse rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section Skeleton */}
      <section className="py-16 px-4 bg-crispy-charcoal/10">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 w-64 bg-crispy-charcoal animate-pulse rounded-lg mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-crispy-charcoal rounded-lg p-8 animate-pulse text-center">
                <div className="h-16 w-16 bg-crispy-gold/20 rounded-full mx-auto mb-4"></div>
                <div className="h-6 w-32 bg-crispy-gray/20 rounded mx-auto mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-crispy-gray/20 rounded"></div>
                  <div className="h-3 w-5/6 bg-crispy-gray/20 rounded mx-auto"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-10 w-96 bg-crispy-charcoal animate-pulse rounded-lg mx-auto mb-4"></div>
          <div className="h-6 w-64 bg-crispy-charcoal/50 animate-pulse rounded-lg mx-auto mb-8"></div>
          <div className="h-14 w-48 bg-crispy-gold/20 animate-pulse rounded-lg mx-auto"></div>
        </div>
      </section>
    </div>
  )
}