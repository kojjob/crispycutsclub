'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Premium Design */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 text-center bg-crispy-bg-primary overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-crispy-bg-primary via-crispy-bg-primary/95 to-crispy-bg-secondary/20"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-crispy-gold/20 to-crispy-gold/5"></div>
        
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Small accent text */}
          <p className="text-crispy-gold text-xs md:text-sm font-light tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 animate-fade-in">
            Our Story • Since 2024
          </p>
          
          {/* Main title with enhanced typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-crispy-text-primary mb-8 md:mb-12 animate-fade-in tracking-tight">
            About Us
          </h1>
          
          {/* Decorative line */}
          <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8 md:mb-12"></div>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-crispy-text-primary/80 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Revolutionizing the grooming industry through premium membership experiences
          </p>
        </div>
      </section>

      {/* Mission & Vision with Premium Cards */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-12 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 bg-crispy-bg-primary">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-crispy-gold mb-6 tracking-wide">
                  Our Mission
                </h2>
                <p className="text-crispy-text-secondary leading-relaxed font-light">
                  To transform the traditional barbering experience by creating an exclusive membership platform 
                  that guarantees consistency, quality, and convenience. We believe every client deserves access 
                  to exceptional grooming services, while empowering barbers with predictable income and loyal clientele.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 md:p-12 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 bg-crispy-bg-primary">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-crispy-gold mb-6 tracking-wide">
                  Our Vision
                </h2>
                <p className="text-crispy-text-secondary leading-relaxed font-light">
                  To become the UK's premier grooming membership platform, setting the standard for luxury 
                  personal care services while fostering meaningful relationships between clients and master barbers. 
                  We envision a world where quality grooming is accessible, reliable, and tailored to individual needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Elegant Icons */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-4">
              Our Values
            </h2>
            <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8"></div>
            <p className="text-xl text-crispy-text-secondary max-w-2xl mx-auto font-light">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality */}
            <div className="group relative text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
                <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                  <span className="text-crispy-gold text-2xl">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-light text-crispy-text-primary mb-3">Quality</h3>
              <p className="text-sm text-crispy-text-secondary font-light">
                Uncompromising standards in service delivery and barber selection
              </p>
            </div>

            {/* Community */}
            <div className="group relative text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
                <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                  <span className="text-crispy-gold text-2xl">♥</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-light text-crispy-text-primary mb-3">Community</h3>
              <p className="text-sm text-crispy-text-secondary font-light">
                Building meaningful relationships and supporting local communities
              </p>
            </div>

            {/* Innovation */}
            <div className="group relative text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
                <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                  <span className="text-crispy-gold text-2xl">⚡</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-light text-crispy-text-primary mb-3">Innovation</h3>
              <p className="text-sm text-crispy-text-secondary font-light">
                Continuously evolving to meet changing needs and exceed expectations
              </p>
            </div>

            {/* Integrity */}
            <div className="group relative text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
                <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                  <span className="text-crispy-gold text-2xl">★</span>
                </div>
              </div>
              <h3 className="text-xl font-serif font-light text-crispy-text-primary mb-3">Integrity</h3>
              <p className="text-sm text-crispy-text-secondary font-light">
                Transparent, honest, and ethical in all our business practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-primary to-crispy-bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-4">
              Our Journey
            </h2>
            <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* The Problem */}
            <div className="relative">
              <div className="w-16 h-16 bg-crispy-gold mx-auto mb-6 flex items-center justify-center">
                <span className="text-crispy-black font-bold text-2xl">01</span>
              </div>
              <h3 className="text-2xl font-serif font-light text-crispy-text-primary text-center mb-4">
                The Problem
              </h3>
              <p className="text-crispy-text-secondary text-center font-light">
                Clients struggled with inconsistent service quality, unreliable booking systems, 
                and the challenge of building relationships with skilled barbers.
              </p>
            </div>

            {/* The Solution */}
            <div className="relative">
              <div className="w-16 h-16 bg-crispy-gold mx-auto mb-6 flex items-center justify-center">
                <span className="text-crispy-black font-bold text-2xl">02</span>
              </div>
              <h3 className="text-2xl font-serif font-light text-crispy-text-primary text-center mb-4">
                The Solution
              </h3>
              <p className="text-crispy-text-secondary text-center font-light">
                We created a membership platform that guarantees service quality, provides 
                predictable income for barbers, and builds lasting client-barber relationships.
              </p>
            </div>

            {/* The Future */}
            <div className="relative">
              <div className="w-16 h-16 bg-crispy-gold mx-auto mb-6 flex items-center justify-center">
                <span className="text-crispy-black font-bold text-2xl">03</span>
              </div>
              <h3 className="text-2xl font-serif font-light text-crispy-text-primary text-center mb-4">
                The Future
              </h3>
              <p className="text-crispy-text-secondary text-center font-light">
                Expanding across the UK while maintaining our commitment to quality, 
                community impact, and revolutionary grooming experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-4">
              Leadership Team
            </h2>
            <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8"></div>
            <p className="text-xl text-crispy-text-secondary max-w-2xl mx-auto font-light">
              Meet the visionaries behind Crispy Cuts Club
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* CEO */}
            <div className="text-center">
              <div className="w-48 h-48 bg-crispy-charcoal border border-crispy-white/10 mx-auto mb-6"></div>
              <h3 className="text-xl font-serif text-crispy-text-primary mb-2">James Mitchell</h3>
              <p className="text-crispy-gold text-sm mb-3 font-light">Chief Executive Officer</p>
              <p className="text-crispy-text-secondary text-sm font-light">
                Former tech executive with 15 years in marketplace platforms
              </p>
            </div>

            {/* CTO */}
            <div className="text-center">
              <div className="w-48 h-48 bg-crispy-charcoal border border-crispy-white/10 mx-auto mb-6"></div>
              <h3 className="text-xl font-serif text-crispy-text-primary mb-2">Sarah Chen</h3>
              <p className="text-crispy-gold text-sm mb-3 font-light">Chief Technology Officer</p>
              <p className="text-crispy-text-secondary text-sm font-light">
                Software architect with expertise in scalable platforms
              </p>
            </div>

            {/* COO */}
            <div className="text-center">
              <div className="w-48 h-48 bg-crispy-charcoal border border-crispy-white/10 mx-auto mb-6"></div>
              <h3 className="text-xl font-serif text-crispy-text-primary mb-2">Marcus Thompson</h3>
              <p className="text-crispy-gold text-sm mb-3 font-light">Chief Operating Officer</p>
              <p className="text-crispy-text-secondary text-sm font-light">
                Operations specialist with service delivery expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-crispy-text-primary mb-8">
                Social Impact
              </h2>
              <p className="text-lg text-crispy-text-secondary mb-8 leading-relaxed font-light">
                Beyond luxury grooming, we're committed to making a positive impact in our communities. 
                Our shelter program provides free grooming services to individuals preparing for job interviews, 
                helping them present their best selves and build confidence.
              </p>
              
              <div className="space-y-4 mb-8">
                {/* Impact Stats */}
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-crispy-gold"></div>
                  <p className="text-crispy-text-primary/80">500+ individuals served through our shelter program</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-crispy-gold"></div>
                  <p className="text-crispy-text-primary/80">Partnership with 15+ local shelters across the UK</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-crispy-gold"></div>
                  <p className="text-crispy-text-primary/80">75% of participants secured employment within 3 months</p>
                </div>
              </div>

              <Link 
                href="/shelter-program" 
                className="inline-block relative overflow-hidden group"
              >
                <span className="relative z-10 block bg-crispy-text-primary text-crispy-bg-primary px-10 py-3 font-light tracking-wider uppercase text-sm transition-colors duration-300 group-hover:text-crispy-white dark:bg-crispy-white dark:text-crispy-black dark:group-hover:text-crispy-black">
                  Learn About Our Program
                </span>
                <span className="absolute inset-0 bg-crispy-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-crispy-charcoal/50 border border-crispy-white/10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-crispy-gold/30"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-crispy-gold/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-crispy-bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-8">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-crispy-text-secondary mb-12 font-light">
            Join thousands who've discovered the future of grooming
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/signup/client" 
              className="inline-block relative overflow-hidden group"
            >
              <span className="relative z-10 block bg-crispy-gold text-crispy-black px-12 py-4 font-light tracking-wider uppercase text-sm transition-colors duration-300">
                Start Your Membership
              </span>
              <span className="absolute inset-0 bg-crispy-white transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-block relative overflow-hidden group"
            >
              <span className="relative z-10 block border border-crispy-text-primary text-crispy-text-primary px-12 py-4 font-light tracking-wider uppercase text-sm transition-colors duration-300 group-hover:text-crispy-black dark:border-crispy-white dark:text-crispy-white dark:group-hover:text-crispy-white">
                Get In Touch
              </span>
              <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}