import { EditIcon } from '@/components/icons/edit-icon'
import { ActionIconLink } from '@/components/ui/action-icon'

import { UsersRoutes } from '../contracts/users-routes.contract'

export type TOpenUserEditingActionProps = {
  id: number
}

export function OpenUserEditingAction({ id }: TOpenUserEditingActionProps) {
  return (
    <ActionIconLink href={UsersRoutes.edit({ params: { id } })} aria-label={'Open user editing'}>
      <EditIcon />
    </ActionIconLink>
  )
}
