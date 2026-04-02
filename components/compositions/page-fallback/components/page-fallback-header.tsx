import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TPageFallbackHeaderProps = ComponentPropsWithoutRef<'header'>

export function PageFallbackHeader({ children, className, ...props }: TPageFallbackHeaderProps) {
  return (
    <header className={cn('flex flex-col gap-sm', className)} {...props}>
      {children}
    </header>
  )
}
