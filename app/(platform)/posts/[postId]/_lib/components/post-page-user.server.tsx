import 'server-only'

import { type IUser, UserPreviewCard } from '@/modules/users'
import { getServerUser } from '@/modules/users/server'

export async function PostPageUser({ userId }: { userId: number }) {
  let user: IUser | null = null

  try {
    const result = await getServerUser(userId)

    user = result.data
  } catch {
    return null
  }

  return <UserPreviewCard titleLevel={3} id={user.id} name={user.name} username={user.username} />
}
