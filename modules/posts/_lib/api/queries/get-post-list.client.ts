import 'client-only'

import { type TPaginatedApiEnvelope } from '@/features/data-access'
import { ClientApi } from '@/features/data-access/client'

import { type TPostListRequestParams } from './posts-queries.types'
import { PostsEndpoints } from '../../contracts/posts-endpoints.contract'
import { type IPost } from '../../models/posts.models'

export async function getClientPostList(params?: TPostListRequestParams): Promise<TPaginatedApiEnvelope<IPost>> {
  return ClientApi.queries.list<IPost>({
    endpoints: PostsEndpoints,
    params,
  })
}
