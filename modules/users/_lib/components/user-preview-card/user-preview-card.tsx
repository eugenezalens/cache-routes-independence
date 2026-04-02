import { Text } from '@/components/ui/text'
import { Title, type TTitleLevel } from '@/components/ui/title'

import { cn } from '@/helpers'
import { SurfaceStyles } from '@/styles/compositions'

import { OpenUserDetailsAction } from '../open-user-details-action'
import { UserAvatar } from '../user-avatar/user-avatar'

export type TUserPreviewCardProps = {
  titleLevel: TTitleLevel
  id: number
  name: string
  username: string
}
export function UserPreviewCard({ titleLevel, id, name, username }: TUserPreviewCardProps) {
  return (
    <article className={cn(SurfaceStyles.raised, 'grid grid-cols-[1fr_minmax(0,4fr)_1fr] items-center gap-md')}>
      <UserAvatar className="justify-items-start" username={username} />

      <div className="flex flex-col gap-xs">
        <div className="border-b border-divider pb-xs">
          <Title level={titleLevel} className="text-center text-lg">
            {username}
          </Title>
        </div>

        <Text className="truncate text-center">{name}</Text>
      </div>

      <div className="justify-self-end">
        <OpenUserDetailsAction id={id} />
      </div>
    </article>
  )
}
