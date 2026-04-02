import Link from 'next/link'

import { cn } from '@/helpers'

import { ButtonStyles } from '../styles/button.styles'
import { type TButtonBaseProps } from '../types/button.types'

export type TButtonLinkProps = TButtonBaseProps<typeof Link>

export function ButtonLink({ isDisabled, children, className, ...props }: TButtonLinkProps) {
  return (
    <Link
      className={cn(ButtonStyles.base, isDisabled ? ButtonStyles.disabled : ButtonStyles.interactive, className)}
      {...props}
    >
      {children}
    </Link>
  )
}
