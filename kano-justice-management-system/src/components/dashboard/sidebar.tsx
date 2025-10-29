'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  Scale,
  BookOpen,
  Users,
  Calendar,
  PieChart,
  Settings,
  FileCheck,
  Gavel,
  Shield,
  Building
} from 'lucide-react'
import clsx from 'clsx'
import { UserRole } from '@/types/auth'

interface SidebarProps {
  isOpen: boolean
}

interface NavItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  roles?: UserRole[]
}

const navigation: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Legal Advisory',
    href: '/legal-advisory',
    icon: FileText,
    roles: [UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL, UserRole.LEGAL_OFFICER]
  },
  {
    name: 'Public Prosecution',
    href: '/prosecution',
    icon: Scale,
    roles: [UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL, UserRole.PROSECUTOR]
  },
  {
    name: 'Civil Litigation',
    href: '/litigation',
    icon: Gavel,
    roles: [UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL, UserRole.LEGAL_OFFICER]
  },
  {
    name: 'Legislative Drafting',
    href: '/legislative',
    icon: BookOpen,
    roles: [UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL, UserRole.LEGISLATIVE_DRAFTER]
  },
  {
    name: 'Court Coordination',
    href: '/court-coordination',
    icon: Building,
    roles: [UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL, UserRole.COURT_LIAISON]
  },
  {
    name: 'Case Management',
    href: '/cases',
    icon: FileCheck,
    roles: [UserRole.CASE_MANAGER, UserRole.PROSECUTOR, UserRole.LEGAL_OFFICER]
  },
  {
    name: 'Stakeholder Portal',
    href: '/stakeholders',
    icon: Users
  },
  {
    name: 'Statutory Submissions',
    href: '/statutory',
    icon: Shield,
    roles: [UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL, UserRole.DIRECTOR]
  },
  {
    name: 'Reports & Analytics',
    href: '/reports',
    icon: PieChart,
    roles: [UserRole.ATTORNEY_GENERAL, UserRole.DEPUTY_ATTORNEY_GENERAL, UserRole.DIRECTOR]
  },
  {
    name: 'Calendar',
    href: '/calendar',
    icon: Calendar
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
    roles: [UserRole.ADMIN, UserRole.ATTORNEY_GENERAL]
  }
]

export default function Sidebar({ isOpen }: SidebarProps) {
  const { data: session } = useSession()
  const pathname = usePathname()

  const filteredNavigation = navigation.filter(item => {
    if (!item.roles) return true
    return session?.user?.role && item.roles.includes(session.user.role as UserRole)
  })

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden" />
      )}

      {/* Sidebar */}
      <div
        className={clsx(
          'fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-secondary-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-secondary-200">
            <div className="flex items-center space-x-3">
              <img
                src="/images/kano-state-logo.png"
                alt="Kano State Government"
                className="h-8 w-auto rounded-md"
              />
              <div>
                <span className="text-lg font-semibold text-secondary-900">KJMS</span>
                <p className="text-xs text-secondary-600">Kano State</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {filteredNavigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-600'
                      : 'text-secondary-700 hover:bg-secondary-100'
                  )}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-secondary-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {session?.user?.name?.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-secondary-900 truncate">
                  {session?.user?.name}
                </p>
                <p className="text-xs text-secondary-500 truncate">
                  {session?.user?.department}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}