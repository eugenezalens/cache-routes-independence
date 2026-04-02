import { ActionIconStyles } from '@/components/ui/action-icon'

import { cn } from '@/helpers'
import { SkeletonStyles } from '@/styles/compositions'

export type TPaginationSkeletonProps = {
  pageCount?: number
}

const skeletonItemSizeStyles = 'h-9 w-9'

export function PaginationSkeleton({ pageCount = 3 }: TPaginationSkeletonProps) {
  const normalizedPageCount = Math.max(1, pageCount)

  return (
    <nav aria-hidden="true" className={SkeletonStyles.pulse}>
      <ul className="flex items-center gap-xs">
        <li>
          <span className={cn(ActionIconStyles.base, SkeletonStyles.circle, skeletonItemSizeStyles)} />
        </li>

        {Array.from({ length: normalizedPageCount }, (_, index) => {
          const isActive = index === 1

          return (
            <li key={index}>
              <span
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-full',
                  isActive ? SkeletonStyles.active : SkeletonStyles.fill,
                )}
              />
            </li>
          )
        })}

        <li className={cn(ActionIconStyles.base, skeletonItemSizeStyles)}>
          <span className={cn('h-1.5 w-4 rounded-full', SkeletonStyles.fillSoft)} />
        </li>

        <li>
          <span className={cn(ActionIconStyles.base, SkeletonStyles.circle, skeletonItemSizeStyles)} />
        </li>
      </ul>
    </nav>
  )
}
