import 'server-only'

import { type TByIdQueryPerformServerRequest } from './by-id-query.types'
import { executeByIdQuery } from './execute-by-id-query.server'
import { type TApiEnvelope } from '../../types/data-access.types'

export async function performServerByIdQuery<TEntity = unknown>({
  endpoints,
  cachePolicy,
  params,
}: TByIdQueryPerformServerRequest): Promise<TApiEnvelope<TEntity>> {
  return executeByIdQuery<TEntity>({
    endpoints,
    cachePolicy,
    params,
  })
}
