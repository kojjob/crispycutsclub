'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function HowItWorksPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'client' | 'barber' | 'agency'>('client')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setOpenSubmenu(null)
  }

  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu)
  }

  const clientSteps = [
    {
      step: 1,
      title: 'Choose Your Membership',
      description: 'Select from Essential, Premium, or Executive plans based on your grooming needs and lifestyle.',
      details: [
        'Compare features and pricing',
        'Start with any plan, upgrade anytime',
        'All plans include 4 haircuts per month',
        'No setup fees or hidden costs'
      ]
    },
    {
      step: 2,
      title: 'Complete Your Profile',
      description: 'Tell us about your style preferences, hair type, and grooming goals for personalized service.',
      details: [
        'Upload reference photos',
        'Set style preferences',
        'Choose preferred appointment times',
        'Add any special requirements'
      ]
    },
    {
      step: 3,
      title: 'Get Matched with Barbers',
      description: 'Our algorithm matches you with pre-vetted master barbers in your area based on your preferences.',
      details: [
        'View barber profiles and specialties',
        'Read verified client reviews',
        'See available time slots',
        'Make your selection'
      ]
    },
    {
      step: 4,
      title: 'Book Your First Appointment',
      description: 'Schedule your appointment through our mobile app or website with priority booking access.',
      details: [
        'Real-time availability',
        'Instant confirmation',
        'Calendar integration',
        'Easy rescheduling options'
      ]
    },
    {
      step: 5,
      title: 'Enjoy Premium Grooming',
      description: 'Experience consistent, high-quality service with your dedicated barber, month after month.',
      details: [
        'Consistent quality guaranteed',
        'Build rapport with your barber',
        'Track your grooming journey',
        'Access member-only perks'
      ]
    }
  ]

  const barberSteps = [
    {
      step: 1,
      title: 'Submit Your Application',
      description: 'Apply to join our exclusive network of master barbers with your portfolio and credentials.',
      details: [
        'Upload portfolio and certifications',
        'Provide client references',
        'Set your service area',
        'Choose your pricing tier'
      ]
    },
    {
      step: 2,
      title: 'Skill Assessment',
      description: 'Demonstrate your expertise through our comprehensive evaluation process.',
      details: [
        'Technical skill evaluation',
        'Client service assessment',
        'Portfolio review',
        'Background verification'
      ]
    },
    {
      step: 3,
      title: 'Onboarding & Training',
      description: 'Complete our platform training and learn our service standards and client management system.',
      details: [
        'Platform training sessions',
        'Service standard guidelines',
        'Client communication best practices',
        'Business development support'
      ]
    },
    {
      step: 4,
      title: 'Start Accepting Clients',
      description: 'Begin receiving client bookings and building your dedicated clientele through our platform.',
      details: [
        'Receive matched client requests',
        'Set your availability',
        'Manage appointments through our app',
        'Build long-term relationships'
      ]
    },
    {
      step: 5,
      title: 'Grow Your Business',
      description: 'Benefit from guaranteed monthly income, business support, and career development opportunities.',
      details: [
        '90% revenue share',
        'Predictable monthly income',
        'Marketing and promotion support',
        'Continuous education opportunities'
      ]
    }
  ]

  const agencySteps = [
    {
      step: 1,
      title: 'Partnership Discussion',
      description: 'Connect with our business development team to discuss your agency\'s specific grooming needs.',
      details: [
        'Needs assessment consultation',
        'Custom package design',
        'Volume pricing discussion',
        'Service level agreements'
      ]
    },
    {
      step: 2,
      title: 'Custom Solution Design',
      description: 'We create a tailored grooming solution that fits your agency\'s workflow and requirements.',
      details: [
        'Dedicated account management',
        'Custom booking workflows',
        'Bulk scheduling tools',
        'Performance reporting setup'
      ]
    },
    {
      step: 3,
      title: 'Team Onboarding',
      description: 'Your team receives training on our platform and processes for seamless integration.',
      details: [
        'Platform training for your staff',
        'Process documentation',
        'Direct support channels',
        'Emergency service protocols'
      ]
    },
    {
      step: 4,
      title: 'Service Delivery',
      description: 'Begin using our comprehensive grooming services for your talent with dedicated support.',
      details: [
        'Priority booking for urgent needs',
        'On-location services available',
        'Event grooming teams',
        '24/7 emergency support'
      ]
    }
  ]

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
              
              <Link href="/how-it-works" className="text-crispy-gold font-medium">
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
                    <Link href="/about" className="block px-4 py-2 text-crispy-black hover:bg-crispy-black/5 hover:text-crispy-gold transition-colors duration-200">About Us</Link>
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

            <Link href="/how-it-works" className="block text-lg text-crispy-gold font-medium" onClick={toggleMobileMenu}>How It Works</Link>
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
                <Link href="/about" className="block text-crispy-charcoal hover:text-crispy-gold transition-colors duration-200" onClick={toggleMobileMenu}>About Us</Link>
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
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-crispy-white/90 max-w-3xl mx-auto mb-8 animate-slide-up">
              Discover how Crispy Cuts Club revolutionizes the grooming experience for clients, 
              barbers, and agencies through our innovative membership platform.
            </p>
            <div className="inline-flex bg-crispy-white/10 p-1 border border-crispy-white/20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => setActiveTab('client')}
                className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === 'client'
                    ? 'bg-crispy-gold text-crispy-black'
                    : 'text-crispy-white hover:text-crispy-gold'
                }`}
              >
                For Clients
              </button>
              <button
                onClick={() => setActiveTab('barber')}
                className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === 'barber'
                    ? 'bg-crispy-gold text-crispy-black'
                    : 'text-crispy-white hover:text-crispy-gold'
                }`}
              >
                For Barbers
              </button>
              <button
                onClick={() => setActiveTab('agency')}
                className={`px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === 'agency'
                    ? 'bg-crispy-gold text-crispy-black'
                    : 'text-crispy-white hover:text-crispy-gold'
                }`}
              >
                For Agencies
              </button>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-20 bg-crispy-white">
          <div className="max-w-7xl mx-auto px-4">
            {activeTab === 'client' && (
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-crispy-black mb-6">
                    Your Journey to Perfect Grooming
                  </h2>
                  <p className="text-xl text-crispy-charcoal max-w-3xl mx-auto">
                    Join thousands of clients who've transformed their grooming experience with guaranteed quality and convenience.
                  </p>
                </div>

                <div className="space-y-16">
                  {clientSteps.map((step, index) => (
                    <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="lg:w-1/2">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-crispy-gold flex items-center justify-center text-crispy-black font-bold text-2xl mr-4">
                            {step.step}
                          </div>
                          <h3 className="text-3xl font-serif font-bold text-crispy-black">{step.title}</h3>
                        </div>
                        <p className="text-lg text-crispy-charcoal mb-6">{step.description}</p>
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <svg className="w-5 h-5 text-crispy-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-crispy-charcoal">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="w-full h-80 bg-crispy-charcoal flex items-center justify-center">
                          <p className="text-crispy-white/20 text-xl">Step {step.step} Illustration</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'barber' && (
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-crispy-black mb-6">
                    Join Our Elite Barber Network
                  </h2>
                  <p className="text-xl text-crispy-charcoal max-w-3xl mx-auto">
                    Build a thriving business with guaranteed income, dedicated clients, and professional development support.
                  </p>
                </div>

                <div className="space-y-16">
                  {barberSteps.map((step, index) => (
                    <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="lg:w-1/2">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-crispy-gold flex items-center justify-center text-crispy-black font-bold text-2xl mr-4">
                            {step.step}
                          </div>
                          <h3 className="text-3xl font-serif font-bold text-crispy-black">{step.title}</h3>
                        </div>
                        <p className="text-lg text-crispy-charcoal mb-6">{step.description}</p>
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <svg className="w-5 h-5 text-crispy-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-crispy-charcoal">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="w-full h-80 bg-crispy-charcoal flex items-center justify-center">
                          <p className="text-crispy-white/20 text-xl">Barber Step {step.step}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'agency' && (
              <div>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-crispy-black mb-6">
                    Enterprise Grooming Solutions
                  </h2>
                  <p className="text-xl text-crispy-charcoal max-w-3xl mx-auto">
                    Streamline your talent's grooming needs with our comprehensive agency partnership program.
                  </p>
                </div>

                <div className="space-y-16">
                  {agencySteps.map((step, index) => (
                    <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="lg:w-1/2">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-crispy-gold flex items-center justify-center text-crispy-black font-bold text-2xl mr-4">
                            {step.step}
                          </div>
                          <h3 className="text-3xl font-serif font-bold text-crispy-black">{step.title}</h3>
                        </div>
                        <p className="text-lg text-crispy-charcoal mb-6">{step.description}</p>
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-3">
                              <svg className="w-5 h-5 text-crispy-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-crispy-charcoal">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="w-full h-80 bg-crispy-charcoal flex items-center justify-center">
                          <p className="text-crispy-white/20 text-xl">Agency Step {step.step}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-crispy-black text-crispy-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Our Quality Promise
              </h2>
              <p className="text-xl text-crispy-white/80 max-w-3xl mx-auto">
                Every aspect of our service is designed to ensure consistent, exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="premium-card bg-crispy-charcoal p-8 text-center">
                <div className="w-16 h-16 bg-crispy-gold mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-crispy-white mb-4">Rigorous Vetting</h3>
                <p className="text-crispy-white/80">
                  Every barber undergoes comprehensive skill assessment, background checks, and continuous evaluation to maintain our standards.
                </p>
              </div>

              <div className="premium-card bg-crispy-charcoal p-8 text-center">
                <div className="w-16 h-16 bg-crispy-gold mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-crispy-white mb-4">Satisfaction Guarantee</h3>
                <p className="text-crispy-white/80">
                  Not happy with your service? We'll make it right with a complimentary session or full refund. Your satisfaction is guaranteed.
                </p>
              </div>

              <div className="premium-card bg-crispy-charcoal p-8 text-center">
                <div className="w-16 h-16 bg-crispy-gold mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crispy-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-crispy-white mb-4">Continuous Innovation</h3>
                <p className="text-crispy-white/80">
                  We constantly evolve our platform, processes, and training to stay ahead of industry trends and exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 bg-crispy-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-crispy-black mb-6">
                Powered by Technology
              </h2>
              <p className="text-xl text-crispy-charcoal max-w-3xl mx-auto">
                Our cutting-edge platform makes grooming services seamless for everyone involved.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold text-crispy-black mb-6">
                  Smart Matching Algorithm
                </h3>
                <p className="text-lg text-crispy-charcoal mb-6">
                  Our proprietary algorithm considers your style preferences, location, schedule, and barber specialties 
                  to ensure perfect matches every time.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-crispy-charcoal">Preference-based matching</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-crispy-charcoal">Real-time availability sync</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-crispy-charcoal">Continuous optimization</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-80 bg-crispy-charcoal flex items-center justify-center">
                <p className="text-crispy-white/20 text-xl">Matching Algorithm Visualization</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
              <div className="lg:order-2">
                <h3 className="text-3xl font-serif font-bold text-crispy-black mb-6">
                  Seamless Mobile Experience
                </h3>
                <p className="text-lg text-crispy-charcoal mb-6">
                  Book, reschedule, and manage your grooming appointments with our intuitive mobile app. 
                  Everything you need is at your fingertips.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-crispy-charcoal">One-tap booking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-crispy-charcoal">Calendar integration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-crispy-gold mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-crispy-charcoal">Push notifications</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 w-full h-80 bg-crispy-charcoal flex items-center justify-center">
                <p className="text-crispy-white/20 text-xl">Mobile App Interface</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-crispy-black text-crispy-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-crispy-white/80">
                Everything you need to know about how our platform works.
              </p>
            </div>

            <div className="space-y-6">
              <div className="premium-card bg-crispy-charcoal p-6">
                <h3 className="text-lg font-semibold text-crispy-white mb-3">
                  How do you ensure barber quality?
                </h3>
                <p className="text-crispy-white/80">
                  Every barber undergoes a comprehensive vetting process including skill assessment, 
                  portfolio review, client references, and background checks. We also monitor 
                  performance through client feedback and regular quality assessments.
                </p>
              </div>

              <div className="premium-card bg-crispy-charcoal p-6">
                <h3 className="text-lg font-semibold text-crispy-white mb-3">
                  What if I'm not satisfied with my haircut?
                </h3>
                <p className="text-crispy-white/80">
                  We guarantee your satisfaction. If you're not happy, we'll arrange a complimentary 
                  session with a master barber within 48 hours, or provide a full refund for that 
                  service. Your happiness is our priority.
                </p>
              </div>

              <div className="premium-card bg-crispy-charcoal p-6">
                <h3 className="text-lg font-semibold text-crispy-white mb-3">
                  Can I change barbers if needed?
                </h3>
                <p className="text-crispy-white/80">
                  Yes! While we encourage building relationships with your barber, you can switch 
                  at any time. We'll help you find a new match based on your preferences and feedback.
                </p>
              </div>

              <div className="premium-card bg-crispy-charcoal p-6">
                <h3 className="text-lg font-semibold text-crispy-white mb-3">
                  How does the booking system work?
                </h3>
                <p className="text-crispy-white/80">
                  Our system shows real-time availability from your matched barbers. You can book 
                  instantly through our app or website, with automatic confirmation and calendar 
                  integration. Rescheduling is just as easy.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/faq" className="btn-primary px-8 py-3">
                View All FAQs
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-crispy-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-crispy-black mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-crispy-charcoal mb-8">
              Join thousands who've revolutionized their grooming experience with Crispy Cuts Club.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup/client" className="btn-primary px-8 py-4 text-lg">
                Start Your Membership
              </Link>
              <Link href="/pricing" className="bg-crispy-black text-crispy-white hover:bg-crispy-charcoal px-8 py-4 text-lg font-semibold transition-colors duration-200">
                View Pricing
              </Link>
            </div>
            <p className="text-crispy-charcoal/60 text-sm mt-6">
              No setup fees • Cancel anytime • Satisfaction guaranteed
            </p>
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
                  <li><Link href="/about" className="text-crispy-white/80 hover:text-crispy-gold transition-colors duration-200">About Us</Link></li>
                  <li><Link href="/how-it-works" className="text-crispy-gold font-medium">How It Works</Link></li>
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