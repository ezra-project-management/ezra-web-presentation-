'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { SERVICES } from '@/lib/services'
import { ServiceCard } from '@/components/services/ServiceCard'
import { ServiceFilters } from '@/components/services/ServiceFilters'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory)

  return (
    <>
      {/* Hero Header */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80"
          alt="Ezra Annex services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-white font-semibold">
            Our Services
          </h1>
          <div className="mt-3 flex items-center justify-center gap-2 font-sans text-sm text-white/60">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold">Services</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ServiceFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  )
}
