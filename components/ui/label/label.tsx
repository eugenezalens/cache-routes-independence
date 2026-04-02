import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TLabelProps = ComponentPropsWithoutRef<'label'>

export function Label({ children, className, ...props }: TLabelProps) {
  return (
    <label className={cn('text-sm text-content-secondary', className)} {...props}>
      {children}
    </label>
  )
}
