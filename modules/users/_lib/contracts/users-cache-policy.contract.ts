import { buildCachePolicy } from '@/features/contracts'

import { USERS_MODULE_KEY } from '../constants/users.constants'

export const UsersCachePolicy = buildCachePolicy({ entity: USERS_MODULE_KEY })
