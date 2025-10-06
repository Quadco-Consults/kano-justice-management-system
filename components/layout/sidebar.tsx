'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Shield,
  Building2,
  Fuel,
  Truck,
  Package,
  Droplet,
  Settings,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useAuthStore } from '@/lib/stores/authStore';

const menuItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: '/users',
    icon: Users,
  },
  {
    title: 'Roles & Permissions',
    href: '/roles',
    icon: Shield,
  },
  {
    title: 'Departments',
    href: '/departments',
    icon: Building2,
  },
  {
    title: 'Filling Stations',
    href: '/filling-stations',
    icon: Fuel,
  },
  {
    title: 'Fleet Management',
    href: '/trucks',
    icon: Truck,
  },
  {
    title: 'LPG Accessories',
    href: '/inventory',
    icon: Package,
  },
  {
    title: 'Lubricants',
    href: '/lubricants',
    icon: Droplet,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  return (
    <div className="flex h-full w-64 flex-col border-r bg-gray-50">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6 bg-white">
        <h1 className="text-xl font-bold">
          <span className="text-[#8B1538]">BAYSCOM</span>{' '}
          <span className="text-[#E67E22]">ERP</span>
        </h1>
      </div>

      {/* User Info */}
      <div className="border-b p-4">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B1538] text-white">
            {user?.firstName?.[0]}
            {user?.lastName?.[0]}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.role?.name}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[#8B1538] text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
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
