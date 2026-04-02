import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TCardActionsProps = ComponentPropsWithoutRef<'div'>

export function CardActions({ className, children, ...props }: TCardActionsProps) {
  return (
    <div className={cn('flex items-center gap-sm', className)} {...props}>
      {children}
    </div>
  )
}
