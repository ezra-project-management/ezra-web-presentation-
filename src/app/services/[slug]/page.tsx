'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import * as Accordion from '@radix-ui/react-accordion'
import { CheckCircle, ChevronDown, Star } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { BookingWidget } from '@/components/booking/BookingWidget'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 font-sans text-sm text-charcoal/50">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-navy font-medium">{service.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              {/* Hero Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Title & Rating */}
              <div className="mt-6">
                <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy">
                  {service.name}
                </h1>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <span className="font-sans text-sm font-medium text-navy">
                    5.0
                  </span>
                  <span className="font-sans text-sm text-charcoal/50">
                    (247 reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 font-sans text-charcoal/80 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="mt-8">
                <h2 className="font-display text-xl font-semibold text-navy mb-4">
                  Highlights
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {service.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 px-4 py-2.5 bg-cream rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                      <span className="font-sans text-sm text-navy">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div className="mt-8">
                <h2 className="font-display text-xl font-semibold text-navy mb-4">
                  What&apos;s Included
                </h2>
                <Accordion.Root
                  type="multiple"
                  className="space-y-2"
                >
                  {service.services.map((item, index) => (
                    <Accordion.Item
                      key={item}
                      value={`item-${index}`}
                      className="bg-white border border-charcoal/10 rounded-lg overflow-hidden"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full flex items-center justify-between px-4 py-3 font-sans text-sm font-medium text-navy hover:text-gold transition-colors group">
                          {item}
                          <ChevronDown className="w-4 h-4 text-charcoal/40 group-data-[state=open]:rotate-180 transition-transform" />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="px-4 pb-3">
                        <p className="font-sans text-sm text-charcoal/60">
                          Experience our premium {item.toLowerCase()} service
                          with expert professionals and top-quality products.
                        </p>
                      </Accordion.Content>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Widget */}
          <div className="lg:col-span-2">
            <BookingWidget
              serviceName={service.name}
              serviceSlug={service.slug}
              basePrice={service.basePrice}
              duration={service.duration}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
