import 'client-only'

import { getClientOrigin } from '@/core/env/client'

import { ListQueryHelpers } from './list-query.helpers'
import { type TListQueryPerformClientRequest } from './list-query.types'
import { type TPaginatedApiEnvelope } from '../../types/data-access.types'

export async function performClientListQuery<TEntity = unknown>({
  endpoints,
  params,
}: TListQueryPerformClientRequest): Promise<TPaginatedApiEnvelope<TEntity>> {
  const searchParams = ListQueryHelpers.buildSp(params)

  const url = new URL(endpoints.queries.list.getBff(), getClientOrigin())
  url.search = searchParams.toString()

  const response = await fetch(url)

  if (!response.ok) {
    throw response
  }

  const data = await response.json()

  return data
}
