import 'server-only'

import { type TApiEnvelope } from '@/features/data-access'
import { ServerApi } from '@/features/data-access/server'

import { CommentsCachePolicy } from '../../contracts/comments-cache-policy.contract'
import { CommentsEndpoints } from '../../contracts/comments-endpoints.contract'
import { type IComment } from '../../models/comments.models'

export async function getServerComment(id: number): Promise<TApiEnvelope<IComment>> {
  return ServerApi.queries.byId<IComment>({
    endpoints: CommentsEndpoints,
    cachePolicy: CommentsCachePolicy,
    params: { id },
  })
}
