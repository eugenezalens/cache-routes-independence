import 'client-only'

import { type TApiEnvelope } from '@/features/data-access'
import { ClientApi } from '@/features/data-access/client'

import { CommentsEndpoints } from '../../contracts/comments-endpoints.contract'
import { type IComment } from '../../models/comments.models'

export async function getClientComment(id: number): Promise<TApiEnvelope<IComment>> {
  return ClientApi.queries.byId<IComment>({
    endpoints: CommentsEndpoints,
    params: { id },
  })
}
