'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenSubmenu(null)
  }

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu)
  }

  return (
    <div className="min-h-screen bg-crispy-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-crispy-white/95 backdrop-blur-md border-b border-crispy-black/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-crispy-black flex items-center justify-center">
                <span className="text-crispy-white font-bold text-sm">CC</span>
              </div>
              <span className="text-xl font-serif font-bold text-crispy-black">Crispy Cuts Club</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-crispy-black hover:text-crispy-gold transition-colors duration-200 font-medium flex items-center space-x-1">
                  <span>Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-crispy-white shadow-xl border border-crispy-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-2">
                    <Link href="/client-membership" className="block px-4 py-3 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">
                      <div className="font-medium">Client Membership</div>
                      <div className="text-sm text-crispy-charcoal">Premium grooming subscription</div>
                    </Link>
                    <Link href="/barber-network" className="block px-4 py-3 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">
                      <div className="font-medium">Barber Network</div>
                      <div className="text-sm text-crispy-charcoal">Join our exclusive network</div>
                    </Link>
                    <Link href="/agency-services" className="block px-4 py-3 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">
                      <div className="font-medium">Agency Services</div>
                      <div className="text-sm text-crispy-charcoal">Professional grooming for talent</div>
                    </Link>
                    <Link href="/shelter-program" className="block px-4 py-3 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">
                      <div className="font-medium">Shelter Program</div>
                      <div className="text-sm text-crispy-charcoal">Free grooming for employment</div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link href="/how-it-works" className="text-crispy-black hover:text-crispy-gold transition-colors duration-200 font-medium">
                How It Works
              </Link>
              
              <Link href="/pricing" className="text-crispy-black hover:text-crispy-gold transition-colors duration-200 font-medium">
                Pricing
              </Link>
              
              <div className="relative group">
                <button className="text-crispy-black hover:text-crispy-gold transition-colors duration-200 font-medium flex items-center space-x-1">
                  <span>Company</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-crispy-white shadow-xl border border-crispy-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-2">
                    <Link href="/about" className="block px-4 py-2 text-crispy-gold font-medium">About Us</Link>
                    <Link href="/careers" className="block px-4 py-2 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">Careers</Link>
                    <Link href="/press" className="block px-4 py-2 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">Press & Media</Link>
                    <Link href="/blog" className="block px-4 py-2 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">Blog</Link>
                    <Link href="/contact" className="block px-4 py-2 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">Contact</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/login" className="text-crispy-black hover:text-crispy-gold transition-colors duration-200 font-medium">
                Sign In
              </Link>
              <Link href="/signup" className="btn-primary px-6 py-2 text-sm">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1 group"
              onClick={toggleMobileMenu}
            >
              <span className={`w-5 h-0.5 bg-crispy-black transition-all duration-300 group-hover:bg-crispy-gold ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-crispy-black transition-all duration-300 group-hover:bg-crispy-gold ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-crispy-black transition-all duration-300 group-hover:bg-crispy-gold ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-crispy-white border-b border-crispy-black/10 shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
          <div className="px-4 py-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-semibold text-crispy-black">Services</span>
                <button onClick={() => toggleSubmenu('services')} className="w-6 h-6 flex items-center justify-center">
                  <svg className={`w-4 h-4 text-crispy-black transition-transform duration-200 ${openSubmenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className={`ml-4 space-y-3 overflow-hidden transition-all duration-300 ${openSubmenu === 'services' ? 'max-h-96' : 'max-h-0'}`}>
                <Link href="/client-membership" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Client Membership</Link>
                <Link href="/barber-network" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Barber Network</Link>
                <Link href="/agency-services" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Agency Services</Link>
                <Link href="/shelter-program" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Shelter Program</Link>
              </div>
            </div>

            <Link href="/how-it-works" className="block text-lg text-crispy-black hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>How It Works</Link>
            <Link href="/pricing" className="block text-lg text-crispy-black hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Pricing</Link>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-semibold text-crispy-black">Company</span>
                <button onClick={() => toggleSubmenu('company')} className="w-6 h-6 flex items-center justify-center">
                  <svg className={`w-4 h-4 text-crispy-black transition-transform duration-200 ${openSubmenu === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className={`ml-4 space-y-3 overflow-hidden transition-all duration-300 ${openSubmenu === 'company' ? 'max-h-96' : 'max-h-0'}`}>
                <Link href="/about" className="block text-crispy-gold font-medium" onClick={toggleMobileMenu}>About Us</Link>
                <Link href="/careers" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Careers</Link>
                <Link href="/press" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Press & Media</Link>
                <Link href="/blog" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Blog</Link>
                <Link href="/contact" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>Contact</Link>
              </div>
            </div>

            <div className="pt-4 border-t border-crispy-black/10 space-y-3">
              <Link href="/login" className="block w-full text-center py-3 text-crispy-black hover:text-crispy-gold transition-colors duration-200 font-medium" onClick={toggleMobileMenu}>
                Sign In
              </Link>
              <Link href="/signup" className="block w-full text-center btn-primary py-3" onClick={toggleMobileMenu}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-crispy-black text-crispy-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-crispy-black via-crispy-charcoal to-crispy-black"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
              About Crispy Cuts Club
            </h1>
            <p className="text-xl md:text-2xl text-crispy-white/90 max-w-3xl mx-auto animate-slide-up">
              Revolutionizing the grooming industry through premium membership experiences, 
              connecting discerning clients with master barbers across the UK.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-crispy-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-serif font-bold text-crispy-black mb-6">Our Mission</h2>
                  <p className="text-lg text-crispy-charcoal leading-relaxed">
                    To transform the traditional barbering experience by creating an exclusive membership platform 
                    that guarantees consistency, quality, and convenience. We believe every client deserves access 
                    to exceptional grooming services, while empowering barbers with predictable income and loyal clientele.
                  </p>
                </div>
                <div>
                  <h2 className="text-4xl font-serif font-bold text-crispy-black mb-6">Our Vision</h2>
                  <p className="text-lg text-crispy-charcoal leading-relaxed">
                    To become the UK's premier grooming membership platform, setting the standard for luxury 
                    personal care services while fostering meaningful relationships between clients and master barbers. 
                    We envision a world where quality grooming is accessible, reliable, and tailored to individual needs.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-crispy-charcoal flex items-center justify-center">
                  <p className="text-crispy-white/20 text-xl">Mission & Vision Image</p>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-crispy-gold/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-crispy-black text-crispy-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-xl text-crispy-white/80 max-w-3xl mx-auto">
                Born from frustration with inconsistent grooming experiences and the challenge of finding reliable, skilled barbers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="premium-card bg-crispy-charcoal p-8 text-crispy-white">
                <div className="w-12 h-12 bg-crispy-gold mb-6 flex items-center justify-center">
                  <span className="text-crispy-black font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">The Problem</h3>
                <p className="text-crispy-white/80">
                  Clients struggled with inconsistent service quality, unreliable booking systems, 
                  and the challenge of building relationships with skilled barbers.
                </p>
              </div>
              
              <div className="premium-card bg-crispy-charcoal p-8 text-crispy-white">
                <div className="w-12 h-12 bg-crispy-gold mb-6 flex items-center justify-center">
                  <span className="text-crispy-black font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                <p className="text-crispy-white/80">
                  We created a membership platform that guarantees service quality, provides 
                  predictable income for barbers, and builds lasting client-barber relationships.
                </p>
              </div>
              
              <div className="premium-card bg-crispy-charcoal p-8 text-crispy-white">
                <div className="w-12 h-12 bg-crispy-gold mb-6 flex items-center justify-center">
                  <span className="text-crispy-black font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">The Future</h3>
                <p className="text-crispy-white/80">
                  Expanding across the UK while maintaining our commitment to quality, 
                  community impact, and revolutionary grooming experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-crispy-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-crispy-black mb-6">Our Values</h2>
              <p className="text-xl text-crispy-charcoal max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-crispy-gold mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-crispy-black mb-3">Quality</h3>
                <p className="text-crispy-charcoal">
                  Uncompromising standards in service delivery and barber selection.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-crispy-gold mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-crispy-black mb-3">Community</h3>
                <p className="text-crispy-charcoal">
                  Building meaningful relationships and supporting local communities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-crispy-gold mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-crispy-black mb-3">Innovation</h3>
                <p className="text-crispy-charcoal">
                  Continuously evolving to meet changing needs and exceed expectations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-crispy-gold mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-crispy-black mb-3">Integrity</h3>
                <p className="text-crispy-charcoal">
                  Transparent, honest, and ethical in all our business practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-crispy-black text-crispy-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-crispy-white/80 max-w-3xl mx-auto">
                Meet the visionaries behind Crispy Cuts Club's revolutionary approach to grooming services.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 bg-crispy-white/10 mx-auto mb-6 flex items-center justify-center">
                  <p className="text-crispy-white/40 text-sm">CEO Photo</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">James Mitchell</h3>
                <p className="text-crispy-gold mb-3">Chief Executive Officer</p>
                <p className="text-crispy-white/80 text-sm">
                  Former tech executive with 15 years in marketplace platforms. 
                  Passionate about transforming traditional service industries.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 bg-crispy-white/10 mx-auto mb-6 flex items-center justify-center">
                  <p className="text-crispy-white/40 text-sm">CTO Photo</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Chen</h3>
                <p className="text-crispy-gold mb-3">Chief Technology Officer</p>
                <p className="text-crispy-white/80 text-sm">
                  Software architect with expertise in scalable platforms. 
                  Previously led engineering at major fintech companies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 bg-crispy-white/10 mx-auto mb-6 flex items-center justify-center">
                  <p className="text-crispy-white/40 text-sm">COO Photo</p>
                </div>
                <h3 className="text-xl font-semibold mb-2">Marcus Thompson</h3>
                <p className="text-crispy-gold mb-3">Chief Operating Officer</p>
                <p className="text-crispy-white/80 text-sm">
                  Operations specialist with background in service delivery. 
                  Expert in building quality-focused teams and processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Impact */}
        <section className="py-20 bg-crispy-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="w-full h-96 bg-crispy-charcoal flex items-center justify-center">
                  <p className="text-crispy-white/20 text-xl">Social Impact Image</p>
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-crispy-gold/20"></div>
              </div>
              <div>
                <h2 className="text-4xl font-serif font-bold text-crispy-black mb-6">Social Impact</h2>
                <p className="text-lg text-crispy-charcoal leading-relaxed mb-6">
                  Beyond luxury grooming, we're committed to making a positive impact in our communities. 
                  Our shelter program provides free grooming services to individuals preparing for job interviews, 
                  helping them present their best selves and build confidence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-crispy-gold flex items-center justify-center">
                      <svg className="w-4 h-4 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-crispy-charcoal">500+ individuals served through our shelter program</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-crispy-gold flex items-center justify-center">
                      <svg className="w-4 h-4 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-crispy-charcoal">Partnership with 15+ local shelters across the UK</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-crispy-gold flex items-center justify-center">
                      <svg className="w-4 h-4 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-crispy-charcoal">75% of participants secured employment within 3 months</span>
                  </div>
                </div>
                <Link href="/shelter-program" className="btn-primary inline-block mt-8 px-8 py-3">
                  Learn More About Our Program
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-crispy-black text-crispy-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-crispy-white/80 mb-8">
              Join thousands of satisfied clients who've discovered the future of grooming services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup/client" className="btn-primary px-8 py-4 text-lg">
                Start Your Membership
              </Link>
              <Link href="/contact" className="btn-secondary px-8 py-4 text-lg">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-crispy-black text-crispy-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-16">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-serif font-bold text-crispy-white mb-4">
                  Crispy Cuts Club
                </h3>
                <p className="text-crispy-white/80 mb-6 max-w-md">
                  The ultimate premium membership platform connecting discerning clients with master barbers. 
                  Experience luxury grooming with guaranteed quality and convenience.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-crispy-white/90">hello@crispycutsclub.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-crispy-white/90">+44 (0) 20 7946 0958</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-crispy-white/90">London, United Kingdom</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Link href="#" className="w-10 h-10 bg-crispy-white/10 hover:bg-crispy-gold transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-crispy-white/10 hover:bg-crispy-gold transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-crispy-white/10 hover:bg-crispy-gold transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .979.219.979 1.488 0 .908-.578 2.265-.881 3.525-.199.841.419 1.527 1.248 1.527 1.496 0 2.642-1.58 2.642-3.863 0-2.018-1.449-3.428-3.524-3.428-2.4 0-3.81 1.801-3.81 3.667 0 .726.28 1.504.63 1.925.07.08.08.151.06.234-.067.283-.216.868-.246.99-.04.166-.133.201-.307.122-1.107-.465-1.8-1.926-1.8-3.1 0-2.657 1.93-5.095 5.571-5.095 2.925 0 5.2 2.082 5.2 4.867 0 2.906-1.834 5.242-4.378 5.242-.854 0-1.659-.443-1.933-.972 0 0-.423 1.61-.526 2.01-.19.732-.706 1.649-1.051 2.207.79.244 1.627.373 2.498.373 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="w-10 h-10 bg-crispy-white/10 hover:bg-crispy-gold transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-crispy-white mb-4 text-lg">Company</h4>
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-crispy-gold font-medium">About Us</Link></li>
                  <li><Link href="/how-it-works" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">How It Works</Link></li>
                  <li><Link href="/pricing" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Pricing</Link></li>
                  <li><Link href="/careers" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Careers</Link></li>
                  <li><Link href="/press" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Press & Media</Link></li>
                  <li><Link href="/blog" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Blog</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-crispy-white mb-4 text-lg">Services</h4>
                <ul className="space-y-3">
                  <li><Link href="/client-membership" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Client Membership</Link></li>
                  <li><Link href="/barber-network" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Barber Network</Link></li>
                  <li><Link href="/agency-services" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Agency Services</Link></li>
                  <li><Link href="/shelter-program" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Shelter Program</Link></li>
                  <li><Link href="/gift-cards" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Gift Cards</Link></li>
                  <li><Link href="/mobile-app" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Mobile App</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-crispy-white mb-4 text-lg">Support</h4>
                <ul className="space-y-3">
                  <li><Link href="/help" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Help Center</Link></li>
                  <li><Link href="/contact" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Contact Us</Link></li>
                  <li><Link href="/faq" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">FAQ</Link></li>
                  <li><Link href="/booking-support" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Booking Support</Link></li>
                  <li><Link href="/payment-help" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Payment Help</Link></li>
                  <li><Link href="/safety" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">Safety Guidelines</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-8 border-y border-crispy-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <h4 className="text-xl font-semibold text-crispy-white mb-2">Stay Updated</h4>
              <p className="text-crispy-white/80 mb-6">Get the latest grooming tips, exclusive offers, and barber spotlights.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-crispy-white/10 border border-crispy-white/20 text-crispy-white placeholder-crispy-white/60 focus:outline-none focus:border-crispy-gold"
                />
                <button className="btn-primary px-6 py-3 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="text-crispy-white/60 text-center lg:text-left">
                <p>&copy; 2024 Crispy Cuts Club Ltd. All rights reserved.</p>
                <p className="text-sm mt-1">Registered in England and Wales. Company No. 12345678</p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
                <Link href="/privacy" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">
                  Cookie Policy
                </Link>
                <Link href="/accessibility" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-crispy-white/10">
              <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
                <div className="text-xs text-crispy-white/60 text-center">
                  <div className="w-16 h-8 bg-crispy-white/10 mb-1 flex items-center justify-center text-xs">SSL</div>
                  <span>Secure</span>
                </div>
                <div className="text-xs text-crispy-white/60 text-center">
                  <div className="w-16 h-8 bg-crispy-white/10 mb-1 flex items-center justify-center text-xs">GDPR</div>
                  <span>Compliant</span>
                </div>
                <div className="text-xs text-crispy-white/60 text-center">
                  <div className="w-16 h-8 bg-crispy-white/10 mb-1 flex items-center justify-center text-xs">ISO</div>
                  <span>Certified</span>
                </div>
                <div className="text-xs text-crispy-white/60 text-center">
                  <div className="w-16 h-8 bg-crispy-white/10 mb-1 flex items-center justify-center text-xs">PCI</div>
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}