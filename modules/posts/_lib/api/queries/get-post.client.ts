import 'client-only'

import { type TApiEnvelope } from '@/features/data-access'
import { ClientApi } from '@/features/data-access/client'

import { PostsEndpoints } from '../../contracts/posts-endpoints.contract'
import { type IPost } from '../../models/posts.models'

export async function getClientPost(id: number): Promise<TApiEnvelope<IPost>> {
  return ClientApi.queries.byId<IPost>({
    endpoints: PostsEndpoints,
    params: { id },
  })
}
