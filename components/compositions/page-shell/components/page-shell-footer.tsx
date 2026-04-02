import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TPageShellFooterProps = ComponentPropsWithoutRef<'footer'>

export function PageShellFooter({ children, className, ...props }: TPageShellFooterProps) {
  return (
    <footer className={cn('flex justify-end', className)} {...props}>
      {children}
    </footer>
  )
}
