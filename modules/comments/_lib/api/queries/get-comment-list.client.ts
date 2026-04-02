import 'client-only'

import { type TPaginatedApiEnvelope } from '@/features/data-access'
import { ClientApi } from '@/features/data-access/client'

import { type TCommentListRequestParams } from './comments-queries.types'
import { CommentsEndpoints } from '../../contracts/comments-endpoints.contract'
import { type IComment } from '../../models/comments.models'

export async function getClientCommentList(
  params?: TCommentListRequestParams,
): Promise<TPaginatedApiEnvelope<IComment>> {
  return ClientApi.queries.list<IComment>({
    endpoints: CommentsEndpoints,
    params,
  })
}
