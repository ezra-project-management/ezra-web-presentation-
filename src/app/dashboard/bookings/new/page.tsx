'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SERVICES } from '@/lib/services'

export default function NewBookingPage() {
  return (
    <div className="space-y-6">
      <AnimatedSection>
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/bookings"
            className="w-10 h-10 rounded-full bg-white border border-charcoal/10 flex items-center justify-center hover:border-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-navy" />
          </Link>
          <div>
            <h1 className="font-display text-2xl lg:text-3xl text-navy font-semibold">
              New Booking
            </h1>
            <p className="font-sans text-sm text-gray-400 mt-0.5">
              Choose a service to get started
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((service, i) => (
          <AnimatedSection key={service.id} delay={0.05 + i * 0.05}>
            <Link
              href={`/services/${service.slug}/book`}
              className="group block bg-gradient-to-br from-white to-cream/40 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xl" suppressHydrationWarning>{service.icon}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                  {service.name}
                </h3>
                <p className="font-sans text-xs text-charcoal/60 mt-1 line-clamp-2">
                  {service.tagline}
                </p>
                <p className="font-sans text-[10px] text-gold font-bold mt-2 uppercase tracking-widest">
                  {service.duration}
                </p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
