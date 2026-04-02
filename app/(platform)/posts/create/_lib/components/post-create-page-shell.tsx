import { type ReactNode, useId } from 'react'

import { SplitShell, SplitShellTitle, SplitShellBody } from '@/components/compositions/split-shell'

export function PostCreatePageShell({ children }: { children?: ReactNode }) {
  const id = useId()

  return (
    <SplitShell baseId={id}>
      <SplitShellTitle baseId={id} className="sr-only">
        Create post area
      </SplitShellTitle>

      <SplitShellBody>{children}</SplitShellBody>
    </SplitShell>
  )
}
