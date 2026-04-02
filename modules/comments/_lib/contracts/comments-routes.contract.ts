import { buildRoutes } from '@/features/contracts'

import { COMMENTS_MODULE_KEY } from '../constants/comments.constants'

export const CommentsRoutes = buildRoutes({ pluralEntity: COMMENTS_MODULE_KEY, singularEntity: 'comments' })
