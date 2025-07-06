'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'client' | 'barber' | 'agency'>('client')

  const clientSteps = [
    {
      step: '01',
      title: 'Choose Your Membership',
      description: 'Select from Essential, Premium, or VIP plans based on your grooming needs and lifestyle preferences.',
      icon: '♔'
    },
    {
      step: '02',
      title: 'Select Your Barber',
      description: 'Browse our curated network of master barbers and choose the perfect match for your style.',
      icon: '✂'
    },
    {
      step: '03',
      title: 'Book Your Appointments',
      description: 'Schedule your grooming sessions at your convenience, with guaranteed availability.',
      icon: '📅'
    },
    {
      step: '04',
      title: 'Enjoy Premium Service',
      description: 'Experience consistent, high-quality grooming with your dedicated barber every time.',
      icon: '⭐'
    }
  ]

  const barberSteps = [
    {
      step: '01',
      title: 'Apply to Join',
      description: 'Submit your application with portfolio, experience, and professional credentials.',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Get Verified',
      description: 'Pass our quality assessment and background check to ensure platform standards.',
      icon: '✓'
    },
    {
      step: '03',
      title: 'Set Your Terms',
      description: 'Define your pricing, availability, and service offerings on your own terms.',
      icon: '💼'
    },
    {
      step: '04',
      title: 'Build Your Business',
      description: 'Receive guaranteed monthly income from loyal clients while growing your reputation.',
      icon: '📈'
    }
  ]

  const agencySteps = [
    {
      step: '01',
      title: 'Partner With Us',
      description: 'Contact our agency team to discuss your talent grooming needs and volume.',
      icon: '🤝'
    },
    {
      step: '02',
      title: 'Custom Solutions',
      description: 'We create tailored grooming packages that fit your schedule and budget.',
      icon: '⚡'
    },
    {
      step: '03',
      title: 'Dedicated Service',
      description: 'Your talent gets priority booking with our top barbers at preferred locations.',
      icon: '🌟'
    },
    {
      step: '04',
      title: 'Simplified Billing',
      description: 'One monthly invoice for all services with detailed reporting and analytics.',
      icon: '📊'
    }
  ]

  const getCurrentSteps = () => {
    switch (activeTab) {
      case 'barber':
        return barberSteps
      case 'agency':
        return agencySteps
      default:
        return clientSteps
    }
  }

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
            Simple Process • Premium Results
          </p>
          
          {/* Main title with enhanced typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-crispy-text-primary mb-8 md:mb-12 animate-fade-in tracking-tight">
            How It Works
          </h1>
          
          {/* Decorative line */}
          <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8 md:mb-12"></div>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-crispy-text-primary/80 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Your journey to exceptional grooming starts here
          </p>
        </div>
      </section>

      {/* User Type Tabs */}
      <section className="relative py-12 bg-crispy-bg-primary">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex border border-crispy-border-secondary p-1">
              <button
                onClick={() => setActiveTab('client')}
                className={`px-8 py-3 font-light tracking-wider uppercase text-sm transition-all duration-300 ${
                  activeTab === 'client'
                    ? 'bg-crispy-gold text-crispy-black'
                    : 'text-crispy-text-secondary hover:text-crispy-text-primary'
                }`}
              >
                For Clients
              </button>
              <button
                onClick={() => setActiveTab('barber')}
                className={`px-8 py-3 font-light tracking-wider uppercase text-sm transition-all duration-300 ${
                  activeTab === 'barber'
                    ? 'bg-crispy-gold text-crispy-black'
                    : 'text-crispy-text-secondary hover:text-crispy-text-primary'
                }`}
              >
                For Barbers
              </button>
              <button
                onClick={() => setActiveTab('agency')}
                className={`px-8 py-3 font-light tracking-wider uppercase text-sm transition-all duration-300 ${
                  activeTab === 'agency'
                    ? 'bg-crispy-gold text-crispy-black'
                    : 'text-crispy-text-secondary hover:text-crispy-text-primary'
                }`}
              >
                For Agencies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {getCurrentSteps().map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  {/* Step Number and Icon */}
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-crispy-gold flex items-center justify-center">
                        <span className="text-crispy-black font-bold text-2xl">{step.step}</span>
                      </div>
                      <div className="absolute -inset-2 border border-crispy-gold/30"></div>
                    </div>
                    <div className="w-16 h-16 border border-crispy-gold/50 flex items-center justify-center">
                      <span className="text-crispy-gold text-2xl">{step.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-crispy-text-primary mb-6">
                    {step.title}
                  </h3>
                  <p className="text-lg text-crispy-text-secondary leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Visual Placeholder */}
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="relative">
                    <div className="aspect-[4/3] bg-crispy-bg-tertiary/50 border border-crispy-border-primary"></div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 border border-crispy-gold/30"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-crispy-gold/10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-4">
              Why Choose Crispy Cuts Club
            </h2>
            <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8"></div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* For Clients */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 text-center">
                <h3 className="text-2xl font-serif font-light text-crispy-gold mb-6">For Clients</h3>
                <ul className="space-y-4 text-crispy-text-secondary text-sm font-light">
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Guaranteed availability with your chosen barber</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Consistent quality and personalized service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Flexible membership plans to suit your lifestyle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Priority booking and exclusive member benefits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* For Barbers */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 text-center">
                <h3 className="text-2xl font-serif font-light text-crispy-gold mb-6">For Barbers</h3>
                <ul className="space-y-4 text-crispy-text-secondary text-sm font-light">
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Predictable monthly income from loyal clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Build your reputation with verified reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Set your own prices and availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Focus on your craft, we handle the business</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* For Agencies */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 text-center">
                <h3 className="text-2xl font-serif font-light text-crispy-gold mb-6">For Agencies</h3>
                <ul className="space-y-4 text-crispy-text-secondary text-sm font-light">
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Professional grooming for all your talent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Flexible scheduling around productions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Consolidated billing and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-crispy-gold mr-3">•</span>
                    <span>Dedicated account management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-crispy-text-secondary mb-12 font-light">
            Join the grooming revolution today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {activeTab === 'client' && (
              <Link 
                href="/signup/client" 
                className="inline-block relative overflow-hidden group"
              >
                <span className="relative z-10 block bg-crispy-gold text-crispy-black px-12 py-4 font-light tracking-wider uppercase text-sm transition-colors duration-300">
                  Start Your Membership
                </span>
                <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            )}
            
            {activeTab === 'barber' && (
              <Link 
                href="/signup/barber" 
                className="inline-block relative overflow-hidden group"
              >
                <span className="relative z-10 block bg-crispy-gold text-crispy-black px-12 py-4 font-light tracking-wider uppercase text-sm transition-colors duration-300">
                  Apply to Join
                </span>
                <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            )}
            
            {activeTab === 'agency' && (
              <Link 
                href="/contact" 
                className="inline-block relative overflow-hidden group"
              >
                <span className="relative z-10 block bg-crispy-gold text-crispy-black px-12 py-4 font-light tracking-wider uppercase text-sm transition-colors duration-300">
                  Contact Our Team
                </span>
                <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-bg-primary transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            )}
            
            <Link 
              href="/pricing" 
              className="inline-block relative overflow-hidden group"
            >
              <span className="relative z-10 block border border-crispy-text-primary dark:border-crispy-border-primary text-crispy-text-primary px-12 py-4 font-light tracking-wider uppercase text-sm transition-colors duration-300 group-hover:text-crispy-bg-primary dark:group-hover:text-crispy-text-primary">
                View Pricing
              </span>
              <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}