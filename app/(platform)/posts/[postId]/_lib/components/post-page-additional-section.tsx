import { type ReactNode, useId } from 'react'

import {
  SplitShellSection,
  SplitShellSectionHeader,
  SplitShellSectionTitle,
} from '@/components/compositions/split-shell'

export function PostPageAdditionalSection({ children }: { children?: ReactNode }) {
  const id = useId()

  return (
    <SplitShellSection baseId={id}>
      <SplitShellSectionHeader>
        <SplitShellSectionTitle baseId={id} level={3}>
          Additional Information
        </SplitShellSectionTitle>
      </SplitShellSectionHeader>

      {children}
    </SplitShellSection>
  )
}
