'use client'

import dynamic from 'next/dynamic'

// Lazy load the service cards
const ServiceCard = dynamic(() => import('@/components/ServiceCard'), {
  loading: () => (
    <div className="animate-pulse">
      <div className="h-64 bg-crispy-bg-secondary rounded"></div>
    </div>
  ),
})

export default function HomePage() {
  const services = [
    {
      title: 'Clients',
      description: 'Premium grooming membership with exclusive access to master barbers.',
      href: '/client-membership',
      icon: '♔',
    },
    {
      title: 'Barbers',
      description: 'Build a thriving business with guaranteed monthly income.',
      href: '/barber-network',
      icon: '✂',
    },
    {
      title: 'Modeling Agencies',
      description: 'Professional grooming services for your talent roster.',
      href: '/agency-services',
      icon: '◈',
    },
    {
      title: 'Homeless Shelters',
      description: 'Free grooming services for residents preparing for employment.',
      href: '/shelter-program',
      icon: '♥',
    },
  ]
  return (
    <>
      {/* Large Centered Logo */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 text-center bg-crispy-bg-primary overflow-hidden">
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-crispy-bg-primary via-crispy-bg-primary/95 to-crispy-bg-secondary/20 dark:from-crispy-black dark:via-crispy-black/95 dark:to-crispy-charcoal/20"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-crispy-gold/20 to-crispy-gold/5"></div>
          
          <div className="relative max-w-5xl mx-auto px-4">
            <div className="mb-12 md:mb-16 lg:mb-20">
              {/* Small accent text */}
              <p className="text-crispy-gold text-xs md:text-sm font-light tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 animate-fade-in">
                Est. 2024 • London
              </p>
              
              {/* Main logo with enhanced typography */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-crispy-text-primary mb-2 animate-fade-in tracking-tight">
                Crispy Cuts
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-crispy-gold mb-8 md:mb-12 animate-fade-in-delay tracking-wide">
                CLUB
              </h1>
              
              {/* Decorative line */}
              <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8 md:mb-12"></div>
              
              {/* Tagline with refined typography */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-crispy-text-primary mb-3 md:mb-4 animate-slide-up tracking-wide">
                Join the Ultimate
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-crispy-text-primary animate-slide-up-delay">
                Grooming Club
              </h2>
            </div>
          </div>
        </section>

        {/* Four User Types with Enhanced Design */}
        <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>
    </>
  )
}