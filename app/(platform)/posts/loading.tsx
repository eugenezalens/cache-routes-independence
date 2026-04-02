import { PostCardSkeleton } from '@/modules/posts'

import { BrowsePageSkeleton } from '../_lib'

export default function PostsPageLoading() {
  return (
    <BrowsePageSkeleton>
      {Array.from({ length: 8 }, (_, index) => (
        <li key={index}>
          <PostCardSkeleton />
        </li>
      ))}
    </BrowsePageSkeleton>
  )
}
