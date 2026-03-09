'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES } from '@/lib/services'
import { formatCurrency } from '@/lib/utils'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold font-sans text-sm font-medium uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy font-semibold">
            Experience the Extraordinary
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Link href={`/services/${service.slug}`} className="group block">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-lg shadow-lg bg-white border-t-2 border-transparent hover:border-gold transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-2xl mb-1">{service.icon}</p>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {service.name}
                    </h3>
                    <p className="font-sans text-sm text-white/70 mt-1 line-clamp-1">
                      {service.tagline}
                    </p>
                    <p className="font-sans text-sm text-gold font-medium mt-2">
                      From {formatCurrency(service.basePrice)}
                    </p>

                    {/* Hover CTA */}
                    <div className="overflow-hidden">
                      <p className="font-sans text-sm text-gold-light font-medium mt-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        Book Now &rarr;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
