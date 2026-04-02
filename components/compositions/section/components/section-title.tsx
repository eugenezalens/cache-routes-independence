import { Title, type TTitleLevel, type TTitleProps } from '@/components/ui/title'

import { SectionHelpers } from '../helpers/section.helpers'

export type TSectionTitleProps = {
  baseId: string
  level: TTitleLevel
} & Omit<TTitleProps, 'level'>

export function SectionTitle({ baseId, children, ...props }: TSectionTitleProps) {
  const attrs = SectionHelpers.title.createAttrs(baseId)

  return (
    <Title {...attrs} {...props}>
      {children}
    </Title>
  )
}
