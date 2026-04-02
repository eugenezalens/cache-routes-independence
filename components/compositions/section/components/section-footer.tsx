import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TSectionFooterProps = ComponentPropsWithoutRef<'footer'>

export function SectionFooter({ children, className, ...props }: TSectionFooterProps) {
  return (
    <footer className={cn('rounded-t-sm rounded-b-xl bg-surface-raised p-md shadow-sm', className)} {...props}>
      {children}
    </footer>
  )
}
