import { type ReactNode, useId } from 'react'

import { SplitShell, SplitShellBody, SplitShellTitle } from '@/components/compositions/split-shell'

export function PostPageOverview({ children }: { children?: ReactNode }) {
  const id = useId()

  return (
    <SplitShell baseId={id}>
      <SplitShellTitle baseId={id} className="sr-only">
        Overview
      </SplitShellTitle>

      <SplitShellBody>{children}</SplitShellBody>
    </SplitShell>
  )
}
