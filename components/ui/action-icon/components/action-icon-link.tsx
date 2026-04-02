import Link from 'next/link'

import { cn } from '@/helpers'

import { ActionIconStyles } from '../styles/action-icon.styles'
import { type TActionIconProps } from '../types/action-icon.types'

export type TActionIconLinkProps = TActionIconProps<typeof Link>

export function ActionIconLink({ isDisabled, className, children, ...props }: TActionIconLinkProps) {
  const classes = cn(
    ActionIconStyles.base,
    isDisabled ? ActionIconStyles.disabled : ActionIconStyles.interactive,
    className,
  )

  if (isDisabled) {
    return (
      <span className={classes} aria-disabled="true">
        {children}
      </span>
    )
  }

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  )
}
