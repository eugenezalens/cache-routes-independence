import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TCardHeaderProps = ComponentPropsWithoutRef<'header'>

export function CardHeader({ children, className, ...props }: TCardHeaderProps) {
  return (
    <header className={cn('border-b border-divider pb-sm', className)} {...props}>
      {children}
    </header>
  )
}
