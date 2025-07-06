'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Validate callback URL to prevent open redirect vulnerabilities
  const getCallbackUrl = () => {
    const url = searchParams.get('callbackUrl') || '/dashboard'
    
    // Only allow relative URLs that start with /
    if (url.startsWith('/') && !url.startsWith('//')) {
      // Additional check to prevent protocol-relative URLs
      try {
        const parsed = new URL(url, window.location.origin)
        if (parsed.origin === window.location.origin) {
          return url
        }
      } catch {
        // If URL parsing fails, it's likely a relative path which is safe
        return url
      }
    }
    
    return '/dashboard'
  }
  
  const callbackUrl = getCallbackUrl()
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        setError('Invalid email or password')
      } else {
        router.push(callbackUrl)
        router.refresh()
      }
    } catch (error) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-crispy-black flex items-center justify-center px-4">
      <div className="max-w-md w-full">
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

        {/* Login Form */}
        <div className="bg-crispy-charcoal/50 border border-crispy-white/10 p-8">
          <h2 className="text-2xl font-serif font-light text-crispy-white mb-8 text-center">
            Welcome Back
          </h2>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="Enter your email"
              />
            </div>

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
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="text-sm text-crispy-gold hover:text-crispy-white transition-colors">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-crispy-gold text-crispy-black font-semibold py-3 hover:bg-crispy-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-crispy-white/60 text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-crispy-gold hover:text-crispy-white transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}