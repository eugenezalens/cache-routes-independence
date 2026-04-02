import { cn } from '@/helpers'

import { ButtonStyles } from '../styles/button.styles'
import { type TButtonBaseProps } from '../types/button.types'

export type TButtonProps = TButtonBaseProps<'button'>

export function Button({ isDisabled, children, className, ...props }: TButtonProps) {
  return (
    <button
      className={cn(ButtonStyles.base, isDisabled ? ButtonStyles.disabled : ButtonStyles.interactive, className)}
      {...props}
    >
      {children}
    </button>
  )
}
