import 'client-only'

import { getClientOrigin } from '@/core/env/client'

import { type TByIdQueryPerformClientRequest } from './by-id-query.types'
import { type TApiEnvelope } from '../../types/data-access.types'

export async function performClientByIdQuery<TEntity = unknown>({
  endpoints,
  params,
}: TByIdQueryPerformClientRequest): Promise<TApiEnvelope<TEntity>> {
  const url = new URL(endpoints.queries.byId.getBff(params.id), getClientOrigin())

  const response = await fetch(url)

  if (!response.ok) {
    throw response
  }

  const data = await response.json()

  return data
}
