'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const } },
}

const floatingPills = [
  '5,000+ Happy Clients',
  '8 Premium Services',
  'Est. 2020',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=85"
        alt="Ezra Annex luxury interior"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/85 to-navy/40" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-sm font-sans font-medium mb-6">
            Nairobi&apos;s Premier Destination
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={item} className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight">
          <span className="font-light text-white">Where Luxury Meets</span>
          <br />
          <span className="font-bold italic text-gold">Every Experience</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-white/80 font-sans max-w-2xl mx-auto leading-relaxed"
        >
          Discover world-class salon, fitness, events, and accommodation — all
          in one extraordinary place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="px-8 py-4 bg-gold text-navy-dark font-sans font-medium rounded-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Explore Our Services
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border-2 border-white text-white font-sans font-medium rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
          >
            Book Now
          </Link>
        </motion.div>

        {/* Floating Stat Pills */}
        <motion.div
          variants={item}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {floatingPills.map((pill) => (
            <span
              key={pill}
              className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-sans"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
