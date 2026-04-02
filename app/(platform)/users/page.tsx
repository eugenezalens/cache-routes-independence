import { PageShell, PageShellFooter, PageShellItemList, PageShellTitle } from '@/components/compositions/page-shell'
import { PaginationRoutingBased } from '@/components/compositions/pagination/client'

import { loadBrowsePageData } from '@/helpers/page-data-loaders/server'
import { type TServerPageProps } from '@/types'

import { OpenUserDetailsAction, UserCard } from '@/modules/users'
import { getServerUserList } from '@/modules/users/server'

export default async function UsersPage({ searchParams }: TServerPageProps) {
  const { data: userList, meta } = await loadBrowsePageData(searchParams, getServerUserList)

  return (
    <PageShell className="max-w-7xl">
      <PageShellTitle>Users</PageShellTitle>

      <PageShellItemList>
        {userList.map((user) => (
          <li key={user.id}>
            <UserCard titleLevel={2} user={user} slots={{ openDetailsAction: OpenUserDetailsAction }} />
          </li>
        ))}
      </PageShellItemList>

      <PageShellFooter>
        <PaginationRoutingBased meta={meta.pagination} />
      </PageShellFooter>
    </PageShell>
  )
}
