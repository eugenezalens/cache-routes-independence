import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TFormFieldProps = {
  hasBottomDivider?: boolean
} & ComponentPropsWithoutRef<'div'>

export function FormField({ hasBottomDivider, children, className, ...props }: TFormFieldProps) {
  return (
    <div
      className={cn('flex flex-col gap-sm', hasBottomDivider && 'border-b border-divider pb-md', className)}
      {...props}
    >
      {children}
    </div>
  )
}
