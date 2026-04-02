import { useId } from 'react'

import { SplitShellSection, SplitShellSectionTitle } from '@/components/compositions/split-shell'
import { Text } from '@/components/ui/text'

import { cn } from '@/helpers'
import { SurfaceStyles } from '@/styles/compositions'

import { type IUser, UserCard } from '@/modules/users'

export function UserPageGeneralSection({ user }: { user: IUser }) {
  const id = useId()

  return (
    <SplitShellSection baseId={id} className="h-full">
      <SplitShellSectionTitle baseId={id} level={3} className="sr-only">
        General Information
      </SplitShellSectionTitle>

      <div className="flex-1">
        <UserCard titleLevel={4} user={user} />
      </div>

      <div className={cn(SurfaceStyles.raised, 'flex flex-2 items-center justify-center')}>
        <Text>
          Geo: {user.address.geo.lat}, {user.address.geo.lng}
        </Text>
      </div>
    </SplitShellSection>
  )
}
