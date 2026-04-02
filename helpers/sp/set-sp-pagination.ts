import { type TPaginationParams } from '@/types'

export function setSpPagination(searchParams: URLSearchParams, pagination: TPaginationParams): void {
  searchParams.set('_page', String(pagination.page))
  searchParams.set('_limit', String(pagination.limit))
}
