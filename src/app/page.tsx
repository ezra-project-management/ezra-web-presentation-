import { HeroSection } from '@/components/home/HeroSection'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { StatsSection } from '@/components/home/StatsSection'
import { GallerySection } from '@/components/home/GallerySection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
