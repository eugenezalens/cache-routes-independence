import { PageShell, PageShellFooter, PageShellItemList, PageShellTitle } from '@/components/compositions/page-shell'
import { Section, SectionBody, SectionContent, SectionHeader } from '@/components/compositions/section'
import {
  SplitShell,
  SplitShellBody,
  SplitShellSection,
  SplitShellSectionHeader,
  SplitShellTitle,
} from '@/components/compositions/split-shell'

import { PaginationSkeleton } from '@/features/pagination'
import { cn } from '@/helpers'
import { SkeletonStyles, SurfaceStyles } from '@/styles/compositions'

import { PostCardSkeleton } from '@/modules/posts'
import { UserCardSkeleton } from '@/modules/users'

export default function UserPageLoading() {
  return (
    <PageShell aria-hidden="true" className="max-w-5xl">
      <PageShellTitle>
        <span className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'block h-9 w-56 max-w-full')} />
      </PageShellTitle>

      <SplitShell baseId="user-page-skeleton-overview">
        <SplitShellTitle baseId="user-page-skeleton-overview" className="sr-only">
          Overview
        </SplitShellTitle>

        <SplitShellBody>
          <SplitShellSection baseId="user-page-skeleton-general" className="h-full">
            <div className="flex-1">
              <UserCardSkeleton />
            </div>

            <div className={cn(SurfaceStyles.raised, 'flex flex-2 items-center justify-center')}>
              <div className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'h-5 w-40')} />
            </div>
          </SplitShellSection>

          <SplitShellSection baseId="user-page-skeleton-additional" className="h-full">
            <SplitShellSectionHeader>
              <div className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'h-8 w-52')} />
            </SplitShellSectionHeader>

            <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
              <InfoSectionSkeleton baseId="user-page-skeleton-address" titleWidthClassName="w-24" itemCount={4} />
              <InfoSectionSkeleton baseId="user-page-skeleton-company" titleWidthClassName="w-28" itemCount={3} />
            </div>
          </SplitShellSection>
        </SplitShellBody>
      </SplitShell>

      <section aria-labelledby="user-page-skeleton-posts-title" className="flex flex-col gap-md">
        <header className="flex items-center justify-between gap-md">
          <div
            id="user-page-skeleton-posts-title"
            className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'h-8 w-24')}
          />
          <div className={cn(SkeletonStyles.circle, SkeletonStyles.pulse, 'h-10 w-28')} />
        </header>

        <PageShellItemList>
          {Array.from({ length: 4 }, (_, index) => (
            <li key={index}>
              <PostCardSkeleton />
            </li>
          ))}
        </PageShellItemList>

        <PageShellFooter>
          <PaginationSkeleton pageCount={3} />
        </PageShellFooter>
      </section>
    </PageShell>
  )
}

function InfoSectionSkeleton({
  baseId,
  itemCount,
  titleWidthClassName,
}: {
  baseId: string
  itemCount: number
  titleWidthClassName: string
}) {
  return (
    <Section baseId={baseId}>
      <SectionHeader>
        <div className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'h-7', titleWidthClassName)} />
      </SectionHeader>

      <SectionBody variant="capped" className="h-full">
        <SectionContent className="h-full">
          <div className="flex h-full flex-col gap-sm">
            {Array.from({ length: itemCount }, (_, index) => {
              const hasDivider = index < itemCount - 1

              return (
                <div key={index} className={cn('flex flex-col gap-xs', hasDivider && 'border-b border-divider pb-sm')}>
                  <div className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'h-3 w-20')} />
                  <div
                    className={cn(
                      SkeletonStyles.line,
                      SkeletonStyles.pulse,
                      index % 2 === 0 ? 'h-4 w-4/5' : 'h-4 w-3/5',
                    )}
                  />
                </div>
              )
            })}
          </div>
        </SectionContent>
      </SectionBody>
    </Section>
  )
}
