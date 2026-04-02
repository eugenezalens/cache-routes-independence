import { SvgIcon, type TBaseIconProps } from '../_svg-icon'

export type TEditIconProps = TBaseIconProps

export function EditIcon({ ...props }: TEditIconProps) {
  return <SvgIcon src="/edit.svg" alt="Edit" {...props} />
}
