import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

import { SplitShellHelpers } from '../helpers/split-shell.helpers'

export type TSplitShellProps = {
  baseId: string
} & ComponentPropsWithoutRef<'section'>

export function SplitShell({ baseId, children, className, ...props }: TSplitShellProps) {
  const attrs = SplitShellHelpers.root.createAttrs(baseId)

  return (
    <section className={cn('flex w-full flex-col gap-md', className)} {...attrs} {...props}>
      {children}
    </section>
  )
}
