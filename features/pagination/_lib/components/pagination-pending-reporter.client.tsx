'use client'

import { useLinkStatus } from 'next/link'
import { useEffect } from 'react'

import { usePaginationContext } from '../context/use-pagination-context'

export function PaginationPendingReporter() {
  const { pending } = useLinkStatus()
  const { setIsPending } = usePaginationContext()

  useEffect(() => {
    setIsPending(pending)

    return () => {
      setIsPending(false)
    }
  }, [pending, setIsPending])

  return null
}
