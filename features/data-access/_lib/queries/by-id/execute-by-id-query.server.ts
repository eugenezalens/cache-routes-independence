import 'server-only'

import { sendGetRequest } from '@/core/api/server'

import { type TByIdQueryExecuteRequest } from './by-id-query.types'
import { type TApiEnvelope } from '../../types/data-access.types'

export async function executeByIdQuery<TEntity = unknown>({
  params,
  endpoints,
  cachePolicy,
}: TByIdQueryExecuteRequest): Promise<TApiEnvelope<TEntity>> {
  const result = await sendGetRequest<TEntity>({
    path: endpoints.queries.byId.getPath(params.id),
    cache: cachePolicy.byId.getCacheConfig(params.id),
  })

  return { data: result.data }
}
