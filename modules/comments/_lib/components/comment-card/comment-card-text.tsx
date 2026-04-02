import { type ComponentPropsWithoutRef } from 'react'

import { Text } from '@/components/ui/text'

export type TCommentCardTextProps = ComponentPropsWithoutRef<typeof Text>

export function CommentCardText({ children, ...props }: TCommentCardTextProps) {
  return <Text {...props}>{children}</Text>
}
