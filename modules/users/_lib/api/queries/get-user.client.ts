import 'client-only'

import { type TApiEnvelope } from '@/features/data-access'
import { ClientApi } from '@/features/data-access/client'

import { UsersEndpoints } from '../../contracts/users-endpoints.contract'
import { type IUser } from '../../models/users.models'

export async function getClientUser(id: number): Promise<TApiEnvelope<IUser>> {
  return ClientApi.queries.byId<IUser>({
    endpoints: UsersEndpoints,
    params: { id },
  })
}
