import 'server-only'

import { type TApiEnvelope } from '@/features/data-access'
import { ServerApi } from '@/features/data-access/server'

import { UsersCachePolicy } from '../../contracts/users-cache-policy.contract'
import { UsersEndpoints } from '../../contracts/users-endpoints.contract'
import { type IUser } from '../../models/users.models'

export async function getServerUser(id: number): Promise<TApiEnvelope<IUser>> {
  return ServerApi.queries.byId<IUser>({
    endpoints: UsersEndpoints,
    cachePolicy: UsersCachePolicy,
    params: { id },
  })
}
