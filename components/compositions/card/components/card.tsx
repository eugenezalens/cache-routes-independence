import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

import { type TCardVariant } from '../types/card.types'

export type TCardProps = {
  variant?: TCardVariant
} & ComponentPropsWithoutRef<'article'>

export function Card({ variant = 'standalone', children, className, ...props }: TCardProps) {
  return (
    <article
      className={cn(
        'flex aspect-square flex-col gap-md overflow-hidden bg-surface-raised p-md shadow-sm',
        variant === 'standalone' ? 'rounded-xl' : 'rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
    </article>
  )
}
