'use client'

import { type ReactNode } from 'react'

import { type TPaginationMeta } from '@/features/data-access'

import { PaginationSkeleton } from './pagination-skeleton'
import { PaginationContext } from '../context/pagination.context'
import { usePagination } from '../hooks/use-pagination'
import { usePaginationState } from '../hooks/use-pagination-state'

export type TPaginationProps = {
  meta?: TPaginationMeta
  isLoading?: boolean
  children?: ReactNode
}

export function Pagination({ children, ...props }: TPaginationProps) {
  const state = usePaginationState({ isLoading: props.isLoading })
  const controller = usePagination({ meta: props.meta })

  if (!controller) {
    return <PaginationSkeleton />
  }

  return (
    <PaginationContext.Provider value={{ ...state, ...controller }}>
      <nav aria-label="Pagination">
        <ul className="flex items-center">{children}</ul>
      </nav>
    </PaginationContext.Provider>
  )
}
