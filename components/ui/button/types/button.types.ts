import { type ComponentPropsWithoutRef, type ElementType } from 'react'

export type TButtonBaseProps<TActionType extends ElementType> = {
  isDisabled?: boolean
} & ComponentPropsWithoutRef<TActionType>
