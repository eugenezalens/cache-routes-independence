import { SvgIcon, type TBaseIconProps } from '../_svg-icon'

export type TRightIconProps = TBaseIconProps

export function RightIcon({ ...props }: TRightIconProps) {
  return <SvgIcon src="/right.svg" alt="Right" {...props} />
}
