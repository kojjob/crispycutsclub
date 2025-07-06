import { requireAgency } from '@/lib/auth-utils'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function AgencyDashboard() {
  const user = await requireAgency()
  
  // Get agency profile
  const agency = await prisma.agency.findUnique({
    where: { userId: user.id },
    include: {
      _count: {
        select: {
          models: true,
          bookings: true
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
              <span className="text-crispy-gold text-sm">Agency Portal</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-crispy-text-secondary text-sm">
                {agency?.companyName || user.name || user.email}
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
        {agency && !agency.isVerified && (
          <div className="bg-crispy-gold/20 border border-crispy-gold/50 p-4 mb-8">
            <p className="text-crispy-gold text-sm">
              <strong>Verification Pending:</strong> Your agency partnership is under review. You&apos;ll be notified once approved.
            </p>
          </div>
        )}

        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-crispy-text-primary mb-4">
            Agency Dashboard
          </h1>
          <p className="text-crispy-text-secondary text-lg">
            Manage your models and track grooming appointments
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {agency?.numberOfModels || 0}
            </div>
            <p className="text-crispy-text-secondary text-sm">Total Models</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {agency?._count.models || 0}
            </div>
            <p className="text-crispy-text-secondary text-sm">Active Models</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              {agency?._count.bookings || 0}
            </div>
            <p className="text-crispy-text-secondary text-sm">Total Bookings</p>
          </div>
          
          <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6">
            <div className="text-3xl font-bold text-crispy-gold mb-2">
              0
            </div>
            <p className="text-crispy-text-secondary text-sm">This Month</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/dashboard/agency/models" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Models</h3>
              <p className="text-crispy-text-secondary text-sm">Manage your model roster</p>
            </div>
          </Link>

          <Link href="/dashboard/agency/bookings" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Bookings</h3>
              <p className="text-crispy-text-secondary text-sm">Schedule grooming sessions</p>
            </div>
          </Link>

          <Link href="/dashboard/agency/reports" className="group">
            <div className="bg-crispy-bg-secondary/50 border border-crispy-border-primary p-6 hover:border-crispy-gold/30 transition-all">
              <div className="w-12 h-12 bg-crispy-gold/20 rounded flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-crispy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-crispy-text-primary mb-2">Reports</h3>
              <p className="text-crispy-text-secondary text-sm">View usage and billing reports</p>
            </div>
          </Link>
        </div>

        {/* Agency Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-crispy-charcoal/50 border border-crispy-white/10 p-8">
            <h2 className="text-2xl font-serif font-light text-crispy-text-primary mb-6">
              Company Information
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-crispy-white/60 text-sm mb-1">Company Name</p>
                <p className="text-crispy-text-primary">{agency?.companyName || 'Not set'}</p>
              </div>
              <div>
                <p className="text-crispy-white/60 text-sm mb-1">Website</p>
                <p className="text-crispy-text-primary">{agency?.companyWebsite || 'Not set'}</p>
              </div>
              <div>
                <p className="text-crispy-white/60 text-sm mb-1">Contact Person</p>
                <p className="text-crispy-text-primary">{user.name} ({agency?.contactRole || 'Contact'})</p>
              </div>
            </div>
          </div>

          <div className="bg-crispy-charcoal/50 border border-crispy-white/10 p-8">
            <h2 className="text-2xl font-serif font-light text-crispy-text-primary mb-6">
              Quick Stats
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-crispy-white/60 text-sm mb-1">Average Bookings/Month</p>
                <p className="text-crispy-text-primary">0</p>
              </div>
              <div>
                <p className="text-crispy-white/60 text-sm mb-1">Most Active Model</p>
                <p className="text-crispy-text-primary">-</p>
              </div>
              <div>
                <p className="text-crispy-white/60 text-sm mb-1">Partnership Since</p>
                <p className="text-crispy-text-primary">
                  {agency?.createdAt ? new Date(agency.createdAt).toLocaleDateString('en-GB') : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}