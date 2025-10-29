'use client'

import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Bell, Search, Settings, LogOut, User, Menu, X } from 'lucide-react'

interface NavbarProps {
  onMenuToggle: () => void
  isMobileMenuOpen: boolean
}

export default function Navbar({ onMenuToggle, isMobileMenuOpen }: NavbarProps) {
  const { data: session } = useSession()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-secondary-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg text-secondary-600 hover:bg-secondary-100"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden lg:flex items-center space-x-3">
            <img
              src="/images/kano-state-logo.png"
              alt="Kano State Government"
              className="h-10 w-auto rounded-lg"
            />
            <div>
              <h1 className="text-xl font-semibold text-secondary-900">
                Kano Justice Management System
              </h1>
              <p className="text-xs text-secondary-600">Ministry of Justice</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400" />
              <input
                type="text"
                placeholder="Search cases, files..."
                className="pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
              />
            </div>
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-secondary-600 hover:bg-secondary-100 rounded-lg">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary-100"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-secondary-900">{session?.user?.name}</p>
                <p className="text-xs text-secondary-500">{session?.user?.role}</p>
              </div>
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-200 py-1 z-50">
                <div className="px-4 py-2 border-b border-secondary-200">
                  <p className="text-sm font-medium text-secondary-900">{session?.user?.name}</p>
                  <p className="text-xs text-secondary-500">{session?.user?.email}</p>
                  <p className="text-xs text-secondary-500">{session?.user?.department}</p>
                </div>
                <button className="flex items-center w-full px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
                  <User className="h-4 w-4 mr-3" />
                  Profile
                </button>
                <button className="flex items-center w-full px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100">
                  <Settings className="h-4 w-4 mr-3" />
                  Settings
                </button>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-3" />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}