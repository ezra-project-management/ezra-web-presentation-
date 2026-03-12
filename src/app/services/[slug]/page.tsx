import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/services'
import { ServiceDetailClient } from './ServiceDetailClient'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
