'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Calendar,
  User,
  Bell,
  LogOut,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const sidebarLinks = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Bookings', href: '/dashboard/bookings', icon: Calendar },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/dashboard') return pathname === '/dashboard'
    return pathname.startsWith(href)
  }

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-6">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-display text-xl font-bold text-navy">
            EZRA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
          <span className="font-display text-xl font-light text-navy/60">
            ANNEX
          </span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="mt-4 px-3 space-y-1">
        {sidebarLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setSidebarOpen(false)}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm transition-all duration-200',
              isActive(link.href)
                ? 'bg-gold/5 text-navy font-medium border-l-4 border-gold -ml-px'
                : 'text-charcoal/60 hover:bg-cream hover:text-navy'
            )}
          >
            <link.icon className="w-5 h-5" />
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto p-3">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm text-charcoal/60 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Link>
      </div>
    </>
  )

  return (
    <div className="min-h-screen pt-0">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-60 bg-white border-r border-charcoal/10 z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-charcoal/10 z-40 flex items-center px-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 text-navy"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Link href="/" className="flex items-center gap-1 ml-3">
          <span className="font-display text-lg font-bold text-navy">
            EZRA
          </span>
          <span className="w-1 h-1 rounded-full bg-gold inline-block" />
          <span className="font-display text-lg font-light text-navy/60">
            ANNEX
          </span>
        </Link>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/40 z-50"
            />
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 w-60 bg-white z-50 flex flex-col shadow-xl"
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 p-2"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5 text-charcoal" />
              </button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-60 min-h-screen bg-cream pt-20 lg:pt-6 p-6 lg:p-8">
        {children}
      </main>
    </div>
  )
}
