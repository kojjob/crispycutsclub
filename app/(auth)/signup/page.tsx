'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type UserType = 'CLIENT' | 'BARBER' | 'AGENCY' | ''

export default function SignupPage() {
  const router = useRouter()
  const [userType, setUserType] = useState<UserType>('')

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type)
    // Navigate to specific signup flow
    router.push(`/signup/${type.toLowerCase()}`)
  }

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full">
        {/* Logo */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-crispy-white mb-2">
              Crispy Cuts
            </h1>
            <p className="text-crispy-gold text-sm font-light tracking-[0.3em] uppercase">
              Club
            </p>
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-crispy-white mb-4">
            Join Crispy Cuts Club
          </h2>
          <p className="text-crispy-white/60 text-lg">
            Select your account type to get started
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Client */}
          <button
            onClick={() => handleUserTypeSelect('CLIENT')}
            className="group relative text-center p-8 bg-crispy-charcoal/50 border border-crispy-white/10 hover:border-crispy-gold/30 transition-all duration-500"
          >
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
              <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                <span className="text-crispy-gold text-2xl">♔</span>
              </div>
            </div>
            
            <h3 className="text-xl font-serif font-light text-crispy-white mb-4">
              I'm a Client
            </h3>
            <p className="text-sm text-crispy-white/70 mb-6">
              Looking for premium grooming services with exclusive barber access
            </p>
            
            <span className="inline-block bg-crispy-white text-crispy-black px-8 py-2 text-sm font-light tracking-wider uppercase group-hover:bg-crispy-gold transition-colors">
              Continue
            </span>
          </button>

          {/* Barber */}
          <button
            onClick={() => handleUserTypeSelect('BARBER')}
            className="group relative text-center p-8 bg-crispy-charcoal/50 border border-crispy-white/10 hover:border-crispy-gold/30 transition-all duration-500"
          >
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
              <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                <span className="text-crispy-gold text-2xl">✂</span>
              </div>
            </div>
            
            <h3 className="text-xl font-serif font-light text-crispy-white mb-4">
              I'm a Barber
            </h3>
            <p className="text-sm text-crispy-white/70 mb-6">
              Ready to grow my business with guaranteed monthly income
            </p>
            
            <span className="inline-block bg-crispy-white text-crispy-black px-8 py-2 text-sm font-light tracking-wider uppercase group-hover:bg-crispy-gold transition-colors">
              Apply Now
            </span>
          </button>

          {/* Agency */}
          <button
            onClick={() => handleUserTypeSelect('AGENCY')}
            className="group relative text-center p-8 bg-crispy-charcoal/50 border border-crispy-white/10 hover:border-crispy-gold/30 transition-all duration-500"
          >
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-crispy-gold/20 blur-xl group-hover:bg-crispy-gold/30 transition-colors duration-500"></div>
              <div className="relative w-full h-full border border-crispy-gold/50 flex items-center justify-center">
                <span className="text-crispy-gold text-2xl">◈</span>
              </div>
            </div>
            
            <h3 className="text-xl font-serif font-light text-crispy-white mb-4">
              I'm an Agency
            </h3>
            <p className="text-sm text-crispy-white/70 mb-6">
              Seeking professional grooming services for our talent roster
            </p>
            
            <span className="inline-block bg-crispy-white text-crispy-black px-8 py-2 text-sm font-light tracking-wider uppercase group-hover:bg-crispy-gold transition-colors">
              Partner With Us
            </span>
          </button>
        </div>

        {/* Shelter Program Link */}
        <div className="text-center mt-12">
          <p className="text-crispy-white/60 text-sm mb-4">
            Are you a homeless shelter looking to help residents?
          </p>
          <Link href="/shelter-program" className="text-crispy-gold hover:text-crispy-white transition-colors">
            Learn about our Shelter Program →
          </Link>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-8">
          <p className="text-crispy-white/60 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-crispy-gold hover:text-crispy-white transition-colors">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}