import { Card, CardActions, CardBody, CardHeader } from '@/components/compositions/card'

import { cn } from '@/helpers'
import { SkeletonStyles } from '@/styles/compositions'

export function UserCardSkeleton() {
  return (
    <Card aria-hidden="true" className={SkeletonStyles.pulse}>
      <CardHeader>
        <div className="grid grid-cols-[1fr_minmax(0,4fr)_1fr] items-center gap-md">
          <div className={cn(SkeletonStyles.circle, 'size-12 justify-self-start')} />

          <div className="flex min-w-0 flex-col gap-xs">
            <div className="border-b border-divider pb-xs">
              <div className={cn(SkeletonStyles.line, 'mx-auto h-7 w-2/3')} />
            </div>

            <div className={cn(SkeletonStyles.line, 'mx-auto h-6 w-3/4')} />
          </div>

          <CardActions className="justify-self-end">
            <div className={cn(SkeletonStyles.circle, 'size-9')} />
          </CardActions>
        </div>
      </CardHeader>

      <CardBody className="flex h-full flex-col gap-sm">
        <div className="flex flex-col gap-xs border-b border-divider pb-sm">
          <div className={cn(SkeletonStyles.line, 'h-3 w-16')} />
          <div className={cn(SkeletonStyles.line, 'h-4 w-4/5')} />
        </div>

        <div className="flex flex-col gap-xs border-b border-divider pb-sm">
          <div className={cn(SkeletonStyles.line, 'h-3 w-16')} />
          <div className={cn(SkeletonStyles.line, 'h-4 w-3/4')} />
        </div>

        <div className="flex flex-col gap-xs">
          <div className={cn(SkeletonStyles.line, 'h-3 w-20')} />
          <div className={cn(SkeletonStyles.line, 'h-4 w-2/3')} />
        </div>
      </CardBody>
    </Card>
  )
}
