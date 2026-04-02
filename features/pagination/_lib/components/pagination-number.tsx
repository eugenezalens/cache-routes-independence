import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TPaginationNumberProps = {
  value: number
  isActive?: boolean
} & Omit<ComponentPropsWithoutRef<'span'>, 'children'>

export function PaginationNumber({ value, isActive, className, ...props }: TPaginationNumberProps) {
  return (
    <span
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-full',
        isActive && 'border-2 border-content-primary',
        className,
      )}
      {...props}
    >
      {value}
    </span>
  )
}
