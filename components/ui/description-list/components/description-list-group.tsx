import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TDescriptionListGroupProps = {
  hasBottomDivider?: boolean
} & ComponentPropsWithoutRef<'div'>

export function DescriptionListGroup({ children, className, hasBottomDivider, ...props }: TDescriptionListGroupProps) {
  return (
    <div
      className={cn('flex flex-col gap-xs', className, hasBottomDivider && 'border-b border-divider-subtle pb-xs')}
      {...props}
    >
      {children}
    </div>
  )
}
