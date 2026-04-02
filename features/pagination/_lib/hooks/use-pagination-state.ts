import { useState } from 'react'

import { type TPaginationState } from '../types/pagination.types'

export function usePaginationState({ isLoading }: { isLoading?: boolean } = {}): TPaginationState {
  const [isPending, setIsPending] = useState<boolean>(false)

  return {
    isLoading: isLoading ?? false,
    isPending,
    setIsPending,
  }
}
