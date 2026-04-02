import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TDescriptionListProps = ComponentPropsWithoutRef<'dl'>

export function DescriptionList({ children, className, ...props }: TDescriptionListProps) {
  return (
    <dl className={cn('flex flex-col gap-sm', className)} {...props}>
      {children}
    </dl>
  )
}
