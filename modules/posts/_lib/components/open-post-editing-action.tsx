import { EditIcon } from '@/components/icons/edit-icon'
import { ActionIconLink } from '@/components/ui/action-icon'

import { PostsRoutes } from '../contracts/posts-routes.contract'

export type TOpenPostEditingActionProps = {
  id: number
}

export function OpenPostEditingAction({ id }: TOpenPostEditingActionProps) {
  return (
    <ActionIconLink href={PostsRoutes.edit({ params: { id } })} aria-label={'Open post editing'}>
      <EditIcon />
    </ActionIconLink>
  )
}
