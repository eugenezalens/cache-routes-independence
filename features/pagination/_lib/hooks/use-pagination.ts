'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { type TPaginationMeta } from '@/features/data-access'
import { type TOptional } from '@/types'

import { usePaginationRange } from './use-pagination-range'
import { type TPaginationController } from '../types/pagination.types'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
type TConfig = {
  meta?: TPaginationMeta
}

export function usePagination({ meta }: TConfig): TOptional<TPaginationController> {
  // Navigation Context
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // ---------------------------------------------------------------------------
  // 1. Core Pagination Range (Math)
  // ---------------------------------------------------------------------------
  const { page: currentPage, totalPages } = meta || {}
  const paginationRange = usePaginationRange({ currentPage, totalPages })

  // Guard Clause: No metadata, no controller
  if (!meta) {
    return
  }

  // ---------------------------------------------------------------------------
  // 2. URL Factory (Immutability & State Preservation)
  // ---------------------------------------------------------------------------
  // Creates a stable URL for a given page while preserving existing query params.
  const createPageUrl = (pageNumber: number): string => {
    const params = new URLSearchParams(searchParams.toString())
    // Keep pagination params explicit and synchronized with server expectations
    params.set('page', pageNumber.toString())
    params.set('limit', meta.limit.toString())

    return `${pathname}?${params.toString()}`
  }

  // ---------------------------------------------------------------------------
  // 3. Controller API (UI-facing contract)
  // ---------------------------------------------------------------------------
  return {
    currentPage: meta.page,
    hasPrevPage: meta.hasPrevPage,
    hasNextPage: meta.hasNextPage,
    paginationRange,
    createPageUrl,
  }
}
