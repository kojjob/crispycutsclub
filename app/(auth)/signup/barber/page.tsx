'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BarberSignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    yearsOfExperience: '',
    specialties: '',
    licenseNumber: '',
    portfolioUrl: ''
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
          role: 'BARBER',
          barberData: {
            yearsOfExperience: parseInt(formData.yearsOfExperience),
            specialties: formData.specialties.split(',').map(s => s.trim()),
            licenseNumber: formData.licenseNumber,
            portfolioUrl: formData.portfolioUrl
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
            Join Our Barber Network
          </h2>
          <p className="text-crispy-white/60 text-sm text-center mb-8">
            Apply to become a Crispy Cuts Club barber
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="+44 7123 456789"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-light text-crispy-white/80 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Professional Information */}
            <div className="border-t border-crispy-white/10 pt-6">
              <h3 className="text-lg font-semibold text-crispy-white mb-4">Professional Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-light text-crispy-white/80 mb-2">
                    Years of Experience
                  </label>
                  <input
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    type="number"
                    required
                    min="0"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                    placeholder="5"
                  />
                </div>

                <div>
                  <label htmlFor="licenseNumber" className="block text-sm font-light text-crispy-white/80 mb-2">
                    License Number (Optional)
                  </label>
                  <input
                    id="licenseNumber"
                    name="licenseNumber"
                    type="text"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                    placeholder="License #"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="specialties" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Specialties (comma-separated)
                </label>
                <input
                  id="specialties"
                  name="specialties"
                  type="text"
                  required
                  value={formData.specialties}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="Fades, Beard Trimming, Classic Cuts"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="portfolioUrl" className="block text-sm font-light text-crispy-white/80 mb-2">
                  Portfolio/Instagram URL (Optional)
                </label>
                <input
                  id="portfolioUrl"
                  name="portfolioUrl"
                  type="url"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="w-full bg-crispy-black/50 border border-crispy-white/20 text-crispy-white px-4 py-3 focus:outline-none focus:border-crispy-gold/50 transition-colors"
                  placeholder="https://instagram.com/yourhandle"
                />
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
              <Link href="/terms-barbers.pdf" target="_blank" className="text-crispy-gold hover:text-crispy-white transition-colors">
                Barber Terms & Conditions
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
              {isLoading ? 'Submitting Application...' : 'Submit Application'}
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