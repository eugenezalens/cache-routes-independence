import { buildRoutes } from '@/features/contracts'

import { POSTS_MODULE_KEY } from '../constants/posts.constants'

export const PostsRoutes = buildRoutes({ pluralEntity: POSTS_MODULE_KEY, singularEntity: 'post' })
