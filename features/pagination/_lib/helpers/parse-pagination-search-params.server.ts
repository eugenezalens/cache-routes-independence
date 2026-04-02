import 'server-only'

import { type TPaginationParams, type TOptional, type TServerPageSearchParams } from '@/types'

import { type TSearchParamsPagination } from '../types/pagination.types'

export async function parsePaginationSearchParams(
  searchParamsPromise: TServerPageSearchParams<TSearchParamsPagination>,
): Promise<TOptional<TPaginationParams>> {
  const searchParams = await searchParamsPromise

  const page = Number(searchParams?.page)
  const limit = Number(searchParams?.limit)

  if (Number.isNaN(page) || Number.isNaN(limit)) {
    return
  }

  return {
    page,
    limit,
  }
}
