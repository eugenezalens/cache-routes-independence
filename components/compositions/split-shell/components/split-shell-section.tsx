import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

import { SplitShellHelpers } from '../helpers/split-shell.helpers'

export type TSplitShellSectionProps = {
  baseId: string
} & ComponentPropsWithoutRef<'section'>

export function SplitShellSection({ baseId, children, className, ...props }: TSplitShellSectionProps) {
  const attrs = SplitShellHelpers.section.createAttrs(baseId)

  return (
    <section className={cn('flex flex-col gap-md', className)} {...attrs} {...props}>
      {children}
    </section>
  )
}
