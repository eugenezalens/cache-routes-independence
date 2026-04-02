import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TNavbarProps = ComponentPropsWithoutRef<'nav'>

export function Navbar({ className, children, ...props }: TNavbarProps) {
  return (
    <nav className={cn('flex items-center justify-center', className)} {...props}>
      {children}
    </nav>
  )
}
