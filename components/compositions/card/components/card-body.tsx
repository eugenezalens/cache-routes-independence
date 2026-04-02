import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'
import { SurfaceStyles } from '@/styles/compositions'

export type TCardBodyProps = ComponentPropsWithoutRef<'div'>

export function CardBody({ children, className, ...props }: TCardBodyProps) {
  return (
    <div className={cn(SurfaceStyles.subtle, className)} {...props}>
      {children}
    </div>
  )
}
