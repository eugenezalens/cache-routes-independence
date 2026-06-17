import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

import { letterAvatarHelpers } from './letter-avatar.helpers'

export type TLetterAvatarProps = {
  username: string
} & Omit<ComponentPropsWithoutRef<'span'>, 'children'>

export function LetterAvatar({ username, className, ...props }: TLetterAvatarProps) {
  const avatarInitial = letterAvatarHelpers.getInitial(username)

  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-divider-subtle bg-surface-subtle font-semibold select-none',
        className,
      )}
      {...props}
    >
      {avatarInitial}
    </span>
  )
}
