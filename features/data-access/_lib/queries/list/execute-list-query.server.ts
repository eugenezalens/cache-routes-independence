import 'server-only'

import { sendGetRequest } from '@/core/api/server'

import { ListQueryHelpers } from './list-query.helpers'
import { type TListQueryExecuteRequest } from './list-query.types'
import { type TPaginatedApiEnvelope } from '../../types/data-access.types'

export async function executeListQuery<TEntity = unknown>(
  config: TListQueryExecuteRequest,
): Promise<TPaginatedApiEnvelope<TEntity>> {
  const { endpoints, searchParams } = config

  const result = await sendGetRequest<TEntity[]>({
    path: endpoints.queries.list.getPath(),
    searchParams,
    cache: ListQueryHelpers.getCachePolicy(searchParams, config.cachePolicy),
  })

  return {
    data: result.data,
    meta: {
      pagination: ListQueryHelpers.buildPaginationMeta(searchParams, result.headers),
    },
  }
}
