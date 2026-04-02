import { UserCardSkeleton } from '@/modules/users'

import { BrowsePageSkeleton } from '../_lib'

export default function UsersPageLoading() {
  return (
    <BrowsePageSkeleton>
      {Array.from({ length: 8 }, (_, index) => (
        <li key={index}>
          <UserCardSkeleton />
        </li>
      ))}
    </BrowsePageSkeleton>
  )
}
