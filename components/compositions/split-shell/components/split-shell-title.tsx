import { Title, type TTitleProps } from '@/components/ui/title'

import { SplitShellHelpers } from '../helpers/split-shell.helpers'

export type TSplitShellTitleProps = {
  baseId: string
} & TTitleProps

export function SplitShellTitle({ baseId, children, level = 2, ...props }: TSplitShellTitleProps) {
  const attrs = SplitShellHelpers.title.createAttrs(baseId)

  return (
    <Title level={level} {...attrs} {...props}>
      {children}
    </Title>
  )
}
