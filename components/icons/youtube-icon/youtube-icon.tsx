import { SvgIcon, type TBaseIconProps } from '../_svg-icon'

export type TYoutubeIconProps = TBaseIconProps

export function YoutubeIcon({ ...props }: TYoutubeIconProps) {
  return <SvgIcon src="/youtube.svg" alt="YouTube" {...props} />
}
