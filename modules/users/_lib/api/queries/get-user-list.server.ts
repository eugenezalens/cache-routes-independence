import 'server-only'

import { type TPaginatedApiEnvelope, type TListQueryRequestParams } from '@/features/data-access'
import { ServerApi } from '@/features/data-access/server'

import { UsersCachePolicy } from '../../contracts/users-cache-policy.contract'
import { UsersEndpoints } from '../../contracts/users-endpoints.contract'
import { type IUser } from '../../models/users.models'

export async function getServerUserList(params?: TListQueryRequestParams): Promise<TPaginatedApiEnvelope<IUser>> {
  return ServerApi.queries.list<IUser>({
    endpoints: UsersEndpoints,
    cachePolicy: UsersCachePolicy,
    params,
  })
}
