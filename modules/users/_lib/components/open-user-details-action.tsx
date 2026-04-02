import { RightIcon } from '@/components/icons/right-icon'
import { ActionIconLink } from '@/components/ui/action-icon'

import { UsersRoutes } from '../contracts/users-routes.contract'

export type TOpenUserDetailsActionProps = {
  id: number
}

export function OpenUserDetailsAction({ id }: TOpenUserDetailsActionProps) {
  return (
    <ActionIconLink href={UsersRoutes.details({ params: { id } })} aria-label={'Open user details'}>
      <RightIcon />
    </ActionIconLink>
  )
}
