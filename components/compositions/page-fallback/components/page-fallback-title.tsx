import { type ComponentPropsWithoutRef } from 'react'

import { Title } from '@/components/ui/title'

import { cn } from '@/helpers'

export type TPageFallbackTitleProps = ComponentPropsWithoutRef<typeof Title>

export function PageFallbackTitle({ children, className, ...props }: TPageFallbackTitleProps) {
  return (
    <Title className={cn('text-balance', className)} {...props}>
      {children}
    </Title>
  )
}
