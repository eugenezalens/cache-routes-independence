import 'server-only'

import { updateTag } from 'next/cache'

import { sendPutRequest } from '@/core/api/server'

import { type TUpdateMutationExecuteRequest } from './update-mutation.types'

export async function executeUpdateMutation<TEntity = unknown>({
  endpoints,
  cachePolicy,
  params,
  payload,
}: TUpdateMutationExecuteRequest): Promise<{
  data: TEntity
}> {
  const result = await sendPutRequest<TEntity>({
    path: endpoints.mutations.update.getPath(params.id),
    body: payload,
  })

  updateTag(cachePolicy.list.getBaseTag())
  updateTag(cachePolicy.byId.getBaseTag(params.id))

  return { data: result.data }
}
