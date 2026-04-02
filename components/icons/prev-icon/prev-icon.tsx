import { SvgIcon, type TBaseIconProps } from '../_svg-icon'

export type TPrevIconProps = TBaseIconProps

export function PrevIcon({ ...props }: TPrevIconProps) {
  return <SvgIcon src="/prev.svg" alt="Prev" {...props} />
}
