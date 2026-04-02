import { cn } from '@/helpers'

import { ActionIconStyles } from '../styles/action-icon.styles'
import { type TActionIconProps } from '../types/action-icon.types'

export type TActionIconButtonProps = TActionIconProps<'button'>

export function ActionIconButton({ isDisabled, children, className, ...props }: TActionIconButtonProps) {
  return (
    <button
      className={cn(
        ActionIconStyles.base,
        isDisabled ? ActionIconStyles.disabled : ActionIconStyles.interactive,
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  )
}
