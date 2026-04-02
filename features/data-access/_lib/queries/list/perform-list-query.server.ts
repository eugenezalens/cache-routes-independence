import 'server-only'

import { executeListQuery } from './execute-list-query.server'
import { ListQueryHelpers } from './list-query.helpers'
import { type TListQueryPerformServerRequest } from './list-query.types'
import { type TPaginatedApiEnvelope } from '../../types/data-access.types'

export async function performServerListQuery<TEntity = unknown>({
  endpoints,
  cachePolicy,
  params,
}: TListQueryPerformServerRequest): Promise<TPaginatedApiEnvelope<TEntity>> {
  const searchParams = ListQueryHelpers.buildSp(params)

  return executeListQuery<TEntity>({
    endpoints,
    cachePolicy,
    searchParams,
  })
}
