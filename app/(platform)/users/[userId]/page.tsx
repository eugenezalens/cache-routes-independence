import { PageShell, PageShellTitle } from '@/components/compositions/page-shell'

import { loadDetailsPageData } from '@/helpers/page-data-loaders/server'
import { type TServerPageProps } from '@/types'

import { getServerUser } from '@/modules/users/server'

import { UserPagePosts } from './_lib/client'
import { UserPageAdditionalSection, UserPageGeneralSection, UserPageOverview } from './_lib/shared'

export default async function UserPage({ params }: TServerPageProps<{ userId: string }>) {
  const { data: user } = await loadDetailsPageData(params, (params) => params.userId, getServerUser)

  return (
    <PageShell className="max-w-5xl">
      <PageShellTitle>{user.name}</PageShellTitle>

      <UserPageOverview>
        <UserPageGeneralSection user={user} />
        <UserPageAdditionalSection user={user} />
      </UserPageOverview>

      <UserPagePosts userId={user.id} />
    </PageShell>
  )
}
