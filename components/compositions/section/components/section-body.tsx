import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TSectionBodyProps = {
  variant?: 'capped' | 'flush'
} & ComponentPropsWithoutRef<'div'>

export function SectionBody({ children, className, variant = 'flush', ...props }: TSectionBodyProps) {
  return (
    <div
      className={cn(
        'rounded-t-sm bg-surface-raised p-md shadow-sm',
        variant === 'capped' ? 'rounded-b-xl' : 'rounded-b-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
