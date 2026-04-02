import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TPageFallbackFooterProps = ComponentPropsWithoutRef<'footer'>

export function PageFallbackFooter({ children, className, ...props }: TPageFallbackFooterProps) {
  return (
    <footer className={cn('flex flex-wrap items-center justify-center gap-sm', className)} {...props}>
      {children}
    </footer>
  )
}
