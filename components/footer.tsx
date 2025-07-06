'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-crispy-bg-primary">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-crispy-gold flex items-center justify-center">
                <span className="text-crispy-black font-bold text-xl">CC</span>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-crispy-text-primary">Crispy Cuts</h2>
                <p className="text-crispy-gold text-sm font-light tracking-[0.2em] uppercase -mt-1">Club</p>
              </div>
            </Link>
            <p className="text-crispy-text-secondary text-sm leading-relaxed mb-6 max-w-sm">
              The ultimate grooming club connecting discerning clients with exclusive master barbers through premium membership subscriptions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/crispycutsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-crispy-bg-secondary rounded-full flex items-center justify-center hover:bg-crispy-gold/20 transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-crispy-text-primary/80 group-hover:text-crispy-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/crispycutsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-crispy-bg-secondary rounded-full flex items-center justify-center hover:bg-crispy-gold/20 transition-colors group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-crispy-text-primary/80 group-hover:text-crispy-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/crispycutsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-crispy-bg-secondary rounded-full flex items-center justify-center hover:bg-crispy-gold/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-crispy-text-primary/80 group-hover:text-crispy-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-crispy-text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* For Barbers */}
          <div>
            <h3 className="text-crispy-text-primary font-semibold mb-4">For Barbers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/barbers/join" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Join as Barber
                </Link>
              </li>
              <li>
                <Link href="/barbers/benefits" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Barber Benefits
                </Link>
              </li>
              <li>
                <Link href="/barbers/requirements" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Requirements
                </Link>
              </li>
              <li>
                <Link href="/barbers/faq" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Barber FAQ
                </Link>
              </li>
              <li>
                <Link href="/dashboard/barber" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Barber Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-crispy-text-primary font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="mailto:support@crispycutsclub.com" className="text-crispy-text-secondary hover:text-crispy-gold text-sm transition-colors">
                  support@crispycutsclub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-crispy-text-primary font-semibold mb-2">Stay in the Loop</h3>
              <p className="text-crispy-text-secondary text-sm">
                Get exclusive updates, grooming tips, and member-only offers delivered to your inbox.
              </p>
            </div>
            <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-crispy-bg-secondary border border-crispy-border-primary text-crispy-text-primary px-4 py-2 text-sm focus:outline-none focus:border-crispy-gold/50 transition-colors placeholder-crispy-text-tertiary"
              />
              <button
                type="submit"
                className="bg-crispy-gold text-crispy-black px-6 py-2 text-sm font-semibold hover:bg-crispy-gold/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-crispy-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-crispy-text-tertiary text-xs text-center md:text-left">
              © {currentYear} Crispy Cuts Club Ltd. All rights reserved. | Company No. 12345678 | VAT No. GB123456789
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/sitemap" className="text-crispy-text-tertiary hover:text-crispy-gold text-xs transition-colors">
                Sitemap
              </Link>
              <span className="text-crispy-text-tertiary/50">•</span>
              <Link href="/accessibility" className="text-crispy-text-tertiary hover:text-crispy-gold text-xs transition-colors">
                Accessibility
              </Link>
              <span className="text-crispy-text-tertiary/50">•</span>
              <Link href="/cookies" className="text-crispy-text-tertiary hover:text-crispy-gold text-xs transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}