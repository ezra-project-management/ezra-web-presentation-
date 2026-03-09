'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-navy/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="font-display text-2xl font-bold text-white">
              EZRA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
            <span className="font-display text-2xl font-light text-white/80">
              ANNEX
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setServicesOpen(true)
                }
                onMouseLeave={() =>
                  link.hasDropdown && setServicesOpen(false)
                }
              >
                <Link
                  href={link.href}
                  className={cn(
                    'font-sans text-sm font-medium transition-colors duration-300 flex items-center gap-1',
                    pathname === link.href
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                  )}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white rounded-xl shadow-2xl border border-charcoal/5 p-4"
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-cream transition-colors group"
                            >
                              <span className="text-lg">{service.icon}</span>
                              <div>
                                <p className="font-sans text-sm font-medium text-navy group-hover:text-gold transition-colors">
                                  {service.name}
                                </p>
                                <p className="font-sans text-xs text-charcoal/50">
                                  {service.duration}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/auth/login"
              className="font-sans text-sm font-medium text-white/80 hover:text-gold transition-colors"
            >
              Login
            </Link>
            <Link
              href="/services"
              className="font-sans text-sm font-medium px-6 py-2.5 bg-gold text-navy-dark rounded-lg hover:bg-gold-light transition-colors shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block font-sans text-base font-medium py-2',
                      pathname === link.href
                        ? 'text-gold'
                        : 'text-white/80'
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block font-sans text-sm text-white/60 hover:text-gold py-1"
                        >
                          {service.icon} {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/auth/login"
                  className="block font-sans text-sm text-white/80 hover:text-gold"
                >
                  Login
                </Link>
                <Link
                  href="/services"
                  className="block text-center font-sans text-sm font-medium px-6 py-3 bg-gold text-navy-dark rounded-lg"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
