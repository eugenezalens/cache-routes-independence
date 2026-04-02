import { buildCachePolicy } from '@/features/contracts'

import { POSTS_MODULE_KEY } from '../constants/posts.constants'

export const PostsCachePolicy = buildCachePolicy({ entity: POSTS_MODULE_KEY })
