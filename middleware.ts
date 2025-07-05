import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/login') || 
                      req.nextUrl.pathname.startsWith('/signup')

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
      return null
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname
      if (req.nextUrl.search) {
        from += req.nextUrl.search
      }

      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${encodeURIComponent(from)}`, req.url)
      )
    }

    // Role-based route protection
    const userRole = token.role
    
    if (req.nextUrl.pathname.startsWith('/dashboard/client') && userRole !== 'CLIENT') {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
    
    if (req.nextUrl.pathname.startsWith('/dashboard/barber') && userRole !== 'BARBER') {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
    
    if (req.nextUrl.pathname.startsWith('/dashboard/agency') && userRole !== 'AGENCY') {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
    
    if (req.nextUrl.pathname.startsWith('/admin') && userRole !== 'ADMIN') {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
  }
)

// Protect all dashboard and admin routes
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/profile/:path*',
    '/bookings/:path*',
    '/membership/:path*'
  ]
}