import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TDescriptionListValueProps = ComponentPropsWithoutRef<'dd'>

export function DescriptionListValue({ children, className }: TDescriptionListValueProps) {
  return <dd className={cn('line-clamp-1 text-content-primary', className)}>{children}</dd>
}
