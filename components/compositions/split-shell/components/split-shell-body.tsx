import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TSplitShellBodyProps = ComponentPropsWithoutRef<'div'>

export function SplitShellBody({ children, className, ...props }: TSplitShellBodyProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-lg md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]', className)} {...props}>
      {children}
    </div>
  )
}
