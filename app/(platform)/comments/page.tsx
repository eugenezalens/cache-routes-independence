import { PageShell, PageShellFooter, PageShellItemList, PageShellTitle } from '@/components/compositions/page-shell'
import { PaginationRoutingBased } from '@/components/compositions/pagination/client'

import { loadBrowsePageData } from '@/helpers/page-data-loaders/server'
import { type TServerPageProps } from '@/types'

import { CommentCard, CommentCardBody, CommentCardText } from '@/modules/comments'
import { getServerCommentList } from '@/modules/comments/server'

export default async function CommentsPage({ searchParams }: TServerPageProps) {
  const { data: commentList, meta } = await loadBrowsePageData(searchParams, getServerCommentList)

  return (
    <PageShell className="max-w-7xl">
      <PageShellTitle>Comments</PageShellTitle>

      <PageShellItemList>
        {commentList.map((comment) => (
          <li key={comment.id}>
            <CommentCard titleLevel={5} comment={comment}>
              <CommentCardBody>
                <CommentCardText className="line-clamp-6">{comment.body}</CommentCardText>
              </CommentCardBody>
            </CommentCard>
          </li>
        ))}
      </PageShellItemList>

      <PageShellFooter>
        <PaginationRoutingBased meta={meta.pagination} />
      </PageShellFooter>
    </PageShell>
  )
}
