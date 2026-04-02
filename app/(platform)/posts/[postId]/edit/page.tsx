import { PageShell, PageShellTitle } from '@/components/compositions/page-shell'

import { loadDetailsPageData } from '@/helpers/page-data-loaders/server'
import { type TServerPageProps } from '@/types'

import { getServerPost } from '@/modules/posts/server'
import { UserPreviewCardServer } from '@/modules/users/server'

import { PostEditPageShell, PostEditPageUserSection } from './_lib'
import { PostEditPageForm } from './_lib/client'

export default async function PostEditPage({ params }: TServerPageProps<{ postId: string }>) {
  const { data: post } = await loadDetailsPageData(params, (params) => params.postId, getServerPost)

  return (
    <PageShell className="max-w-5xl">
      <PageShellTitle>Edit Post </PageShellTitle>

      <PostEditPageShell>
        <PostEditPageUserSection>
          <UserPreviewCardServer userId={post.userId} />
        </PostEditPageUserSection>

        <PostEditPageForm post={post} />
      </PostEditPageShell>
    </PageShell>
  )
}
