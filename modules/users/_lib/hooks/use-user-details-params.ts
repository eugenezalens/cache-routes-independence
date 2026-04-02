'use client'

import { useParams } from 'next/navigation'

export function useUserDetailsParams() {
  const params = useParams<{
    userId: string
  }>()

  const userId = Number(params.userId)

  return {
    userId: Number.isNaN(userId) ? undefined : userId,
  }
}
