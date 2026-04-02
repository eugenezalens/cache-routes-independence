import 'server-only'

import { Suspense } from 'react'

import { UserPreviewCardFetcher } from './user-preview-card-fetcher.server'
import { UserPreviewCardSkeleton } from './user-preview-card-skeleton'

export type TUserPreviewCardServerProps = {
  userId: number
}

export function UserPreviewCardServer({ userId }: TUserPreviewCardServerProps) {
  return (
    <Suspense fallback={<UserPreviewCardSkeleton />}>
      <UserPreviewCardFetcher userId={userId} />
    </Suspense>
  )
}
