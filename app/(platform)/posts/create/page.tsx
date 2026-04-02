import { PageShell, PageShellTitle } from '@/components/compositions/page-shell'

import { type TServerPageProps } from '@/types'

import { UserPreviewCardServer } from '@/modules/users/server'

import { PostCreatePageFallback, PostCreatePageShell } from './_lib'
import { PostCreatePageForm } from './_lib/client'
import { parsePostCreatePageSp, PostCreatePageUserSection } from './_lib/server'

export default async function PostCreatePage({ searchParams }: TServerPageProps) {
  const { userId } = await parsePostCreatePageSp(searchParams)

  if (!userId) {
    return <PostCreatePageFallback />
  }

  return (
    <PageShell className="max-w-5xl">
      <PageShellTitle>Create Post </PageShellTitle>

      <PostCreatePageShell>
        <PostCreatePageUserSection>
          <UserPreviewCardServer userId={userId} />
        </PostCreatePageUserSection>

        <PostCreatePageForm userId={userId} />
      </PostCreatePageShell>
    </PageShell>
  )
}
