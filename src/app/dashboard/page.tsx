'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Award, CreditCard } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SERVICES } from '@/lib/services'

const kpis = [
  {
    label: 'Upcoming Bookings',
    value: '3',
    icon: Calendar,
    color: 'bg-teal/10 text-teal border-teal/20',
  },
  {
    label: 'Loyalty Points',
    value: '2,450',
    icon: Award,
    color: 'bg-gold/10 text-gold-dark border-gold/20',
  },
  {
    label: 'Total Spent',
    value: 'KES 45,000',
    icon: CreditCard,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
]

const upcomingBookings = [
  {
    id: '1',
    service: 'Salon & Spa',
    date: 'March 15, 2026',
    time: '10:00 AM',
    status: 'Confirmed' as const,
    image: SERVICES[0].image,
  },
  {
    id: '2',
    service: 'Fitness Centre',
    date: 'March 18, 2026',
    time: '2:00 PM',
    status: 'Pending' as const,
    image: SERVICES[2].image,
  },
  {
    id: '3',
    service: 'Meeting Rooms',
    date: 'March 22, 2026',
    time: '9:00 AM',
    status: 'Confirmed' as const,
    image: SERVICES[3].image,
  },
]

const quickBookServices = [SERVICES[0], SERVICES[2], SERVICES[3], SERVICES[6]]

export default function DashboardPage() {
  return (
    <div>
      {/* Welcome */}
      <AnimatedSection>
        <h1 className="font-display text-3xl text-navy font-semibold">
          Good morning, Guest
        </h1>
        <p className="mt-1 font-sans text-charcoal/60">
          Here is what is happening with your account today.
        </p>
      </AnimatedSection>

      {/* KPIs */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <AnimatedSection key={kpi.label} delay={index * 0.1}>
            <div
              className={`rounded-xl p-6 border ${kpi.color} bg-white`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm opacity-70">{kpi.label}</p>
                  <p className="mt-1 font-display text-2xl font-semibold">
                    {kpi.value}
                  </p>
                </div>
                <kpi.icon className="w-8 h-8 opacity-40" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Upcoming Bookings */}
      <AnimatedSection delay={0.3} className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl text-navy font-semibold">
            Upcoming Bookings
          </h2>
          <Link
            href="/dashboard/bookings"
            className="font-sans text-sm text-gold hover:text-gold-dark transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="space-y-4">
          {upcomingBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm"
            >
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
              </div>
              <Badge
                variant={booking.status === 'Confirmed' ? 'success' : 'warning'}
              >
                {booking.status}
              </Badge>
              <div className="flex gap-2">
                <Link
                  href={`/dashboard/bookings/${booking.id}`}
                  className="px-3 py-1.5 font-sans text-xs font-medium text-navy border border-charcoal/20 rounded-lg hover:border-gold transition-colors"
                >
                  View
                </Link>
                <button className="px-3 py-1.5 font-sans text-xs font-medium text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Quick Book */}
      <AnimatedSection delay={0.4} className="mt-10">
        <h2 className="font-display text-xl text-navy font-semibold mb-4">
          Quick Book
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickBookServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:border-gold/30 border border-transparent transition-all group"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-sans text-sm font-medium text-navy">
                {service.name}
              </p>
              <p className="font-sans text-xs text-gold mt-1">Book now</p>
            </Link>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
