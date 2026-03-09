'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80"
        alt="Ezra Annex booking"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/85" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-5xl text-white font-semibold">
            Ready to Experience Ezra Annex?
          </h2>
          <p className="mt-4 text-lg text-white/80 font-sans">
            Book any service online in minutes. No queues, no calls needed.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center mt-8 px-10 py-4 bg-gold text-navy-dark font-sans font-medium text-lg rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Experience &rarr;
          </Link>
          <p className="mt-6 flex items-center justify-center gap-2 text-white/60 font-sans text-sm">
            <MessageCircle className="w-4 h-4" />
            Or chat with our AI assistant 24/7
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
