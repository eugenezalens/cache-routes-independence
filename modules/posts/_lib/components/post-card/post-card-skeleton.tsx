import { Card, CardActions, CardBody, CardHeader, type TCardVariant } from '@/components/compositions/card'

import { cn } from '@/helpers'
import { SkeletonStyles } from '@/styles/compositions'

export type TPostCardSkeletonProps = {
  cardVariant?: TCardVariant
}

export function PostCardSkeleton({ cardVariant }: TPostCardSkeletonProps) {
  return (
    <Card variant={cardVariant} aria-hidden="true" className={SkeletonStyles.pulse}>
      <CardHeader className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-md">
        <div className={cn(SkeletonStyles.line, 'h-6 w-4/5')} />

        <CardActions>
          <div className={cn(SkeletonStyles.circle, 'size-9')} />
        </CardActions>
      </CardHeader>

      <CardBody className="flex h-full flex-col gap-sm">
        <div className={cn(SkeletonStyles.line, 'h-4 w-full')} />
        <div className={cn(SkeletonStyles.line, 'h-4 w-11/12')} />
        <div className={cn(SkeletonStyles.line, 'h-4 w-10/12')} />
        <div className={cn(SkeletonStyles.line, 'h-4 w-7/12')} />
      </CardBody>
    </Card>
  )
}
