import { buildCachePolicy } from '@/features/contracts'

import { COMMENTS_MODULE_KEY } from '../constants/comments.constants'

export const CommentsCachePolicy = buildCachePolicy({ entity: COMMENTS_MODULE_KEY })
