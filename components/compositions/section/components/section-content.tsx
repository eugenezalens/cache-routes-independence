import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'
import { SurfaceStyles } from '@/styles/compositions'

export type TSectionContentProps = ComponentPropsWithoutRef<'div'>

export function SectionContent({ children, className, ...props }: TSectionContentProps) {
  return (
    <div className={cn(SurfaceStyles.subtle, className)} {...props}>
      {children}
    </div>
  )
}
