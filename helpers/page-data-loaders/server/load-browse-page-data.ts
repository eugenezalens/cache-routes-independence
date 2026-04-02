import 'server-only'

import { notFound } from 'next/navigation'

import { HttpErrors } from '@/core/http-errors'
import { type TListQueryRequestParams, type TPaginatedApiEnvelope } from '@/features/data-access'
import { parsePaginationSearchParams } from '@/features/pagination/server'
import { type TPaginationParams, type TServerPageSearchParams } from '@/types'

export async function loadBrowsePageData<TEntity = unknown>(
  searchParamsPromise: TServerPageSearchParams,
  getDataList: (params: TListQueryRequestParams) => Promise<TPaginatedApiEnvelope<TEntity>>,
  defaultPagination: TPaginationParams = { limit: 8, page: 1 },
): Promise<TPaginatedApiEnvelope<TEntity>> {
  try {
    const paginationParams = await parsePaginationSearchParams(searchParamsPromise)

    return await getDataList({ pagination: paginationParams ?? defaultPagination })
  } catch (error) {
    if (error instanceof HttpErrors.NotFound) {
      notFound()
    }

    throw error
  }
}
