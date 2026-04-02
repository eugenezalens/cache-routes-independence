import { Card, CardBody, CardFooter, CardHeader, type TCardVariant } from '@/components/compositions/card'

import { cn } from '@/helpers'
import { SkeletonStyles } from '@/styles/compositions'

export type TCommentCardSkeletonProps = {
  cardVariant?: TCardVariant
}

export function CommentCardSkeleton({ cardVariant }: TCommentCardSkeletonProps) {
  return (
    <Card variant={cardVariant} aria-hidden="true" className={SkeletonStyles.pulse}>
      <CardHeader>
        <div className={cn(SkeletonStyles.line, 'h-6 w-3/4')} />
      </CardHeader>

      <CardBody className="flex h-full flex-col gap-sm">
        <div className={cn(SkeletonStyles.line, 'h-4 w-full')} />
        <div className={cn(SkeletonStyles.line, 'h-4 w-11/12')} />
        <div className={cn(SkeletonStyles.line, 'h-4 w-8/12')} />
      </CardBody>

      <CardFooter className="flex items-center justify-center">
        <div className={cn(SkeletonStyles.line, 'h-4 w-32')} />
      </CardFooter>
    </Card>
  )
}
