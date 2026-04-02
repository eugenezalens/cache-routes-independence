import { type ComponentPropsWithoutRef } from 'react'

import { CardBody } from '@/components/compositions/card'

import { cn } from '@/helpers'

export type TPostCardBodyProps = ComponentPropsWithoutRef<typeof CardBody>

export function PostCardBody({ className, children, ...props }: TPostCardBodyProps) {
  return (
    <CardBody className={cn('h-full', className)} {...props}>
      {children}
    </CardBody>
  )
}
