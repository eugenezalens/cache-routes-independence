import 'server-only'

import { type ReactNode, useId } from 'react'

import { SplitShellSection, SplitShellSectionTitle } from '@/components/compositions/split-shell'

export function PostCreatePageUserSection({ children }: { children?: ReactNode }) {
  const id = useId()

  return (
    <SplitShellSection baseId={id} className="h-full">
      <SplitShellSectionTitle baseId={id} level={3} className="sr-only">
        User details
      </SplitShellSectionTitle>

      {children}
    </SplitShellSection>
  )
}
