import { type ComponentPropsWithoutRef } from 'react'

import { Text } from '@/components/ui/text'

import { cn } from '@/helpers'

export type TPageFallbackDescriptionProps = ComponentPropsWithoutRef<typeof Text>

export function PageFallbackDescription({ children, className, ...props }: TPageFallbackDescriptionProps) {
  return (
    <Text className={cn('text-sm leading-6 text-content-secondary sm:text-base', className)} {...props}>
      {children}
    </Text>
  )
}
