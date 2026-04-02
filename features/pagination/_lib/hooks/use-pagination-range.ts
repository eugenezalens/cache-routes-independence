'use client'

import { useMemo } from 'react'

import { PAGINATION_ELLIPSIS } from '../constants/pagination.constants'
import { type TPaginationEllipsisItem, type TPaginationItem, type TPaginationPageItem } from '../types/pagination.types'

// -----------------------------------------------------------------------------
// Constants & Types
// -----------------------------------------------------------------------------
const SIBLING_COUNT = 1

type TConfig = {
  currentPage?: number
  totalPages?: number
}

function createPage(pageNumber: number, currentPage: number): TPaginationPageItem {
  return {
    id: `page-${pageNumber}`,
    type: 'page',
    value: pageNumber,
    isActive: pageNumber === currentPage,
  }
}

function createEllipsis(position: 'left' | 'right'): TPaginationEllipsisItem {
  return {
    id: `ellipsis-${position}`,
    type: 'ellipsis',
    value: PAGINATION_ELLIPSIS,
    isActive: false,
  }
}

function createPageRange(start: number, end: number, currentPage: number): TPaginationItem[] {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => createPage(idx + start, currentPage))
}

export function usePaginationRange({ currentPage = 1, totalPages = 0 }: TConfig): TPaginationItem[] {
  return useMemo(() => {
    // Guard Clause: No pages exist
    if (totalPages <= 0) {
      return []
    }

    // -------------------------------------------------------------------------
    // Case 1: Few Pages (Show All)
    // -------------------------------------------------------------------------
    // Logic: If the total number of pages is less than the max items we want to show
    // (siblings + boundaries + dots), we just show everything.
    // e.g., [1, 2, 3, 4, 5]
    const totalPageNumbers = SIBLING_COUNT + 5

    if (totalPageNumbers >= totalPages) {
      return createPageRange(1, totalPages, currentPage)
    }

    // -------------------------------------------------------------------------
    // Calculate Boundaries
    // -------------------------------------------------------------------------
    const leftSiblingIndex = Math.max(currentPage - SIBLING_COUNT, 1)
    const rightSiblingIndex = Math.min(currentPage + SIBLING_COUNT, totalPages)

    // We show dots if there is more than one index gap between the sibling and the boundary
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2
    const firstPageItem = createPage(1, currentPage)
    const lastPageItem = createPage(totalPages, currentPage)

    // -------------------------------------------------------------------------
    // Case 2: Right Dots Only
    // -------------------------------------------------------------------------
    // Pattern: [1, 2, 3, 4, 5, ..., 100]
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * SIBLING_COUNT
      const leftRange = createPageRange(1, leftItemCount, currentPage)
      return [...leftRange, createEllipsis('right'), lastPageItem]
    }

    // -------------------------------------------------------------------------
    // Case 3: Left Dots Only
    // -------------------------------------------------------------------------
    // Pattern: [1, ..., 96, 97, 98, 99, 100]
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * SIBLING_COUNT
      const rightRange = createPageRange(totalPages - rightItemCount + 1, totalPages, currentPage)
      return [firstPageItem, createEllipsis('left'), ...rightRange]
    }

    // -------------------------------------------------------------------------
    // Case 4: Both Dots (Middle)
    // -------------------------------------------------------------------------
    // Pattern: [1, ..., 4, 5, 6, ..., 100]
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = createPageRange(leftSiblingIndex, rightSiblingIndex, currentPage)
      return [firstPageItem, createEllipsis('left'), ...middleRange, createEllipsis('right'), lastPageItem]
    }

    return []
  }, [totalPages, currentPage])
}
