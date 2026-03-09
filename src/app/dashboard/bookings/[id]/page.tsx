'use client'

import Link from 'next/link'
import { QrCode, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { cn } from '@/lib/utils'

const steps = ['Booked', 'Confirmed', 'In Progress', 'Completed']
const currentStep = 1

const bookingDetails = [
  { label: 'Service', value: 'Salon & Spa' },
  { label: 'Date', value: 'March 15, 2026' },
  { label: 'Time', value: '10:00 AM' },
  { label: 'Duration', value: '60 min' },
  { label: 'Guests', value: '1' },
  { label: 'Total', value: 'KES 1,500' },
  { label: 'Payment', value: 'M-Pesa' },
  { label: 'Reference', value: 'EZR-A1B2C3' },
]

export default function BookingDetailPage() {
  return (
    <div>
      {/* Back */}
      <Link
        href="/dashboard/bookings"
        className="inline-flex items-center gap-2 font-sans text-sm text-charcoal/60 hover:text-navy transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to bookings
      </Link>

      {/* Reference Badge */}
      <AnimatedSection>
        <div className="text-center mb-8">
          <Badge variant="gold" className="text-lg px-6 py-2">
            EZR-A1B2C3
          </Badge>
          <p className="mt-2 font-sans text-sm text-charcoal/50">
            Booking Reference
          </p>
        </div>
      </AnimatedSection>

      {/* Status Timeline */}
      <AnimatedSection delay={0.1}>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center font-sans text-sm font-medium',
                      index <= currentStep
                        ? 'bg-gold text-white'
                        : 'bg-charcoal/10 text-charcoal/40'
                    )}
                  >
                    {index + 1}
                  </div>
                  <p
                    className={cn(
                      'mt-2 font-sans text-xs',
                      index <= currentStep
                        ? 'text-navy font-medium'
                        : 'text-charcoal/40'
                    )}
                  >
                    {step}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-0.5 mx-2',
                      index < currentStep ? 'bg-gold' : 'bg-charcoal/10'
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Details & QR */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatedSection delay={0.2} className="md:col-span-2">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="font-display text-xl text-navy font-semibold mb-6">
              Booking Details
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {bookingDetails.map((detail) => (
                <div key={detail.label}>
                  <p className="font-sans text-xs text-charcoal/50 uppercase tracking-wider">
                    {detail.label}
                  </p>
                  <p className="font-sans text-sm text-navy font-medium mt-1">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <h3 className="font-display text-lg text-navy font-semibold mb-4">
              QR Code
            </h3>
            <div className="w-32 h-32 mx-auto border-2 border-charcoal/10 rounded-lg flex flex-col items-center justify-center">
              <QrCode className="w-12 h-12 text-charcoal/30" />
              <p className="font-sans text-xs text-charcoal/40 mt-2">
                EZR-A1B2C3
              </p>
            </div>
            <p className="mt-3 font-sans text-xs text-charcoal/50">
              Show this at check-in
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Actions */}
      <AnimatedSection delay={0.4} className="mt-8 flex flex-wrap gap-4">
        <button className="px-6 py-3 border-2 border-charcoal/20 text-navy font-sans font-medium rounded-lg hover:border-gold transition-colors">
          Reschedule
        </button>
        <button className="px-6 py-3 border-2 border-red-200 text-red-500 font-sans font-medium rounded-lg hover:bg-red-50 transition-colors">
          Cancel Booking
        </button>
        <button className="px-6 py-3 bg-navy text-white font-sans font-medium rounded-lg hover:bg-navy-light transition-colors">
          Download Receipt
        </button>
      </AnimatedSection>
    </div>
  )
}
