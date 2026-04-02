import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'
import { SurfaceStyles } from '@/styles/compositions'

export type TInputProps = ComponentPropsWithoutRef<'input'>

export function Input({ className, ...props }: TInputProps) {
  return (
    <input
      className={cn(
        SurfaceStyles.subtle,
        'p-sm text-content-primary transition-[border-color,box-shadow] placeholder:text-content-muted focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  )
}
