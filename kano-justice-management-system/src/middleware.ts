import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { UserRole } from '@/types/auth'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const pathname = req.nextUrl.pathname

    // Allow access to auth pages without authentication
    if (pathname.startsWith('/auth/')) {
      return NextResponse.next()
    }

    // Redirect to login if not authenticated
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    // Role-based access control for specific routes
    const userRole = token.role as UserRole

    // Admin-only routes
    if (pathname.startsWith('/admin') && userRole !== UserRole.ADMIN) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Attorney General and Deputy Attorney General routes
    if (pathname.startsWith('/executive') &&
        ![UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL].includes(userRole)) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Director-level routes
    if (pathname.startsWith('/management') &&
        ![UserRole.ADMIN, UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL, UserRole.DIRECTOR].includes(userRole)) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Allow access to public routes
        if (pathname === '/' || pathname.startsWith('/auth/')) {
          return true
        }

        // Require authentication for all other routes
        return !!token
      }
    }
  }
)

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}