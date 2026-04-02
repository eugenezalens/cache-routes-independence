import { buildEndpoints } from '@/features/contracts'

import { USERS_MODULE_KEY } from '../constants/users.constants'

export const UsersEndpoints = buildEndpoints({ entity: USERS_MODULE_KEY })
