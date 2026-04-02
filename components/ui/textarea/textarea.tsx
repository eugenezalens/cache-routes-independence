import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'
import { SurfaceStyles } from '@/styles/compositions'

export type TTextareaProps = ComponentPropsWithoutRef<'textarea'>

export function Textarea({ className, ...props }: TTextareaProps) {
  return (
    <textarea
      className={cn(
        SurfaceStyles.subtle,
        'max-h-48 min-h-36 resize-y overflow-y-auto p-sm text-content-primary transition-[border-color,box-shadow] placeholder:text-content-muted focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  )
}
