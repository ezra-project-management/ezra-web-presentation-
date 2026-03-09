'use client'

import { TESTIMONIALS } from '@/lib/services'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold font-sans text-sm font-medium uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy font-semibold">
            What Our Guests Say
          </h2>
        </AnimatedSection>

        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              delay={index * 0.1}
              className="min-w-[300px] md:min-w-0 snap-center"
            >
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-gold h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans text-charcoal/80 italic leading-relaxed flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-charcoal/5">
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-sans font-medium text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-navy">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-xs text-charcoal/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
