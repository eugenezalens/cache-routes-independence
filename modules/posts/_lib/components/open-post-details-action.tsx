import { RightIcon } from '@/components/icons/right-icon'
import { ActionIconLink } from '@/components/ui/action-icon'

import { PostsRoutes } from '../contracts/posts-routes.contract'

export type TOpenPostDetailsActionProps = {
  id: number
}

export function OpenPostDetailsAction({ id }: TOpenPostDetailsActionProps) {
  return (
    <ActionIconLink href={PostsRoutes.details({ params: { id } })} aria-label={'Open post details'}>
      <RightIcon />
    </ActionIconLink>
  )
}
