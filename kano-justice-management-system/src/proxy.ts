import { auth } from '@/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { UserRole } from '@/types/auth'

export default async function proxy(req: NextRequest) {
  const session = await auth()
  const pathname = req.nextUrl.pathname

  // Allow access to public routes and auth pages without authentication
  if (pathname === '/' || pathname.startsWith('/auth/') || pathname.startsWith('/api/auth/')) {
    return NextResponse.next()
  }

  // Allow access to static assets
  if (pathname.startsWith('/_next/') || pathname.startsWith('/images/') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  // Redirect to login if not authenticated
  if (!session?.user) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  // Role-based access control
  const userRole = session.user.role as UserRole

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
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}