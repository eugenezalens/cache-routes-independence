import { type ComponentType } from 'react'

import { type TGithubIconProps } from '@/components/icons/github-icon'
import { type TLinkedinIconProps } from '@/components/icons/linkedin-icon'
import { type TYoutubeIconProps } from '@/components/icons/youtube-icon'
import { ActionIconLink } from '@/components/ui/action-icon'

export type TProfileLinkProps = {
  href: string
  ariaLabel: string
  slots: {
    icon: ComponentType<TGithubIconProps> | ComponentType<TLinkedinIconProps> | ComponentType<TYoutubeIconProps>
  }
  slotsProps?: {
    icon?: Omit<TGithubIconProps | TLinkedinIconProps | TYoutubeIconProps, 'width' | 'height' | 'priority'>
  }
}

export function ProfileLink({ href, ariaLabel, slots, slotsProps }: TProfileLinkProps) {
  const Icon = slots.icon

  return (
    <ActionIconLink href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      <Icon {...slotsProps?.icon} width={32} height={32} priority />
    </ActionIconLink>
  )
}
