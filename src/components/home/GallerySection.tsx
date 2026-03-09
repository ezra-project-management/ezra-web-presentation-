'use client'

import { useState } from 'react'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=600&q=80',
    alt: 'Ezra Annex wellness area',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1545579133-99bb5ad189be?auto=format&fit=crop&w=600&q=80',
    alt: 'Ezra Annex spa treatment',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80',
    alt: 'Ezra Annex fitness centre',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    alt: 'Ezra Annex massage therapy',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=600&q=80',
    alt: 'Ezra Annex pool area',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=600&q=80',
    alt: 'Ezra Annex accommodation',
    tall: false,
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold font-sans text-sm font-medium uppercase tracking-widest">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-navy font-semibold">
            A Glimpse Inside
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <AnimatedSection
              key={image.src}
              delay={index * 0.1}
              className={image.tall ? 'row-span-2' : ''}
            >
              <button
                onClick={() => setSelectedImage(image.src)}
                className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 rounded-lg transition-colors duration-300" />
              </button>
            </AnimatedSection>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog.Root
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm" />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-4xl aspect-video rounded-xl overflow-hidden">
              <Dialog.Title className="sr-only">Gallery image</Dialog.Title>
              {selectedImage && (
                <Image
                  src={selectedImage.replace('w=600', 'w=1200')}
                  alt="Gallery full view"
                  fill
                  className="object-cover"
                />
              )}
              <Dialog.Close asChild>
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  )
}
