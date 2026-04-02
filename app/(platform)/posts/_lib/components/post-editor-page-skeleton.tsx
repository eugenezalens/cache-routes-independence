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
  SplitShellSectionTitle,
  SplitShellTitle,
} from '@/components/compositions/split-shell'

import { cn } from '@/helpers'
import { SkeletonStyles, SurfaceStyles } from '@/styles/compositions'

import { UserPreviewCardSkeleton } from '@/modules/users'

export type TPostEditorPageSkeletonProps = {
  baseId: string
  titleWidthClassName?: string
}

export function PostEditorPageSkeleton({ baseId, titleWidthClassName = 'w-48' }: TPostEditorPageSkeletonProps) {
  return (
    <PageShell aria-hidden="true" className="max-w-5xl">
      <PageShellTitle>
        <span className={cn(SkeletonStyles.line, SkeletonStyles.pulse, 'block h-9 max-w-full', titleWidthClassName)} />
      </PageShellTitle>

      <SplitShell baseId={baseId}>
        <SplitShellTitle baseId={baseId} className="sr-only">
          Post editor area
        </SplitShellTitle>

        <SplitShellBody>
          <SplitShellSection baseId={`${baseId}-user`} className="h-full">
            <SplitShellSectionTitle baseId={`${baseId}-user`} level={3} className="sr-only">
              User details
            </SplitShellSectionTitle>

            <UserPreviewCardSkeleton />
          </SplitShellSection>

          <FormSkeleton baseId={`${baseId}-form`} />
        </SplitShellBody>
      </SplitShell>
    </PageShell>
  )
}

function FormSkeleton({ baseId }: { baseId: string }) {
  return (
    <Section baseId={baseId}>
      <SectionHeader>
        <SectionTitle baseId={baseId} level={2}>
          Form
        </SectionTitle>
      </SectionHeader>

      <SectionBody>
        <SectionContent className="p-xl">
          <div className={cn(SurfaceStyles.raised, SkeletonStyles.pulse, 'flex flex-col gap-md rounded-lg')}>
            <FieldSkeleton labelWidthClassName="w-12" inputHeightClassName="h-10" />
            <FieldSkeleton labelWidthClassName="w-10" inputHeightClassName="h-36" hasDivider={false} />
          </div>
        </SectionContent>
      </SectionBody>

      <SectionFooter className="flex justify-end">
        <div className={cn(SkeletonStyles.circle, SkeletonStyles.pulse, 'h-10 w-24')} />
      </SectionFooter>
    </Section>
  )
}

function FieldSkeleton({
  hasDivider = true,
  inputHeightClassName,
  labelWidthClassName,
}: {
  hasDivider?: boolean
  inputHeightClassName: string
  labelWidthClassName: string
}) {
  return (
    <div className={cn('flex flex-col gap-sm', hasDivider && 'border-b border-divider pb-md')}>
      <div className={cn(SkeletonStyles.line, 'h-4', labelWidthClassName)} />
      <div
        className={cn('w-full rounded-md border border-divider-subtle', SkeletonStyles.fill, inputHeightClassName)}
      />
    </div>
  )
}
