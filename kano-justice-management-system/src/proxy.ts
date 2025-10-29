import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { UserRole } from '@/types/auth'

export default withAuth(
  function proxy(req) {
    const token = req.nextauth.token
    const pathname = req.nextUrl.pathname

    // Allow access to public routes and auth pages without authentication
    if (pathname === '/' || pathname.startsWith('/auth/') || pathname.startsWith('/api/auth/')) {
      return NextResponse.next()
    }

    // Redirect to login if not authenticated (but not for public assets)
    if (!token && !pathname.startsWith('/_next/') && !pathname.startsWith('/images/') && pathname !== '/favicon.ico') {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    // If authenticated, continue with role-based access control
    if (token) {
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
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Allow access to public routes, auth pages, and static assets
        if (pathname === '/' ||
            pathname.startsWith('/auth/') ||
            pathname.startsWith('/api/auth/') ||
            pathname.startsWith('/_next/') ||
            pathname.startsWith('/images/') ||
            pathname === '/favicon.ico') {
          return true
        }

        // Require authentication for protected routes
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