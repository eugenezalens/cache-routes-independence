import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TPageShellHeaderProps = ComponentPropsWithoutRef<'header'>

export function PageShellHeader({ children, className, ...props }: TPageShellHeaderProps) {
  return (
    <header className={cn('flex items-center justify-between', className)} {...props}>
      {children}
    </header>
  )
}
