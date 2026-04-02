import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TSectionHeaderProps = ComponentPropsWithoutRef<'header'>

export function SectionHeader({ children, className, ...props }: TSectionHeaderProps) {
  return (
    <header className={cn('rounded-t-xl rounded-b-sm bg-surface-raised p-md shadow-sm', className)} {...props}>
      {children}
    </header>
  )
}
