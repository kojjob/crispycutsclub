'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')


  const membershipTiers = [
    {
      name: 'Essential',
      description: 'Perfect for occasional grooming needs',
      monthlyPrice: 44.99,
      annualPrice: 40.49,
      features: [
        '4 haircuts per month',
        'Basic styling consultation',
        'Online booking priority',
        'Mobile app access',
        'Basic grooming tips',
        '48-hour cancellation',
      ],
      limitations: [
        'Limited barber selection',
        'Standard appointment times only',
        'No additional services included'
      ],
      popular: false,
      cta: 'Start Essential'
    },
    {
      name: 'Premium',
      description: 'Our most popular choice for regular clients',
      monthlyPrice: 69.99,
      annualPrice: 62.99,
      features: [
        '4 haircuts per month',
        'Advanced styling consultation',
        'Premium barber selection',
        'Flexible appointment times',
        'Beard trimming included',
        'Hot towel service',
        'Personalized grooming plan',
        '24-hour cancellation',
        'Member-only events access'
      ],
      limitations: [],
      popular: true,
      cta: 'Start Premium'
    },
    {
      name: 'Executive',
      description: 'Ultimate luxury experience for discerning clients',
      monthlyPrice: 99.99,
      annualPrice: 89.99,
      features: [
        '4 haircuts per month',
        'Master barber exclusive access',
        'Concierge booking service',
        'Home/office visits available',
        'Complete grooming services',
        'Premium product samples',
        'Wardrobe styling consultation',
        'Same-day appointments',
        'VIP member events',
        'Personal grooming assistant',
        '2-hour cancellation window'
      ],
      limitations: [],
      popular: false,
      cta: 'Start Executive'
    }
  ]

  const businessPlans = [
    {
      name: 'Agency Standard',
      description: 'For modeling agencies with 50+ models',
      price: 'Custom',
      features: [
        'Dedicated account manager',
        'Bulk booking management',
        'Priority scheduling',
        'Custom billing cycles',
        'Performance reporting',
        'Emergency grooming services',
        'Location flexibility'
      ],
      cta: 'Contact Sales'
    },
    {
      name: 'Agency Premium',
      description: 'For large agencies with premium requirements',
      price: 'Custom',
      features: [
        'Everything in Standard',
        'Master barber guaranteed',
        'On-location services',
        'Event grooming teams',
        'Brand partnership opportunities',
        'Custom styling packages',
        'White-label mobile app'
      ],
      cta: 'Contact Sales'
    }
  ]

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
            Transparent • Fair • Flexible
          </p>
          
          {/* Main title with enhanced typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-crispy-text-primary mb-8 md:mb-12 animate-fade-in tracking-tight">
            Pricing
          </h1>
          
          {/* Decorative line */}
          <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8 md:mb-12"></div>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-crispy-text-primary/80 max-w-3xl mx-auto leading-relaxed animate-slide-up mb-12">
            Choose the membership that fits your lifestyle
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex border border-crispy-border-secondary p-1 animate-slide-up">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 font-light tracking-wider uppercase text-sm transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-crispy-gold text-crispy-bg-primary'
                  : 'text-crispy-text-secondary hover:text-crispy-text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-8 py-3 font-light tracking-wider uppercase text-sm transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-crispy-gold text-crispy-bg-primary'
                  : 'text-crispy-text-secondary hover:text-crispy-text-primary'
              }`}
            >
              Annual <span className="text-xs ml-1">(Save 10%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-4">
              Individual Memberships
            </h2>
            <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8"></div>
            <p className="text-xl text-crispy-text-secondary max-w-3xl mx-auto font-light">
              Every membership includes 4 haircuts per month, premium booking access, and our satisfaction guarantee.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div
                key={tier.name}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative p-8 border ${tier.popular ? 'border-crispy-gold' : 'border-crispy-border-primary'} hover:border-crispy-gold/30 transition-all duration-500 h-full flex flex-col`}>
                  {tier.popular && (
                    <div className="absolute -top-px -left-px -right-px bg-crispy-gold text-crispy-bg-primary text-center py-2 text-sm font-light tracking-wider uppercase">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`${tier.popular ? 'pt-8' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-crispy-text-primary mb-4">
                        {tier.name}
                      </h3>
                      <p className="text-crispy-text-secondary mb-6 font-light">
                        {tier.description}
                      </p>
                      <div className="mb-4">
                        <span className="text-4xl md:text-5xl font-bold text-crispy-gold">
                          £{billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice}
                        </span>
                        <span className="text-crispy-text-secondary ml-2 font-light">
                          /{billingCycle === 'monthly' ? 'month' : 'month*'}
                        </span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className="text-sm text-crispy-gold/80 font-light">
                          *Billed annually (£{(tier.annualPrice * 12).toFixed(0)}/year)
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      <h4 className="font-light text-crispy-gold uppercase tracking-wider text-sm">What's included:</h4>
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-5 h-5 border border-crispy-gold/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <span className="text-crispy-gold text-xs">✓</span>
                            </div>
                            <span className="text-crispy-text-secondary font-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {tier.limitations.length > 0 && (
                        <div className="pt-4 border-t border-crispy-border-primary">
                          <h4 className="font-light text-crispy-text-tertiary uppercase tracking-wider text-sm mb-3">Limitations:</h4>
                          <ul className="space-y-2">
                            {tier.limitations.map((limitation, limitIndex) => (
                              <li key={limitIndex} className="flex items-start space-x-3">
                                <span className="text-crispy-text-tertiary mt-0.5 flex-shrink-0">×</span>
                                <span className="text-crispy-text-tertiary text-sm font-light">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <Link
                      href={`/signup/client?plan=${tier.name.toLowerCase()}`}
                      className="inline-block relative overflow-hidden group/btn w-full"
                    >
                      <span className={`relative z-10 block ${tier.popular ? 'bg-crispy-gold text-crispy-bg-primary' : 'border border-crispy-text-primary text-crispy-text-primary dark:border-crispy-text-primary dark:text-crispy-text-primary'} px-8 py-4 font-light tracking-wider uppercase text-sm transition-colors duration-300 ${tier.popular ? '' : 'group-hover/btn:text-crispy-bg-primary dark:group-hover/btn:text-crispy-black'}`}>
                        {tier.cta}
                      </span>
                      <span className={`absolute inset-0 ${tier.popular ? 'bg-crispy-text-primary dark:bg-crispy-text-primary' : 'bg-crispy-text-primary dark:bg-crispy-text-primary'} transform ${tier.popular ? 'scale-0 group-hover/btn:scale-100' : 'scale-x-0 group-hover/btn:scale-x-100'} transition-transform duration-300 ${tier.popular ? '' : 'origin-left'}`}></span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-crispy-text-primary mb-4">
              Why Choose Membership?
            </h3>
            <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-crispy-gold/20 blur-xl"></div>
                <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                  <span className="text-crispy-gold text-2xl">£</span>
                </div>
              </div>
              <h4 className="text-xl font-serif font-light text-crispy-text-primary mb-3">Save Money</h4>
              <p className="text-crispy-text-secondary font-light">
                Save up to 30% compared to individual haircut pricing at premium salons.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-crispy-gold/20 blur-xl"></div>
                <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                  <span className="text-crispy-gold text-2xl">✓</span>
                </div>
              </div>
              <h4 className="text-xl font-serif font-light text-crispy-text-primary mb-3">Guaranteed Quality</h4>
              <p className="text-crispy-text-secondary font-light">
                Pre-vetted master barbers, consistent results, and satisfaction guarantee.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-crispy-gold/20 blur-xl"></div>
                <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                  <span className="text-crispy-gold text-2xl">⏰</span>
                </div>
              </div>
              <h4 className="text-xl font-serif font-light text-crispy-text-primary mb-3">Convenience</h4>
              <p className="text-crispy-text-secondary font-light">
                Priority booking, flexible scheduling, and no more searching for good barbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-crispy-bg-secondary/20 to-crispy-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-4">
              Business Solutions
            </h2>
            <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8"></div>
            <p className="text-xl text-crispy-text-secondary max-w-3xl mx-auto font-light">
              Tailored packages for agencies, corporate clients, and organizations requiring 
              professional grooming services at scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {businessPlans.map((plan, index) => (
              <div key={plan.name} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 md:p-12 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-crispy-text-primary mb-4">
                      {plan.name}
                    </h3>
                    <p className="text-crispy-text-secondary mb-6 font-light">
                      {plan.description}
                    </p>
                    <div className="text-4xl font-bold text-crispy-gold">
                      {plan.price}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 border border-crispy-gold/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-crispy-gold text-xs">✓</span>
                          </div>
                          <span className="text-crispy-text-secondary font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact?type=business"
                    className="inline-block relative overflow-hidden group/btn w-full"
                  >
                    <span className="relative z-10 block bg-crispy-gold text-crispy-bg-primary px-8 py-4 font-light tracking-wider uppercase text-sm transition-colors duration-300">
                      {plan.cta}
                    </span>
                    <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-text-primary transform scale-0 group-hover/btn:scale-100 transition-transform duration-300"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Shelter Program */}
          <div className="group relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 md:p-12 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500 text-center">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-crispy-gold/20 blur-xl"></div>
                <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                  <span className="text-crispy-gold text-2xl">♥</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-light text-crispy-text-primary mb-6">
                Shelter Program
              </h3>
              <p className="text-crispy-text-secondary mb-8 max-w-2xl mx-auto font-light text-lg">
                Free grooming services for shelter residents preparing for job interviews. 
                We partner with registered shelters to provide dignity and confidence through 
                professional grooming.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/shelter-program" 
                  className="inline-block relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 block bg-crispy-gold text-crispy-bg-primary px-10 py-3 font-light tracking-wider uppercase text-sm transition-colors duration-300">
                    Learn About Program
                  </span>
                  <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-text-primary transform scale-0 group-hover/btn:scale-100 transition-transform duration-300"></span>
                </Link>
                
                <Link 
                  href="/contact?type=shelter" 
                  className="inline-block relative overflow-hidden group/btn"
                >
                  <span className="relative z-10 block border border-crispy-text-primary text-crispy-text-primary dark:border-crispy-text-primary dark:text-crispy-text-primary px-10 py-3 font-light tracking-wider uppercase text-sm transition-colors duration-300 group-hover/btn:text-crispy-bg-primary dark:group-hover/btn:text-crispy-black">
                    Apply as Shelter
                  </span>
                  <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-text-primary transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-crispy-bg-primary">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-crispy-text-primary mb-4">
              Pricing Questions
            </h2>
            <div className="w-16 md:w-24 h-px bg-crispy-gold mx-auto mb-8"></div>
            <p className="text-xl text-crispy-text-secondary font-light">
              Everything you need to know about our pricing and membership terms.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                <h3 className="text-lg font-serif font-light text-crispy-gold mb-3">
                  What happens if I don't use all 4 haircuts in a month?
                </h3>
                <p className="text-crispy-text-secondary font-light">
                  Unused haircuts don't roll over to the next month. This keeps our pricing 
                  fair and allows us to maintain availability for all members. We recommend 
                  scheduling regular appointments to maximize your membership value.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                <h3 className="text-lg font-serif font-light text-crispy-gold mb-3">
                  Can I change my membership tier?
                </h3>
                <p className="text-crispy-text-secondary font-light">
                  Yes! You can upgrade your membership at any time and the change takes effect 
                  immediately. Downgrades take effect at the start of your next billing cycle. 
                  Contact our support team to make changes.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                <h3 className="text-lg font-serif font-light text-crispy-gold mb-3">
                  Is there a cancellation fee?
                </h3>
                <p className="text-crispy-text-secondary font-light">
                  No cancellation fees, ever. You can cancel your membership at any time. 
                  Your access continues until the end of your current billing period. 
                  Annual memberships are refunded on a pro-rata basis.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                <h3 className="text-lg font-serif font-light text-crispy-gold mb-3">
                  What if I'm not satisfied with a haircut?
                </h3>
                <p className="text-crispy-text-secondary font-light">
                  We guarantee your satisfaction. If you're not happy with your haircut, 
                  we'll arrange a complimentary fix with a master barber within 48 hours. 
                  Your satisfaction is our top priority.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                <h3 className="text-lg font-serif font-light text-crispy-gold mb-3">
                  Do you offer family or corporate discounts?
                </h3>
                <p className="text-crispy-text-secondary font-light">
                  Yes! Family plans (3+ members) receive 15% off. Corporate accounts for 
                  companies with 10+ employees get custom pricing. Contact our sales team 
                  for details on bulk memberships.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-crispy-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 md:p-8 border border-crispy-border-primary hover:border-crispy-gold/30 transition-all duration-500">
                <h3 className="text-lg font-serif font-light text-crispy-gold mb-3">
                  Are there any additional fees?
                </h3>
                <p className="text-crispy-text-secondary font-light">
                  No hidden fees. The membership price includes all standard services listed 
                  in your plan. Additional services like special event styling or premium 
                  products may incur extra charges, which are always disclosed upfront.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/faq" 
              className="inline-block relative overflow-hidden group"
            >
              <span className="relative z-10 block border border-crispy-text-primary text-crispy-text-primary dark:border-crispy-text-primary dark:text-crispy-text-primary px-10 py-3 font-light tracking-wider uppercase text-sm transition-colors duration-300 group-hover:text-crispy-bg-primary dark:group-hover:text-crispy-bg-primary">
                View All FAQs
              </span>
              <span className="absolute inset-0 bg-crispy-text-primary dark:bg-crispy-text-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 bg-crispy-bg-primary text-crispy-text-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Transform Your Grooming Experience?
            </h2>
            <p className="text-xl text-crispy-text-primary/80 mb-8">
              Join thousands of satisfied members who never worry about finding a great barber again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup/client" className="btn-primary px-8 py-4 text-lg">
                Start Your Membership
              </Link>
              <Link href="/how-it-works" className="btn-secondary px-8 py-4 text-lg">
                Learn How It Works
              </Link>
            </div>
            <p className="text-crispy-text-secondary text-sm mt-6">
              No setup fees • Cancel anytime • Satisfaction guaranteed
            </p>
          </div>
        </section>

    </>
  );
}