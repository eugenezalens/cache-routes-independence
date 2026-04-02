import { type ReactNode } from 'react'

import { PageShell, PageShellFooter, PageShellItemList } from '@/components/compositions/page-shell'

import { PaginationSkeleton } from '@/features/pagination'
import { cn } from '@/helpers'
import { SkeletonStyles } from '@/styles/compositions'

export function BrowsePageSkeleton({ children }: { children: ReactNode }) {
  return (
    <PageShell aria-hidden="true" className="max-w-7xl">
      <div className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'h-7 w-40')} />

      <PageShellItemList>{children}</PageShellItemList>

      <PageShellFooter>
        <PaginationSkeleton />
      </PageShellFooter>
    </PageShell>
  )
}
