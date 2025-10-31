'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Shield,
  Building2,
  Settings,
  LogOut,
  FileText,
  Scale,
  Gavel,
  BookOpen,
  ClipboardList,
  Bell,
  MessageSquare,
  FolderOpen,
  Globe,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/lib/stores/authStore';

const menuSections = [
  {
    section: 'Dashboard',
    items: [
      {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
      },
    ],
  },
  {
    section: 'Core Modules',
    items: [
      {
        title: 'Legal Advisory',
        href: '/legal-advisory',
        icon: FileText,
      },
      {
        title: 'Case Management',
        href: '/prosecution',
        icon: Gavel,
      },
      {
        title: 'Civil Litigation',
        href: '/civil-litigation',
        icon: Scale,
      },
      {
        title: 'Legislative Drafting',
        href: '/legislative-drafting',
        icon: BookOpen,
      },
      {
        title: 'Legal Records',
        href: '/legal-records',
        icon: FolderOpen,
      },
      {
        title: 'Statutory Submissions',
        href: '/statutory-submissions',
        icon: ClipboardList,
      },
      {
        title: 'Public Notices',
        href: '/public-notices',
        icon: Globe,
      },
    ],
  },
  {
    section: 'Collaboration',
    items: [
      {
        title: 'Communications',
        href: '/communications',
        icon: MessageSquare,
      },
      {
        title: 'Stakeholder Portal',
        href: '/stakeholders',
        icon: Users,
      },
      {
        title: 'Notifications',
        href: '/notifications',
        icon: Bell,
      },
    ],
  },
  {
    section: 'Administration',
    items: [
      {
        title: 'User Management',
        href: '/users',
        icon: Users,
      },
      {
        title: 'Departments',
        href: '/departments',
        icon: Building2,
      },
      {
        title: 'Roles & Permissions',
        href: '/roles',
        icon: Shield,
      },
      {
        title: 'System Settings',
        href: '/settings',
        icon: Settings,
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-gray-50">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6 bg-white">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image
              src="/images/Seal_of_Kano.png"
              alt="Kano State Logo"
              width={40}
              height={40}
              className="object-contain"
              style={{ height: '40px', width: 'auto' }}
            />
          </div>
          <div>
            <h1 className="text-sm font-bold text-gray-900">Kano Justice</h1>
            <p className="text-xs text-gray-600">Management System</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="border-b p-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#006403] text-white">
            {user?.firstName?.[0]}
            {user?.lastName?.[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.role?.name || 'Legal Officer'}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {menuSections.map((section, sectionIndex) => (
          <div key={section.section} className={sectionIndex > 0 ? 'mt-6' : ''}>
            {/* Section Header */}
            <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {section.section}
            </h3>
            {/* Section Items */}
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-[#006403] text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="border-t p-3">
        <button
          onClick={logout}
          className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
