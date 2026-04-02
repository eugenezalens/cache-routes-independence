import 'client-only'

import { type TPaginatedApiEnvelope, type TListQueryRequestParams } from '@/features/data-access'
import { ClientApi } from '@/features/data-access/client'

import { UsersEndpoints } from '../../contracts/users-endpoints.contract'
import { type IUser } from '../../models/users.models'

export async function getClientUserList(params?: TListQueryRequestParams): Promise<TPaginatedApiEnvelope<IUser>> {
  return ClientApi.queries.list<IUser>({
    endpoints: UsersEndpoints,
    params,
  })
}
