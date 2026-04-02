'use client'

import { useParams } from 'next/navigation'

export function usePostDetailsParams() {
  const params = useParams<{
    postId: string
  }>()

  const postId = Number(params.postId)

  return {
    postId: Number.isNaN(postId) ? undefined : postId,
  }
}
