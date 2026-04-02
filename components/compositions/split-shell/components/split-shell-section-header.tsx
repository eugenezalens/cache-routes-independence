import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'
import { SurfaceStyles } from '@/styles/compositions'

export type TSplitShellSectionHeaderProps = ComponentPropsWithoutRef<'header'>

export function SplitShellSectionHeader({ children, className, ...props }: TSplitShellSectionHeaderProps) {
  return (
    <header className={cn(SurfaceStyles.raised, className)} {...props}>
      {children}
    </header>
  )
}
