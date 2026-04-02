import { buildEndpoints } from '@/features/contracts'

import { COMMENTS_MODULE_KEY } from '../constants/comments.constants'

export const CommentsEndpoints = buildEndpoints({ entity: COMMENTS_MODULE_KEY })
