import { PageShell, PageShellTitle } from '@/components/compositions/page-shell'
import {
  Section,
  SectionBody,
  SectionContent,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from '@/components/compositions/section'
import {
  SplitShell,
  SplitShellBody,
  SplitShellSection,
  SplitShellSectionHeader,
  SplitShellSectionTitle,
  SplitShellTitle,
} from '@/components/compositions/split-shell'

import { PaginationSkeleton } from '@/features/pagination'
import { cn } from '@/helpers'
import { SkeletonStyles } from '@/styles/compositions'

import { CommentCardSkeleton } from '@/modules/comments'
import { PostCardSkeleton } from '@/modules/posts'
import { UserPreviewCardSkeleton } from '@/modules/users'

export default function PostPageLoading() {
  return (
    <PageShell aria-hidden="true" className="max-w-5xl">
      <PageShellTitle>
        <span className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'block h-9 w-3/4 max-w-xl')} />
      </PageShellTitle>

      <SplitShell baseId="post-page-skeleton-overview">
        <SplitShellTitle baseId="post-page-skeleton-overview" className="sr-only">
          Overview
        </SplitShellTitle>

        <SplitShellBody>
          <SplitShellSection baseId="post-page-skeleton-general">
            <SplitShellSectionTitle baseId="post-page-skeleton-general" level={3} className="sr-only">
              General Information
            </SplitShellSectionTitle>

            <PostCardSkeleton />
            <UserPreviewCardSkeleton />
          </SplitShellSection>

          <SplitShellSection baseId="post-page-skeleton-additional">
            <SplitShellSectionHeader>
              <SplitShellSectionTitle baseId="post-page-skeleton-additional" level={3}>
                Additional Information
              </SplitShellSectionTitle>
            </SplitShellSectionHeader>

            <Section baseId="post-page-skeleton-comments" className="h-full">
              <SectionHeader>
                <SectionTitle baseId="post-page-skeleton-comments" level={4}>
                  Comments
                </SectionTitle>
              </SectionHeader>

              <SectionBody>
                <SectionContent className="p-lg">
                  <ul className="grid grid-cols-1 gap-md sm:grid-cols-2">
                    {Array.from({ length: 2 }, (_, index) => (
                      <li key={index}>
                        <CommentCardSkeleton cardVariant="nested" />
                      </li>
                    ))}
                  </ul>
                </SectionContent>
              </SectionBody>

              <SectionFooter className="flex h-full items-center justify-end">
                <PaginationSkeleton pageCount={2} />
              </SectionFooter>
            </Section>
          </SplitShellSection>
        </SplitShellBody>
      </SplitShell>
    </PageShell>
  )
}
