import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TPageShellItemListProps = ComponentPropsWithoutRef<'ul'>

export function PageShellItemList({ children, className, ...props }: TPageShellItemListProps) {
  return (
    <ul
      data-testid="page-shell-list"
      className={cn('grid grid-cols-1 gap-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4', className)}
      {...props}
    >
      {children}
    </ul>
  )
}
