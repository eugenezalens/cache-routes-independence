import { type ComponentPropsWithoutRef } from 'react'

import { type SvgIcon } from './svg-icon'

export type TBaseIconProps = Omit<ComponentPropsWithoutRef<typeof SvgIcon>, 'src' | 'alt'>
