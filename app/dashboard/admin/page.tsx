import { requireAdmin } from '@/lib/auth-utils'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function AdminDashboard() {
  const user = await requireAdmin()
  
  // Get system stats
  const [userCount, barberCount, clientCount, agencyCount, bookingCount, activeMembers] = await Promise.all([
    prisma.user.count(),
    prisma.barber.count(),
    prisma.client.count(),
    prisma.agency.count(),
    prisma.booking.count(),
    prisma.membership.count({ where: { status: 'ACTIVE' } })
  ])

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
              <span className="text-red-500 text-sm font-bold">ADMIN</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-crispy-text-secondary text-sm">
                Admin: {user.name || user.email}
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
            Admin Dashboard
          </h1>
          <p className="text-crispy-text-secondary text-lg">
            System overview and management
          </p>
        </div>

        {/* System Stats */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {userCount}
            </div>
            <p className="text-crispy-text-secondary text-sm">Total Users</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {clientCount}
            </div>
            <p className="text-crispy-text-secondary text-sm">Clients</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {barberCount}
            </div>
            <p className="text-crispy-text-secondary text-sm">Barbers</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {agencyCount}
            </div>
            <p className="text-crispy-text-secondary text-sm">Agencies</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {activeMembers}
            </div>
            <p className="text-crispy-text-secondary text-sm">Active Members</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {bookingCount}
            </div>
            <p className="text-crispy-text-secondary text-sm">Total Bookings</p>
          </div>
        </div>

        {/* Admin Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/dashboard/admin/users" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Users</h3>
              <p className="text-crispy-text-secondary text-sm">Manage all users</p>
            </div>
          </Link>

          <Link href="/dashboard/admin/verifications" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Verifications</h3>
              <p className="text-crispy-text-secondary text-sm">Approve barbers & agencies</p>
            </div>
          </Link>

          <Link href="/dashboard/admin/areas" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Areas</h3>
              <p className="text-crispy-text-secondary text-sm">Manage service areas</p>
            </div>
          </Link>

          <Link href="/dashboard/admin/finances" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Finances</h3>
              <p className="text-crispy-text-secondary text-sm">Revenue & payments</p>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-8">
            <h2 className="text-2xl font-serif font-light text-crispy-text-primary mb-6">
              Pending Verifications
            </h2>
            <p className="text-crispy-text-secondary">
              No pending verifications at this time.
            </p>
          </div>

          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-8">
            <h2 className="text-2xl font-serif font-light text-crispy-text-primary mb-6">
              System Alerts
            </h2>
            <p className="text-crispy-text-secondary">
              All systems operational.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}