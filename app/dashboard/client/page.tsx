import { requireClient } from '@/lib/auth-utils'
import Link from 'next/link'

export default async function ClientDashboard() {
  const user = await requireClient()

  return (
    <div className="min-h-screen bg-crispy-bg-primary">
      {/* Header */}
      <header className="bg-crispy-bg-secondary/50 border-b border-crispy-border-primary">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-crispy-gold flex items-center justify-center transition-transform group-hover:scale-105">
                  <span className="text-crispy-black font-bold text-lg">CC</span>
                </div>
                <div>
                  <h1 className="text-xl font-serif font-bold text-crispy-text-primary">Crispy Cuts</h1>
                  <p className="text-crispy-gold text-xs font-light tracking-[0.2em] uppercase -mt-1">Club</p>
                </div>
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-crispy-text-secondary text-sm">
                Welcome, {user.name || user.email}
              </span>
              <Link
                href="/api/auth/signout"
                className="text-crispy-gold hover:text-crispy-text-primary transition-colors text-sm"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-crispy-text-primary mb-4">
            Client Dashboard
          </h1>
          <p className="text-crispy-text-secondary text-lg">
            Manage your membership and book appointments
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/bookings/new" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Book Appointment</h3>
              <p className="text-crispy-text-secondary text-sm">Schedule your next grooming session</p>
            </div>
          </Link>

          <Link href="/membership" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Membership</h3>
              <p className="text-crispy-text-secondary text-sm">View and manage your subscription</p>
            </div>
          </Link>

          <Link href="/profile" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">My Profile</h3>
              <p className="text-crispy-text-secondary text-sm">Update your preferences and info</p>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-8">
          <h2 className="text-2xl font-serif font-light text-crispy-text-primary mb-6">
            Recent Activity
          </h2>
          <p className="text-crispy-text-secondary">
            No recent activity to display. Book your first appointment to get started!
          </p>
        </div>
      </main>
    </div>
  )
}