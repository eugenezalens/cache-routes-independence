import { SvgIcon, type TBaseIconProps } from '../_svg-icon'

export type TEugenezalensIconProps = TBaseIconProps

export function EugenezalensIcon({ ...props }: TEugenezalensIconProps) {
  return <SvgIcon src="/eugenezalens.svg" alt="Eugenezalens" {...props} />
}
