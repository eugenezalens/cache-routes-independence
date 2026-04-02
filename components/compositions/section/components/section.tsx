import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

import { SectionHelpers } from '../helpers/section.helpers'

export type TSectionProps = {
  baseId: string
} & ComponentPropsWithoutRef<'section'>

export function Section({ baseId, children, className, ...props }: TSectionProps) {
  const attrs = SectionHelpers.section.createAttrs(baseId)

  return (
    <section className={cn('flex flex-col gap-sm', className)} {...attrs} {...props}>
      {children}
    </section>
  )
}
