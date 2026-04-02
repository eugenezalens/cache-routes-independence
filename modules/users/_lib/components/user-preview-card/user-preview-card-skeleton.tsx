import { cn } from '@/helpers'
import { SkeletonStyles, SurfaceStyles } from '@/styles/compositions'

export function UserPreviewCardSkeleton() {
  return (
    <article
      aria-hidden="true"
      className={cn(
        SurfaceStyles.raised,
        SkeletonStyles.pulse,
        'grid grid-cols-[1fr_minmax(0,4fr)_1fr] items-center gap-md',
      )}
    >
      <div className={cn(SkeletonStyles.circle, 'size-12 justify-self-start')} />

      <div className="flex min-w-0 flex-col gap-xs">
        <div className="border-b border-divider pb-xs">
          <div className={cn(SkeletonStyles.line, 'mx-auto h-7 w-2/3')} />
        </div>

        <div className={cn(SkeletonStyles.line, 'mx-auto h-6 w-3/4')} />
      </div>

      <div className={cn(SkeletonStyles.circle, 'size-10 justify-self-end')} />
    </article>
  )
}
