'use client'

import { Suspense } from 'react'

import { type TPaginationMeta } from '@/features/data-access'
import { PaginationRoutingControl } from '@/features/pagination'
import { Pagination, PaginationNext, PaginationNumbers, PaginationPrev } from '@/features/pagination/client'

export type TPaginationRoutingBasedProps = {
  meta?: TPaginationMeta
}
export function PaginationRoutingBased({ meta }: TPaginationRoutingBasedProps) {
  return (
    <Suspense>
      <Pagination meta={meta}>
        <PaginationPrev slots={{ routingControl: PaginationRoutingControl }} />
        <PaginationNumbers slots={{ routingControl: PaginationRoutingControl }} />
        <PaginationNext slots={{ routingControl: PaginationRoutingControl }} />
      </Pagination>
    </Suspense>
  )
}
