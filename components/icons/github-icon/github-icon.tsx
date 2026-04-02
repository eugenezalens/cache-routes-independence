import { SvgIcon, type TBaseIconProps } from '../_svg-icon'

export type TGithubIconProps = TBaseIconProps

export function GithubIcon({ ...props }: TGithubIconProps) {
  return <SvgIcon src="/github.svg" alt="GitHub" {...props} />
}
