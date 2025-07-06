'use client'

import { usePathname } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Don't show navigation and footer on auth pages and dashboard pages
  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup') || pathname.startsWith('/forgot-password') || pathname.startsWith('/logout')
  const isDashboardPage = pathname.startsWith('/dashboard')
  const showLayout = !isAuthPage && !isDashboardPage

  return (
    <>
      {showLayout && <Navigation />}
      <main className="min-h-screen">
        {children}
      </main>
      {showLayout && <Footer />}
    </>
  )
}