import 'server-only'

import { UserPreviewCard } from './user-preview-card'
import { getServerUser } from '../../api/queries/get-user.server'
import { type IUser } from '../../models/users.models'

export async function UserPreviewCardFetcher({ userId }: { userId: number }) {
  let user: IUser | null = null

  try {
    const result = await getServerUser(userId)

    user = result.data
  } catch {
    return null
  }

  return <UserPreviewCard titleLevel={3} id={user.id} name={user.name} username={user.username} />
}
