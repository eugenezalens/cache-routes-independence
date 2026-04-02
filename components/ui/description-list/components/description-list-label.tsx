import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TDescriptionListLabelProps = ComponentPropsWithoutRef<'dt'>

export function DescriptionListLabel({ children, className }: TDescriptionListLabelProps) {
  return <dt className={cn('line-clamp-1 text-xs text-content-secondary', className)}>{children}</dt>
}
