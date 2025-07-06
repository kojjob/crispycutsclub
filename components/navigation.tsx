'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { ThemeToggle, ThemeToggleMobile } from './theme-toggle'

export default function Navigation() {
  const { data: session, status } = useSession()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const isActive = (path: string) => pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-crispy-bg-primary/95 dark:bg-crispy-bg-primary/95 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-crispy-gold flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-crispy-black font-bold text-lg">CC</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-crispy-text-primary">Crispy Cuts</h1>
              <p className="text-crispy-gold text-xs font-light tracking-[0.2em] uppercase -mt-1">Club</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-light transition-colors ${
                isActive('/') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-light transition-colors ${
                isActive('/about') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              href="/how-it-works" 
              className={`text-sm font-light transition-colors ${
                isActive('/how-it-works') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
              }`}
            >
              How It Works
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm font-light transition-colors ${
                isActive('/pricing') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
              }`}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-light transition-colors ${
                isActive('/contact') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            {status === 'loading' ? (
              <div className="w-20 h-8 bg-crispy-bg-secondary animate-pulse rounded"></div>
            ) : session ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="text-sm font-light text-crispy-text-primary/80 hover:text-crispy-text-primary transition-colors"
                >
                  Dashboard
                </Link>
                <Link 
                  href="/api/auth/signout" 
                  className="text-sm font-light text-crispy-text-primary/80 hover:text-crispy-text-primary transition-colors"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="text-sm font-light text-crispy-text-primary/80 hover:text-crispy-text-primary transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-crispy-gold text-crispy-black px-6 py-2 text-sm font-semibold hover:bg-crispy-gold/90 transition-all duration-200 hover:scale-105"
                >
                  Join Now
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-crispy-text-primary/80 hover:text-crispy-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Background overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-sm bg-crispy-bg-primary shadow-xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Close button */}
          <div className="flex items-center justify-between p-4 border-b border-crispy-border-primary">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-8 h-8 bg-crispy-gold flex items-center justify-center">
                <span className="text-crispy-black font-bold text-sm">CC</span>
              </div>
              <span className="text-lg font-serif font-bold text-crispy-text-primary">Crispy Cuts Club</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-crispy-text-primary/80 hover:text-crispy-text-primary transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Menu content */}
          <div className="p-6 space-y-6 overflow-y-auto h-full pb-24">
            <nav className="space-y-4">
              <Link 
                href="/" 
                className={`block text-lg font-light transition-colors ${
                  isActive('/') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block text-lg font-light transition-colors ${
                  isActive('/about') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/how-it-works" 
                className={`block text-lg font-light transition-colors ${
                  isActive('/how-it-works') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/pricing" 
                className={`block text-lg font-light transition-colors ${
                  isActive('/pricing') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className={`block text-lg font-light transition-colors ${
                  isActive('/contact') ? 'text-crispy-gold' : 'text-crispy-text-primary/80 hover:text-crispy-text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            <div className="pt-6 space-y-4 border-t border-crispy-border-primary">
              <div className="flex items-center justify-between">
                <span className="text-sm text-crispy-text-secondary">Theme</span>
                <ThemeToggleMobile />
              </div>
              
              {status === 'loading' ? (
                <div className="space-y-3">
                  <div className="w-full h-10 bg-crispy-bg-secondary animate-pulse rounded"></div>
                  <div className="w-full h-10 bg-crispy-bg-secondary animate-pulse rounded"></div>
                </div>
              ) : session ? (
                <>
                  <Link 
                    href="/dashboard" 
                    className="block w-full text-center py-3 border border-crispy-border-primary text-crispy-text-primary hover:bg-crispy-bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/api/auth/signout" 
                    className="block w-full text-center py-3 text-crispy-text-primary/80 hover:text-crispy-text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Out
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className="block w-full text-center py-3 border border-crispy-border-primary text-crispy-text-primary hover:bg-crispy-bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/signup" 
                    className="block w-full text-center py-3 bg-crispy-gold text-crispy-black font-semibold hover:bg-crispy-gold/90 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join Now
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}