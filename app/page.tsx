'use client'

import Link from 'next/link'

export default function HomePage() {
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
              
              {/* Clients */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 bg-crispy-bg-primary">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 relative">
                    <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
                    <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                      <span className="text-crispy-gold text-xl md:text-2xl">♔</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif font-light text-crispy-text-primary mb-4 md:mb-6 tracking-wide">
                    Clients
                  </h3>
                  <p className="text-sm md:text-base text-crispy-text-secondary mb-8 md:mb-10 leading-relaxed font-light">
                    Premium grooming membership with exclusive access to master barbers.
                  </p>
                  <Link 
                    href="/client-membership" 
                    className="inline-block relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 block bg-crispy-text-primary text-crispy-bg-primary px-6 md:px-10 py-2.5 md:py-3 font-light tracking-wider uppercase text-xs md:text-sm transition-colors duration-300 group-hover/btn:text-crispy-black dark:bg-crispy-white dark:text-crispy-black dark:group-hover/btn:text-crispy-black">
                      Learn More
                    </span>
                    <span className="absolute inset-0 bg-crispy-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              {/* Barbers */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 bg-crispy-bg-primary">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 relative">
                    <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
                    <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                      <span className="text-crispy-gold text-xl md:text-2xl">✂</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif font-light text-crispy-text-primary mb-4 md:mb-6 tracking-wide">
                    Barbers
                  </h3>
                  <p className="text-sm md:text-base text-crispy-text-secondary mb-8 md:mb-10 leading-relaxed font-light">
                    Build a thriving business with guaranteed monthly income.
                  </p>
                  <Link 
                    href="/barber-network" 
                    className="inline-block relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 block bg-crispy-text-primary text-crispy-bg-primary px-6 md:px-10 py-2.5 md:py-3 font-light tracking-wider uppercase text-xs md:text-sm transition-colors duration-300 group-hover/btn:text-crispy-black dark:bg-crispy-white dark:text-crispy-black dark:group-hover/btn:text-crispy-black">
                      Learn More
                    </span>
                    <span className="absolute inset-0 bg-crispy-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              {/* Modeling Agencies */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 bg-crispy-bg-primary">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 relative">
                    <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
                    <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                      <span className="text-crispy-gold text-xl md:text-2xl">◈</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif font-light text-crispy-text-primary mb-4 md:mb-6 tracking-wide">
                    Modeling Agencies
                  </h3>
                  <p className="text-sm md:text-base text-crispy-text-secondary mb-8 md:mb-10 leading-relaxed font-light">
                    Professional grooming services for your talent roster.
                  </p>
                  <Link 
                    href="/agency-services" 
                    className="inline-block relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 block bg-crispy-text-primary text-crispy-bg-primary px-6 md:px-10 py-2.5 md:py-3 font-light tracking-wider uppercase text-xs md:text-sm transition-colors duration-300 group-hover/btn:text-crispy-black dark:bg-crispy-white dark:text-crispy-black dark:group-hover/btn:text-crispy-black">
                      Learn More
                    </span>
                    <span className="absolute inset-0 bg-crispy-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

              {/* Homeless Shelters */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 bg-crispy-bg-primary">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 relative">
                    <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
                    <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                      <span className="text-crispy-gold text-xl md:text-2xl">♥</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif font-light text-crispy-text-primary mb-4 md:mb-6 tracking-wide">
                    Homeless Shelters
                  </h3>
                  <p className="text-sm md:text-base text-crispy-text-secondary mb-8 md:mb-10 leading-relaxed font-light">
                    Free grooming services for residents preparing for employment.
                  </p>
                  <Link 
                    href="/shelter-program" 
                    className="inline-block relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 block bg-crispy-text-primary text-crispy-bg-primary px-6 md:px-10 py-2.5 md:py-3 font-light tracking-wider uppercase text-xs md:text-sm transition-colors duration-300 group-hover/btn:text-crispy-black dark:bg-crispy-white dark:text-crispy-black dark:group-hover/btn:text-crispy-black">
                      Learn More
                    </span>
                    <span className="absolute inset-0 bg-crispy-gold transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
    </>
  )
}