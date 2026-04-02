import { type ComponentType } from 'react'

import { Card, CardActions, CardBody, CardHeader, CardTitle } from '@/components/compositions/card'
import {
  DescriptionList,
  DescriptionListGroup,
  DescriptionListLabel,
  DescriptionListValue,
} from '@/components/ui/description-list'
import { Text } from '@/components/ui/text'
import { type TTitleLevel } from '@/components/ui/title'

import { type TOpenUserDetailsActionProps } from './open-user-details-action'
import { type IUser } from '../models/users.models'
import { UserAvatar } from './user-avatar/user-avatar'

export type TUserCardProps = {
  titleLevel: TTitleLevel
  user: IUser
  slots?: {
    openDetailsAction?: ComponentType<TOpenUserDetailsActionProps>
  }
  slotsProps?: {
    openDetailsAction?: Omit<TOpenUserDetailsActionProps, 'id'>
  }
}

export function UserCard({ titleLevel, user, slots, slotsProps }: TUserCardProps) {
  const OpenDetailsAction = slots?.openDetailsAction

  return (
    <Card>
      <CardHeader>
        <div className={'grid grid-cols-[1fr_minmax(0,4fr)_1fr] items-center gap-md'}>
          <UserAvatar className="justify-items-start" username={user.username} />

          <div className="flex flex-col gap-xs">
            <div className="border-b border-divider pb-xs">
              <CardTitle level={titleLevel} className="text-center text-lg">
                {user.username}
              </CardTitle>
            </div>

            <Text className="truncate text-center">{user.name}</Text>
          </div>

          {slots && (
            <CardActions className="justify-self-end">
              {OpenDetailsAction && <OpenDetailsAction {...slotsProps?.openDetailsAction} id={user.id} />}
            </CardActions>
          )}
        </div>
      </CardHeader>

      <CardBody className="h-full">
        <DescriptionList>
          <DescriptionListGroup hasBottomDivider>
            <DescriptionListLabel>Email</DescriptionListLabel>
            <DescriptionListValue>{user.email}</DescriptionListValue>
          </DescriptionListGroup>

          <DescriptionListGroup hasBottomDivider>
            <DescriptionListLabel>Phone</DescriptionListLabel>
            <DescriptionListValue>{user.phone}</DescriptionListValue>
          </DescriptionListGroup>

          <DescriptionListGroup>
            <DescriptionListLabel>Website</DescriptionListLabel>
            <DescriptionListValue>{user.website}</DescriptionListValue>
          </DescriptionListGroup>
        </DescriptionList>
      </CardBody>
    </Card>
  )
}
