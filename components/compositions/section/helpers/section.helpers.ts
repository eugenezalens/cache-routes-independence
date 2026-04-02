import { type ComponentPropsWithoutRef } from 'react'

import { type TTitleProps } from '@/components/ui/title'

import { createHeadingId } from '@/helpers'

function createSectionAttrs(baseId: string): Pick<ComponentPropsWithoutRef<'section'>, 'aria-labelledby'> {
  const id = createHeadingId(baseId)

  return {
    'aria-labelledby': id,
  }
}

function createTitleAttrs(baseId: string): Pick<TTitleProps, 'id'> {
  const id = createHeadingId(baseId)

  return {
    id,
  }
}

export const SectionHelpers = {
  section: {
    createAttrs: createSectionAttrs,
  },
  title: {
    createAttrs: createTitleAttrs,
  },
} as const
