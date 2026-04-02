import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

import { userAvatarHelpers } from './user-avatar.helpers'

export type TUserAvatarProps = {
  username: string
} & Omit<ComponentPropsWithoutRef<'span'>, 'children'>

export function UserAvatar({ username, className, ...props }: TUserAvatarProps) {
  const avatarInitial = userAvatarHelpers.get.initial(username)

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
