import 'server-only'
import { updateTag } from 'next/cache'

import { sendPostRequest } from '@/core/api/server'

import { type TCreateMutationExecuteRequest } from './create-mutation.types'

export async function executeCreateMutation<TEntity = unknown>({
  endpoints,
  cachePolicy,
  payload,
}: TCreateMutationExecuteRequest): Promise<{
  data: TEntity
}> {
  const result = await sendPostRequest<TEntity>({
    path: endpoints.mutations.create.getPath(),
    body: payload,
  })

  updateTag(cachePolicy.list.getBaseTag())

  return { data: result.data }
}
