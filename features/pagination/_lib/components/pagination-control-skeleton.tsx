import { cn } from '@/helpers'
import { SkeletonStyles } from '@/styles/compositions'

export function PaginationControlSkeleton({ isActive }: { isActive?: boolean }) {
  return (
    <span
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-full',
        SkeletonStyles.pulse,
        isActive ? SkeletonStyles.active : SkeletonStyles.fill,
      )}
    />
  )
}
