'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

type BookingStatus = 'Confirmed' | 'Completed' | 'Cancelled' | 'Pending'

interface Booking {
  id: string
  service: string
  image: string
  date: string
  time: string
  reference: string
  status: BookingStatus
}

const bookings: Booking[] = [
  {
    id: '1',
    service: 'Salon & Spa',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    date: 'March 15, 2026',
    time: '10:00 AM',
    reference: 'EZR-A1B2C3',
    status: 'Confirmed',
  },
  {
    id: '2',
    service: 'Fitness Centre',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    date: 'March 18, 2026',
    time: '2:00 PM',
    reference: 'EZR-D4E5F6',
    status: 'Pending',
  },
  {
    id: '3',
    service: 'Meeting Rooms',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    date: 'March 22, 2026',
    time: '9:00 AM',
    reference: 'EZR-G7H8I9',
    status: 'Confirmed',
  },
  {
    id: '4',
    service: 'Barbershop',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    date: 'Feb 28, 2026',
    time: '11:00 AM',
    reference: 'EZR-J1K2L3',
    status: 'Completed',
  },
  {
    id: '5',
    service: 'Ballroom',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    date: 'Jan 10, 2026',
    time: '6:00 PM',
    reference: 'EZR-M4N5O6',
    status: 'Cancelled',
  },
]

const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled'] as const

const statusVariant: Record<BookingStatus, 'success' | 'warning' | 'navy' | 'error'> = {
  Confirmed: 'success',
  Pending: 'warning',
  Completed: 'navy',
  Cancelled: 'error',
}

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState<string>('All')

  const filteredBookings = bookings.filter((b) => {
    if (activeTab === 'All') return true
    if (activeTab === 'Upcoming')
      return b.status === 'Confirmed' || b.status === 'Pending'
    return b.status === activeTab
  })

  return (
    <div>
      <AnimatedSection>
        <h1 className="font-display text-2xl text-navy font-semibold">
          My Bookings
        </h1>
      </AnimatedSection>

      {/* Tabs */}
      <div className="mt-6 flex gap-6 border-b border-charcoal/10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'pb-3 font-sans text-sm font-medium transition-colors',
              activeTab === tab
                ? 'text-navy border-b-2 border-gold'
                : 'text-charcoal/50 hover:text-navy'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bookings List */}
      <div className="mt-6 space-y-4">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-sans text-charcoal/40">No bookings found</p>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <AnimatedSection key={booking.id}>
              <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={booking.image}
                    alt={booking.service}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm font-medium text-navy">
                    {booking.service}
                  </p>
                  <p className="font-sans text-xs text-charcoal/50 mt-1">
                    {booking.date} at {booking.time}
                  </p>
                  <p className="font-sans text-xs text-charcoal/40 mt-0.5">
                    Ref: {booking.reference}
                  </p>
                </div>
                <Badge variant={statusVariant[booking.status]}>
                  {booking.status}
                </Badge>
                <Link
                  href={`/dashboard/bookings/${booking.id}`}
                  className="px-4 py-2 font-sans text-xs font-medium text-navy border border-charcoal/20 rounded-lg hover:border-gold transition-colors"
                >
                  View
                </Link>
              </div>
            </AnimatedSection>
          ))
        )}
      </div>
    </div>
  )
}
