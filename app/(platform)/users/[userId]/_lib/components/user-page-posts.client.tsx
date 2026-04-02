'use client'

import { useState } from 'react'

import { PaginationCallbackBased } from '@/components/compositions/pagination/client'
import { Button, ButtonLink } from '@/components/ui/button'

import { type TPaginationMeta } from '@/features/data-access'
import { type TOptional } from '@/types'

import { type IPost, OpenPostDetailsAction, PostCard, PostCardBody, PostCardText, PostsRoutes } from '@/modules/posts'
import { getClientPostList } from '@/modules/posts/client'

export function UserPagePosts({ userId }: { userId: number }) {
  const [postList, setPostList] = useState<IPost[]>([])
  const [paginationMeta, setPaginationMeta] = useState<TOptional<TPaginationMeta>>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const loadPostsPage = (page = 1): void => {
    setIsLoading(true)

    getClientPostList({ pagination: { page, limit: 8 }, otherParams: { userId } })
      .then(({ data, meta }) => {
        setPostList(data)
        setPaginationMeta(meta.pagination)
      })
      .finally(() => {
        setIsLoaded(true)
        setIsLoading(false)
      })
  }

  if (!isLoaded) {
    return (
      <div>
        <Button onClick={() => loadPostsPage()} type="button" aria-label="Load posts">
          Load posts
        </Button>
      </div>
    )
  }

  return (
    <section aria-labelledby="user-posts-title" className="flex flex-col gap-md">
      <header className="flex items-center justify-between">
        <h2 id="user-posts-title" className="text-xl font-semibold">
          Posts
        </h2>

        <ButtonLink href={PostsRoutes.create({ searchParams: { userId } })} aria-label="Go to create post">
          Create post
        </ButtonLink>
      </header>

      <ul className="grid grid-cols-1 gap-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {postList.map((post) => (
          <li key={post.id}>
            <PostCard titleLevel={3} post={post} slots={{ openDetailsAction: OpenPostDetailsAction }}>
              <PostCardBody>
                <PostCardText className="line-clamp-5">{post.body}</PostCardText>
              </PostCardBody>
            </PostCard>
          </li>
        ))}
      </ul>

      <footer className="flex justify-end">
        <PaginationCallbackBased meta={paginationMeta} isLoading={isLoading} onPageChange={loadPostsPage} />
      </footer>
    </section>
  )
}
