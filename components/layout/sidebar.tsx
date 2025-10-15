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
  ShoppingCart,
  UserCog,
  Wrench,
  DollarSign,
  FileText,
  ClipboardList,
  Store,
  UserCheck,
  Calendar,
  Clock,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Archive,
  Boxes,
  ShoppingBag,
  PackageCheck,
  Warehouse,
  Mail,
  Bike,
  Flame,
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
    section: 'Procurement',
    items: [
      {
        title: 'Purchase Request',
        href: '/procurement/purchase-request',
        icon: FileText,
      },
      {
        title: 'Purchase Order',
        href: '/procurement/purchase-order',
        icon: ClipboardList,
      },
      {
        title: 'Vendor Database',
        href: '/procurement/vendors',
        icon: Store,
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
    ],
  },
  {
    section: 'Admin and HR',
    items: [
      {
        title: 'Users',
        href: '/users',
        icon: Users,
      },
      {
        title: 'Departments',
        href: '/departments',
        icon: Building2,
      },
      {
        title: 'Attendance',
        href: '/hr/attendance',
        icon: UserCheck,
      },
      {
        title: 'Leave Management',
        href: '/hr/leave',
        icon: Calendar,
      },
      {
        title: 'Overtime',
        href: '/hr/overtime',
        icon: Clock,
      },
      {
        title: 'Performance',
        href: '/hr/performance',
        icon: TrendingUp,
      },
      {
        title: 'Recruitment',
        href: '/hr/recruitment',
        icon: Briefcase,
      },
      {
        title: 'Training',
        href: '/hr/training',
        icon: GraduationCap,
      },
    ],
  },
  {
    section: 'Inventory Management',
    items: [
      {
        title: 'Consumables',
        href: '/inventory-management/consumables',
        icon: Boxes,
      },
      {
        title: 'Assets',
        href: '/inventory-management/assets',
        icon: Archive,
      },
      {
        title: 'Item Request',
        href: '/inventory-management/item-request',
        icon: ShoppingBag,
      },
      {
        title: 'Asset Request',
        href: '/inventory-management/asset-request',
        icon: PackageCheck,
      },
      {
        title: 'Goods Receipt Note',
        href: '/inventory-management/goods-receipt',
        icon: ClipboardList,
      },
      {
        title: 'Store',
        href: '/inventory-management/store',
        icon: Warehouse,
      },
    ],
  },
  {
    section: 'Memo',
    items: [
      {
        title: 'Memo',
        href: '/memo',
        icon: Mail,
      },
    ],
  },
  {
    section: 'Operations',
    items: [
      {
        title: 'Filling Stations',
        href: '/operations/filling-stations',
        icon: Fuel,
      },
      {
        title: 'Peddler Operations',
        href: '/operations/peddler',
        icon: Bike,
      },
      {
        title: 'Fleet Management',
        href: '/operations/fleet',
        icon: Truck,
      },
      {
        title: 'LPG Operations',
        href: '/operations/lpg',
        icon: Flame,
      },
    ],
  },
  {
    section: 'Finance',
    items: [
      // Finance items will be added here
    ],
  },
  {
    section: 'Access Control',
    items: [
      {
        title: 'Roles & Permissions',
        href: '/roles',
        icon: Shield,
      },
      {
        title: 'Settings',
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
                        ? 'bg-[#8B1538] text-white'
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
