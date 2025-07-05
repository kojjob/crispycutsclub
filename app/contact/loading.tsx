export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-crispy-black">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-16 w-80 bg-crispy-charcoal animate-pulse rounded-lg mx-auto mb-6"></div>
          <div className="h-6 w-full max-w-2xl bg-crispy-charcoal/50 animate-pulse rounded-lg mx-auto"></div>
        </div>
      </section>

      {/* Contact Content Skeleton */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Skeleton */}
            <div className="bg-crispy-charcoal rounded-lg p-8">
              <div className="h-8 w-48 bg-crispy-gray/20 animate-pulse rounded mb-6"></div>
              <div className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="h-4 w-20 bg-crispy-gray/20 animate-pulse rounded mb-2"></div>
                    <div className="h-12 bg-crispy-gray/20 animate-pulse rounded"></div>
                  </div>
                  <div>
                    <div className="h-4 w-20 bg-crispy-gray/20 animate-pulse rounded mb-2"></div>
                    <div className="h-12 bg-crispy-gray/20 animate-pulse rounded"></div>
                  </div>
                </div>
                {/* Email & Phone */}
                {[...Array(2)].map((_, i) => (
                  <div key={i}>
                    <div className="h-4 w-24 bg-crispy-gray/20 animate-pulse rounded mb-2"></div>
                    <div className="h-12 bg-crispy-gray/20 animate-pulse rounded"></div>
                  </div>
                ))}
                {/* Subject */}
                <div>
                  <div className="h-4 w-20 bg-crispy-gray/20 animate-pulse rounded mb-2"></div>
                  <div className="h-12 bg-crispy-gray/20 animate-pulse rounded"></div>
                </div>
                {/* Message */}
                <div>
                  <div className="h-4 w-24 bg-crispy-gray/20 animate-pulse rounded mb-2"></div>
                  <div className="h-32 bg-crispy-gray/20 animate-pulse rounded"></div>
                </div>
                {/* Submit Button */}
                <div className="h-12 bg-crispy-gold/20 animate-pulse rounded"></div>
              </div>
            </div>

            {/* Contact Info Skeleton */}
            <div className="space-y-8">
              {/* Info Cards */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-crispy-charcoal rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-crispy-gold/20 animate-pulse rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-6 w-32 bg-crispy-gray/20 animate-pulse rounded mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-4 w-48 bg-crispy-gray/20 animate-pulse rounded"></div>
                        <div className="h-4 w-40 bg-crispy-gray/20 animate-pulse rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Business Hours */}
              <div className="bg-crispy-charcoal rounded-lg p-6">
                <div className="h-6 w-40 bg-crispy-gray/20 animate-pulse rounded mb-4"></div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex justify-between">
                      <div className="h-4 w-24 bg-crispy-gray/20 animate-pulse rounded"></div>
                      <div className="h-4 w-32 bg-crispy-gray/20 animate-pulse rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}