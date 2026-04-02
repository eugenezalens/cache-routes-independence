import { PageShell, PageShellFooter, PageShellItemList, PageShellTitle } from '@/components/compositions/page-shell'
import { PaginationRoutingBased } from '@/components/compositions/pagination/client'

import { loadBrowsePageData } from '@/helpers/page-data-loaders/server'
import { type TServerPageProps } from '@/types'

import { PostCard, PostCardBody, OpenPostDetailsAction, PostCardText } from '@/modules/posts'
import { getServerPostList } from '@/modules/posts/server'

export default async function PostsPage({ searchParams }: TServerPageProps) {
  const { data: postList, meta } = await loadBrowsePageData(searchParams, getServerPostList)

  return (
    <PageShell className="max-w-7xl">
      <PageShellTitle>Posts</PageShellTitle>

      <PageShellItemList>
        {postList.map((post) => (
          <li key={post.id}>
            <PostCard titleLevel={2} post={post} slots={{ openDetailsAction: OpenPostDetailsAction }}>
              <PostCardBody>
                <PostCardText className="line-clamp-7">{post.body}</PostCardText>
              </PostCardBody>
            </PostCard>
          </li>
        ))}
      </PageShellItemList>

      <PageShellFooter>
        <PaginationRoutingBased meta={meta.pagination} />
      </PageShellFooter>
    </PageShell>
  )
}
