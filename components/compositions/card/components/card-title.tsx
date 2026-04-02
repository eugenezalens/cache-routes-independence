import { Title, type TTitleLevel, type TTitleProps } from '@/components/ui/title'

import { cn } from '@/helpers'

export type TCardTitleProps = {
  level: TTitleLevel
} & Omit<TTitleProps, 'level'>

export function CardTitle({ className, children, ...props }: TCardTitleProps) {
  return (
    <Title className={cn('truncate text-lg font-bold text-content-primary', className)} {...props}>
      {children}
    </Title>
  )
}
