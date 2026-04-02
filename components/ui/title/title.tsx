import { type HTMLAttributes } from 'react'

import { cn } from '@/helpers'

import { type TTitleLevel } from './title.types'

export type TTitleProps = {
  level?: TTitleLevel
} & HTMLAttributes<HTMLHeadingElement>

export function Title({ children, className, level = 1, ...props }: TTitleProps) {
  const Tag = `h${level}` as const

  return (
    <Tag className={cn('text-xl font-semibold text-content-primary', className)} {...props}>
      {children}
    </Tag>
  )
}
