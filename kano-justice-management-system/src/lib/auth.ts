import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { User, UserRole } from '@/types/auth'

// Mock database - In production, this would be replaced with actual database queries
const mockUsers: User[] = [
  {
    id: '1',
    email: 'attorney.general@kano.gov.ng',
    name: 'Haruna Ibrahim Kano',
    role: UserRole.ATTORNEY_GENERAL,
    department: 'Administration',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    email: 'deputy.ag@kano.gov.ng',
    name: 'Fatima Abdullahi',
    role: UserRole.DEPUTY_ATTORNEY_GENERAL,
    department: 'Legal Advisory',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    email: 'prosecutor@kano.gov.ng',
    name: 'Mohammed Usman',
    role: UserRole.PROSECUTOR,
    department: 'Public Prosecution',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    email: 'legal.officer@kano.gov.ng',
    name: 'Aisha Garba',
    role: UserRole.LEGAL_OFFICER,
    department: 'Legal Advisory',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

// Mock password hash for "password123"
const defaultPasswordHash = '$2b$12$7R5up5UUG1a4mQhN.1JCDeBAxFv2V2cmcGrgm/XIZSZrYoODoUZfO'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required')
        }

        // Find user in mock database
        const user = mockUsers.find(u => u.email === credentials.email)

        if (!user || !user.isActive) {
          throw new Error('Invalid credentials or account is disabled')
        }

        // Verify password (in production, use actual hashed password from database)
        const isValidPassword = await bcrypt.compare(credentials.password, defaultPasswordHash)

        if (!isValidPassword) {
          throw new Error('Invalid credentials')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          department: user.department
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.department = user.department
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as UserRole
        session.user.department = token.department as string
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
  },
  secret: process.env.NEXTAUTH_SECRET || 'dev-secret-key'
}

// Helper function to check user permissions
export function hasPermission(userRole: UserRole, requiredRoles: UserRole[]): boolean {
  return requiredRoles.includes(userRole)
}

// Role hierarchy for access control
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  [UserRole.ADMIN]: 10,
  [UserRole.ATTORNEY_GENERAL]: 9,
  [UserRole.DEPUTY_ATTORNEY_GENERAL]: 8,
  [UserRole.DIRECTOR]: 7,
  [UserRole.PROSECUTOR]: 6,
  [UserRole.LEGAL_OFFICER]: 5,
  [UserRole.LEGISLATIVE_DRAFTER]: 5,
  [UserRole.COURT_LIAISON]: 4,
  [UserRole.CASE_MANAGER]: 3,
  [UserRole.CLERK]: 2
}

export function hasMinimumRole(userRole: UserRole, minimumRole: UserRole): boolean {
  return ROLE_HIERARCHY[userRole] >= ROLE_HIERARCHY[minimumRole]
}