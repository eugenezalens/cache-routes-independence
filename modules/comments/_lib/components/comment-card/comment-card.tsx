import { type ComponentType, type ReactNode } from 'react'

import { Card, CardActions, CardFooter, CardHeader, CardTitle, type TCardVariant } from '@/components/compositions/card'
import { type TTitleLevel } from '@/components/ui/title'

import { cn } from '@/helpers'

import { type IComment } from '../../models/comments.models'
import { type TOpenCommentDetailsActionProps } from '../open-comment-details-action'

export type TCommentCardProps = {
  titleLevel: TTitleLevel
  comment: IComment
  cardVariant?: TCardVariant
  children?: ReactNode
  slots?: {
    openDetailsAction?: ComponentType<TOpenCommentDetailsActionProps>
  }
  slotsProps?: {
    openDetailsAction?: Omit<TOpenCommentDetailsActionProps, 'id'>
  }
}

export function CommentCard({ titleLevel, comment, cardVariant, slots, slotsProps, children }: TCommentCardProps) {
  const OpenDetailsAction = slots?.openDetailsAction

  return (
    <Card variant={cardVariant}>
      <CardHeader className={cn(slots && 'grid grid-cols-[minmax(0,1fr)_auto] items-center gap-md')}>
        <CardTitle level={titleLevel}>{comment.name}</CardTitle>

        {slots && (
          <CardActions>
            {OpenDetailsAction && <OpenDetailsAction {...slotsProps?.openDetailsAction} id={comment.id} />}
          </CardActions>
        )}
      </CardHeader>

      {children}

      <CardFooter className="flex items-center justify-center">
        <p className="text-sm text-content-secondary">{comment.email}</p>
      </CardFooter>
    </Card>
  )
}
