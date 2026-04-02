import { CommentCardSkeleton } from '@/modules/comments'

import { BrowsePageSkeleton } from '../_lib'

export default function CommentsPageLoading() {
  return (
    <BrowsePageSkeleton>
      {Array.from({ length: 8 }, (_, index) => (
        <li key={index}>
          <CommentCardSkeleton />
        </li>
      ))}
    </BrowsePageSkeleton>
  )
}
