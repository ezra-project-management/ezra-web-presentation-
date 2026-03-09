import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'navy' | 'cream' | 'success' | 'warning' | 'error'
  className?: string
}

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-medium',
        {
          'bg-gold/10 text-gold-dark': variant === 'gold',
          'bg-navy text-white': variant === 'navy',
          'bg-cream text-navy': variant === 'cream',
          'bg-emerald-50 text-emerald-700': variant === 'success',
          'bg-amber-50 text-amber-700': variant === 'warning',
          'bg-red-50 text-red-700': variant === 'error',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
