import 'server-only'

import { type TPaginatedApiEnvelope } from '@/features/data-access'
import { ServerApi } from '@/features/data-access/server'

import { type TCommentListRequestParams } from './comments-queries.types'
import { CommentsCachePolicy } from '../../contracts/comments-cache-policy.contract'
import { CommentsEndpoints } from '../../contracts/comments-endpoints.contract'
import { type IComment } from '../../models/comments.models'

export async function getServerCommentList(
  params?: TCommentListRequestParams,
): Promise<TPaginatedApiEnvelope<IComment>> {
  return ServerApi.queries.list<IComment>({
    endpoints: CommentsEndpoints,
    cachePolicy: CommentsCachePolicy,
    params,
  })
}
