'use client'
import { Suspense } from 'react'

import { type TPaginationMeta } from '@/features/data-access'
import { PaginationCallbackControl } from '@/features/pagination'
import { Pagination, PaginationNext, PaginationNumbers, PaginationPrev } from '@/features/pagination/client'

export type TPaginationCallbackBasedProps = {
  meta?: TPaginationMeta
  isLoading?: boolean
  onPageChange: (page: number) => void
}

export function PaginationCallbackBased({ meta, isLoading, onPageChange }: TPaginationCallbackBasedProps) {
  return (
    <Suspense>
      <Pagination meta={meta} isLoading={isLoading}>
        <PaginationPrev
          slots={{
            callbackControl: PaginationCallbackControl,
          }}
          slotsProps={{
            callbackControl: { onPageChange },
          }}
        />

        <PaginationNumbers
          slots={{
            callbackControl: PaginationCallbackControl,
          }}
          slotsProps={{
            callbackControl: { onPageChange },
          }}
        />

        <PaginationNext
          slots={{
            callbackControl: PaginationCallbackControl,
          }}
          slotsProps={{
            callbackControl: { onPageChange },
          }}
        />
      </Pagination>
    </Suspense>
  )
}
