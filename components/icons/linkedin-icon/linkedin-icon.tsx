import { SvgIcon, type TBaseIconProps } from '../_svg-icon'

export type TLinkedinIconProps = TBaseIconProps

export function LinkedinIcon({ ...props }: TLinkedinIconProps) {
  return <SvgIcon src="/linkedin.svg" alt="LinkedIn" {...props} />
}
