import { type ComponentType, type ReactNode } from 'react'

import { Card, CardActions, CardHeader, CardTitle, type TCardVariant } from '@/components/compositions/card'
import { type TTitleLevel } from '@/components/ui/title'

import { cn } from '@/helpers'

import { type IPost } from '../../models/posts.models'
import { type TOpenPostDetailsActionProps } from '../open-post-details-action'
import { type TOpenPostEditingActionProps } from '../open-post-editing-action'

export type TPostCardProps = {
  titleLevel: TTitleLevel
  post: IPost
  children?: ReactNode
  cardVariant?: TCardVariant
  slots?: {
    openDetailsAction?: ComponentType<TOpenPostDetailsActionProps>
    openPostEditingAction?: ComponentType<TOpenPostEditingActionProps>
  }
  slotsProps?: {
    openDetailsAction?: Omit<TOpenPostDetailsActionProps, 'id'>
    openPostEditingAction?: Omit<TOpenPostEditingActionProps, 'id'>
  }
}

export function PostCard({ titleLevel, post, cardVariant, slots, slotsProps, children }: TPostCardProps) {
  const OpenDetailsAction = slots?.openDetailsAction
  const OpenPostEditingAction = slots?.openPostEditingAction

  return (
    <Card variant={cardVariant}>
      <CardHeader className={cn(slots && 'grid grid-cols-[minmax(0,1fr)_auto] items-center gap-md')}>
        <CardTitle level={titleLevel}>{post.title}</CardTitle>

        {slots && (
          <CardActions>
            {OpenDetailsAction && <OpenDetailsAction {...slotsProps?.openDetailsAction} id={post.id} />}
            {OpenPostEditingAction && <OpenPostEditingAction {...slotsProps?.openPostEditingAction} id={post.id} />}
          </CardActions>
        )}
      </CardHeader>

      {children}
    </Card>
  )
}
