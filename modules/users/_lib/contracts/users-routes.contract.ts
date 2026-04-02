import { buildRoutes } from '@/features/contracts'

import { USERS_MODULE_KEY } from '../constants/users.constants'

export const UsersRoutes = buildRoutes({ pluralEntity: USERS_MODULE_KEY, singularEntity: 'user' })
