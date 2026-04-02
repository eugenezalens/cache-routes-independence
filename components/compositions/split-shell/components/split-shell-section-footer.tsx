import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TSplitShellSectionFooterProps = ComponentPropsWithoutRef<'footer'>

export function SplitShellSectionFooter({ children, className, ...props }: TSplitShellSectionFooterProps) {
  return (
    <footer className={cn(className)} {...props}>
      {children}
    </footer>
  )
}
