'use client'

import { useState } from 'react'
import { Lock, Phone, ChevronDown, Minus, Plus } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface BookingWidgetProps {
  serviceName: string
  basePrice: number
  duration: string
}

const timeSlots = [
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
]

export function BookingWidget({
  serviceName,
  basePrice,
  duration,
}: BookingWidgetProps) {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [showRequest, setShowRequest] = useState(false)
  const [specialRequest, setSpecialRequest] = useState('')

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gold/20 p-6 sticky top-24">
      <h3 className="font-display text-xl font-semibold text-navy">
        Book This Service
      </h3>

      {/* Price */}
      <div className="mt-4">
        <p className="font-display text-2xl text-gold font-semibold">
          From {formatCurrency(basePrice)}
        </p>
        <p className="font-sans text-sm text-charcoal/50">{duration}</p>
      </div>

      {/* Date */}
      <div className="mt-6">
        <label className="block font-sans text-sm font-medium text-navy mb-2">
          Select Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full px-4 py-3 border border-charcoal/20 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
        />
      </div>

      {/* Time Slots */}
      <div className="mt-6">
        <label className="block font-sans text-sm font-medium text-navy mb-2">
          Select Time
        </label>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={cn(
                'px-3 py-2 rounded-lg font-sans text-sm transition-all duration-200',
                selectedTime === time
                  ? 'bg-gold text-white shadow-sm'
                  : 'border border-charcoal/20 text-charcoal hover:border-gold'
              )}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Guests */}
      <div className="mt-6">
        <label className="block font-sans text-sm font-medium text-navy mb-2">
          Guests
        </label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="w-10 h-10 rounded-lg border border-charcoal/20 flex items-center justify-center hover:border-gold transition-colors"
            aria-label="Decrease guests"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="font-sans text-lg font-medium w-8 text-center">
            {guests}
          </span>
          <button
            onClick={() => setGuests(Math.min(20, guests + 1))}
            className="w-10 h-10 rounded-lg border border-charcoal/20 flex items-center justify-center hover:border-gold transition-colors"
            aria-label="Increase guests"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Special Request */}
      <div className="mt-6">
        <button
          onClick={() => setShowRequest(!showRequest)}
          className="flex items-center gap-2 font-sans text-sm text-gold hover:text-gold-dark transition-colors"
        >
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform',
              showRequest && 'rotate-180'
            )}
          />
          Add Special Request
        </button>
        {showRequest && (
          <textarea
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            placeholder="Any special requirements..."
            className="mt-3 w-full px-4 py-3 border border-charcoal/20 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition resize-none h-24"
          />
        )}
      </div>

      {/* Book Button */}
      <button className="mt-6 w-full py-4 bg-gold text-navy-dark font-sans font-medium text-lg rounded-lg hover:bg-gold-light transition-all duration-300 shadow-md hover:shadow-lg">
        Book Now
      </button>

      {/* Trust indicators */}
      <div className="mt-4 space-y-2">
        <p className="flex items-center gap-2 font-sans text-xs text-charcoal/50">
          <Lock className="w-3.5 h-3.5" />
          Secure M-Pesa payment
        </p>
        <p className="flex items-center gap-2 font-sans text-xs text-charcoal/50">
          <Phone className="w-3.5 h-3.5" />
          Instant confirmation by SMS
        </p>
      </div>
    </div>
  )
}
