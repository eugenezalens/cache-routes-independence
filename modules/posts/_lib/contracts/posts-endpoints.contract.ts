import { buildEndpoints } from '@/features/contracts'

import { POSTS_MODULE_KEY } from '../constants/posts.constants'

export const PostsEndpoints = buildEndpoints({ entity: POSTS_MODULE_KEY })
