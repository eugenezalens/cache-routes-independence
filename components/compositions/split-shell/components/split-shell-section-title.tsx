import { Title, type TTitleLevel, type TTitleProps } from '@/components/ui/title'

import { SplitShellHelpers } from '../helpers/split-shell.helpers'

export type TSplitShellSectionTitleProps = {
  baseId: string
  level: TTitleLevel
} & Omit<TTitleProps, 'level'>

export function SplitShellSectionTitle({ baseId, children, ...props }: TSplitShellSectionTitleProps) {
  const attrs = SplitShellHelpers.sectionTitle.createAttrs(baseId)

  return (
    <Title {...attrs} {...props}>
      {children}
    </Title>
  )
}
