import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TPageShellProps = ComponentPropsWithoutRef<'div'>

export function PageShell({ children, className, ...props }: TPageShellProps) {
  return (
    <div className={cn('mx-auto flex w-full flex-col gap-md', className)} {...props}>
      {children}
    </div>
  )
}
