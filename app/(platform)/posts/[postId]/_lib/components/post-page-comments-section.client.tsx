'use client'

import { useEffect, useId, useState } from 'react'

import { PaginationCallbackBased } from '@/components/compositions/pagination/client'
import {
  Section,
  SectionBody,
  SectionContent,
  SectionFooter,
  SectionHeader,
  SectionTitle,
} from '@/components/compositions/section'

import { type TPaginationMeta } from '@/features/data-access'
import { type TOptional } from '@/types'

import { CommentCard, CommentCardBody, CommentCardSkeleton, CommentCardText, type IComment } from '@/modules/comments'
import { getClientCommentList } from '@/modules/comments/client'

export function PostPageCommentsSection({ postId }: { postId: number }) {
  const id = useId()

  const [commentList, setCommentList] = useState<IComment[]>([])
  const [paginationMeta, setPaginationMeta] = useState<TOptional<TPaginationMeta>>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const loadCommentsPage = (page = 1): void => {
    setIsLoading(true)

    getClientCommentList({ pagination: { page, limit: 2 }, otherParams: { postId } })
      .then(({ data, meta }) => {
        setCommentList(data)
        setPaginationMeta(meta.pagination)
      })
      .finally(() => {
        setIsLoading(false)
        setIsLoaded(true)
      })
  }

  useEffect(() => {
    loadCommentsPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Section baseId={id} className="h-full">
      <SectionHeader>
        <SectionTitle baseId={id} level={4}>
          Comments
        </SectionTitle>
      </SectionHeader>

      <SectionBody>
        <SectionContent className="p-lg">
          <ul className="grid grid-cols-1 gap-md sm:grid-cols-2">
            {!isLoaded ? (
              <CommentsSkeleton />
            ) : (
              commentList.map((comment) => (
                <li key={comment.id}>
                  <CommentCard titleLevel={5} comment={comment} cardVariant="nested">
                    <CommentCardBody>
                      <CommentCardText className="line-clamp-5">{comment.body}</CommentCardText>
                    </CommentCardBody>
                  </CommentCard>
                </li>
              ))
            )}
          </ul>
        </SectionContent>
      </SectionBody>

      <SectionFooter className="flex h-full items-center justify-end">
        <PaginationCallbackBased meta={paginationMeta} isLoading={isLoading} onPageChange={loadCommentsPage} />
      </SectionFooter>
    </Section>
  )
}

function CommentsSkeleton() {
  return (
    <>
      <li>
        <CommentCardSkeleton cardVariant="nested" />
      </li>
      <li>
        <CommentCardSkeleton cardVariant="nested" />
      </li>
    </>
  )
}
