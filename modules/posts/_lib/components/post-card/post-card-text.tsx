import { type ComponentPropsWithoutRef } from 'react'

import { Text } from '@/components/ui/text'

export type TPostCardTextProps = ComponentPropsWithoutRef<typeof Text>

export function PostCardText({ children, ...props }: TPostCardTextProps) {
  return <Text {...props}>{children}</Text>
}
