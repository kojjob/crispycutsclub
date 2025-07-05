'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AgencySignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyWebsite: '',
    numberOfModels: '',
    contactRole: '',
    companyAddress: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // Validate password strength
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }

    // Validate minimum models
    if (parseInt(formData.numberOfModels) < 50) {
      setError('Minimum 50 models required for agency accounts')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: 'AGENCY',
          agencyData: {
            companyName: formData.companyName,
            companyWebsite: formData.companyWebsite,
            numberOfModels: parseInt(formData.numberOfModels),
            contactRole: formData.contactRole,
            companyAddress: formData.companyAddress
          }
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create account')
      }

      // Redirect to login or verification page
      router.push('/login?registered=true&verify=true')
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-crispy-white mb-2">
              Crispy Cuts
            </h1>
            <p className="text-crispy-gold text-sm font-light tracking-[0.3em] uppercase">
              Club
            </p>
          </Link>
        </div>

        {/* Signup Form */}
        <div className="bg-crispy-charcoal/50 border border-crispy-white/10 p-8">
          <h2 className="text-2xl font-serif font-light text-crispy-white mb-2 text-center">
            Agency Partnership Application
          </h2>
          <p className="text-crispy-white/60 text-sm text-center mb-8">
            Partner with us to provide grooming services for your talent
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Contact Person Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="contactRole" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Your Role
                </label>
                <input
                  id="contactRole"
                  name="contactRole"
                  type="text"
                  required
                  value={formData.contactRole}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="Talent Manager"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Business Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="contact@agency.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Business Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="+44 20 1234 5678"
                />
              </div>
            </div>

            {/* Company Information */}
            <div className="border-t border-crispy-white/10 pt-6">
              <h3 className="text-lg font-semibold text-crispy-white mb-4">Company Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-light text-crispy-white/80 mb-2">
                    Agency Name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                    placeholder="Elite Model Management"
                  />
                </div>

                <div>
                  <label htmlFor="companyWebsite" className="block text-sm font-light text-crispy-white/80 mb-2">
                    Company Website
                  </label>
                  <input
                    id="companyWebsite"
                    name="companyWebsite"
                    type="url"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                    placeholder="https://agency.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="companyAddress" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Company Address
                </label>
                <textarea
                  id="companyAddress"
                  name="companyAddress"
                  required
                  rows={3}
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors resize-none"
                  placeholder="123 Fashion Street, London, W1A 1AA"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="numberOfModels" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Number of Models/Talent
                </label>
                <input
                  id="numberOfModels"
                  name="numberOfModels"
                  type="number"
                  required
                  min="50"
                  value={formData.numberOfModels}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="Minimum 50"
                />
                <p className="text-xs text-crispy-white/40 mt-1">
                  Minimum 50 models required for agency accounts
                </p>
              </div>
            </div>

            {/* Password */}
            <div className="border-t border-crispy-white/10 pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-light text-crispy-white/80 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                    placeholder="Minimum 8 characters"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-light text-crispy-white/80 mb-2">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>

            <div className="text-sm text-crispy-white/60">
              By creating an account, you agree to our{' '}
              <Link href="/terms-agencies.pdf" target="_blank" className="text-crispy-gold hover:text-crispy-white transition-colors">
                Agency Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-crispy-gold hover:text-crispy-white transition-colors">
                Privacy Policy
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-crispy-gold text-crispy-black font-semibold py-3 hover:bg-crispy-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Submitting Application...' : 'Submit Partnership Application'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-crispy-white/60 text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-crispy-gold hover:text-crispy-white transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}