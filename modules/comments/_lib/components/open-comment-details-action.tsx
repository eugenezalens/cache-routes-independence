import { RightIcon } from '@/components/icons/right-icon'
import { ActionIconLink } from '@/components/ui/action-icon'

import { CommentsRoutes } from '../contracts/comments-routes.contract'

export type TOpenCommentDetailsActionProps = {
  id: number
}

export function OpenCommentDetailsAction({ id }: TOpenCommentDetailsActionProps) {
  return (
    <ActionIconLink href={CommentsRoutes.details({ params: { id } })} aria-label={'Open comment details'}>
      <RightIcon />
    </ActionIconLink>
  )
}
