import { type ComponentPropsWithoutRef, type ElementType } from 'react'

export type TActionIconProps<TActionType extends ElementType> = {
  isDisabled?: boolean
} & ComponentPropsWithoutRef<TActionType>
