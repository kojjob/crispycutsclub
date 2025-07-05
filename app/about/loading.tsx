export default function AboutLoading() {
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

      {/* Story Section Skeleton */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-10 w-64 bg-crispy-charcoal animate-pulse rounded-lg mb-6"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-4 bg-crispy-charcoal/50 animate-pulse rounded-lg"></div>
                ))}
              </div>
            </div>
            <div className="h-96 bg-crispy-charcoal animate-pulse rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Values Section Skeleton */}
      <section className="py-16 px-4 bg-crispy-charcoal/10">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 w-48 bg-crispy-charcoal animate-pulse rounded-lg mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-crispy-charcoal rounded-lg p-8 animate-pulse">
                <div className="h-12 w-12 bg-crispy-gray/20 rounded-full mb-4"></div>
                <div className="h-6 w-32 bg-crispy-gray/20 rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-crispy-gray/20 rounded"></div>
                  <div className="h-3 w-5/6 bg-crispy-gray/20 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Skeleton */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 w-56 bg-crispy-charcoal animate-pulse rounded-lg mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-48 w-48 bg-crispy-charcoal animate-pulse rounded-full mx-auto mb-4"></div>
                <div className="h-6 w-32 bg-crispy-charcoal animate-pulse rounded mx-auto mb-2"></div>
                <div className="h-4 w-24 bg-crispy-charcoal/50 animate-pulse rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}