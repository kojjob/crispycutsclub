import { requireBarber } from '@/lib/auth-utils'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function BarberDashboard() {
  const user = await requireBarber()
  
  // Get barber profile
  const barber = await prisma.barber.findUnique({
    where: { userId: user.id },
    include: {
      _count: {
        select: {
          bookings: true,
          reviews: true,
          memberships: { where: { status: 'ACTIVE' } }
        }
      }
    }
  })

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
              <span className="text-crispy-gold text-sm">Barber Portal</span>
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
        {/* Status Alert */}
        {barber && !barber.isVerified && (
          <div className="bg-crispy-gold/20 border border-crispy-gold/50 p-4 mb-8">
            <p className="text-crispy-gold text-sm">
              <strong>Verification Pending:</strong> Your barber profile is under review. You&apos;ll be notified once approved.
            </p>
          </div>
        )}

        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-crispy-text-primary mb-4">
            Barber Dashboard
          </h1>
          <p className="text-crispy-text-secondary text-lg">
            Manage your appointments and track your performance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {barber?._count.memberships || 0}
            </div>
            <p className="text-crispy-text-secondary text-sm">Active Members</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {barber?.totalCuts || 0}
            </div>
            <p className="text-crispy-text-secondary text-sm">Total Cuts</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {barber?.rating.toFixed(1) || '0.0'}
            </div>
            <p className="text-crispy-text-secondary text-sm">Average Rating</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              £{barber?.basePrice.toFixed(2) || '0.00'}
            </div>
            <p className="text-crispy-text-secondary text-sm">Monthly Price</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/dashboard/barber/appointments" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Appointments</h3>
              <p className="text-crispy-text-secondary text-sm">View and manage upcoming appointments</p>
            </div>
          </Link>

          <Link href="/dashboard/barber/availability" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Availability</h3>
              <p className="text-crispy-text-secondary text-sm">Set your working hours and days off</p>
            </div>
          </Link>

          <Link href="/dashboard/barber/profile" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Profile</h3>
              <p className="text-crispy-text-secondary text-sm">Update your info and portfolio</p>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-8">
          <h2 className="text-2xl font-serif font-light text-crispy-text-primary mb-6">
            Today&apos;s Appointments
          </h2>
          <p className="text-crispy-text-secondary">
            No appointments scheduled for today.
          </p>
        </div>
      </main>
    </div>
  )
}