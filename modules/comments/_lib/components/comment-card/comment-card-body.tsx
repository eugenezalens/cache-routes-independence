import { type ComponentPropsWithoutRef } from 'react'

import { CardBody } from '@/components/compositions/card'

import { cn } from '@/helpers'

export type TCommentCardBodyProps = ComponentPropsWithoutRef<typeof CardBody>

export function CommentCardBody({ className, children, ...props }: TCommentCardBodyProps) {
  return (
    <CardBody className={cn('h-full', className)} {...props}>
      {children}
    </CardBody>
  )
}
