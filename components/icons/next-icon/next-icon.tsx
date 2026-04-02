import { SvgIcon, type TBaseIconProps } from '../_svg-icon'

export type TNextIconProps = TBaseIconProps

export function NextIcon({ ...props }: TNextIconProps) {
  return <SvgIcon src="/next.svg" alt="Next" {...props} />
}
