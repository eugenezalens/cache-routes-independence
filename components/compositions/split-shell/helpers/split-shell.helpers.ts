import { type ComponentPropsWithoutRef } from 'react'

import { type TTitleProps } from '@/components/ui/title'

import { createHeadingId } from '@/helpers'

function createSectionAttrs(baseId: string): Pick<ComponentPropsWithoutRef<'section'>, 'aria-labelledby'> {
  const id = createHeadingId(baseId)

  return {
    'aria-labelledby': id,
  }
}

function createHeadingAttrs(baseId: string): Pick<TTitleProps, 'id'> {
  const id = createHeadingId(baseId)

  return {
    id,
  }
}

export const SplitShellHelpers = {
  root: {
    createAttrs: createSectionAttrs,
  },
  title: {
    createAttrs: createHeadingAttrs,
  },
  section: {
    createAttrs: createSectionAttrs,
  },
  sectionTitle: {
    createAttrs: createHeadingAttrs,
  },
} as const
