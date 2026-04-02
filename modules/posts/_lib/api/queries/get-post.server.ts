import 'server-only'

import { type TApiEnvelope } from '@/features/data-access'
import { ServerApi } from '@/features/data-access/server'

import { PostsCachePolicy } from '../../contracts/posts-cache-policy.contract'
import { PostsEndpoints } from '../../contracts/posts-endpoints.contract'
import { type IPost } from '../../models/posts.models'

export async function getServerPost(id: number): Promise<TApiEnvelope<IPost>> {
  return ServerApi.queries.byId<IPost>({
    endpoints: PostsEndpoints,
    cachePolicy: PostsCachePolicy,
    params: { id },
  })
}
