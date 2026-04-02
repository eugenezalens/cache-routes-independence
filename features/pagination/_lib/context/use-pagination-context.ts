'use client'

import { useContext } from 'react'

import { PaginationContext } from './pagination.context'

export function usePaginationContext() {
  const context = useContext(PaginationContext)

  if (!context) {
    throw new Error('Pagination components must be used within <Pagination />')
  }

  return context
}
