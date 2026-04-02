import { useId } from 'react'

import {
  SplitShellSection,
  SplitShellSectionHeader,
  SplitShellSectionTitle,
} from '@/components/compositions/split-shell'

import { type IUser } from '@/modules/users'

import { UserPageAddress } from './user-page-address'
import { UserPageCompany } from './user-page-company'

export function UserPageAdditionalSection({ user }: { user: IUser }) {
  const id = useId()

  return (
    <SplitShellSection baseId={id} className="h-full">
      <SplitShellSectionHeader>
        <SplitShellSectionTitle baseId={id} level={3}>
          Additional Information
        </SplitShellSectionTitle>
      </SplitShellSectionHeader>

      <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
        <UserPageAddress address={user.address} />
        <UserPageCompany company={user.company} />
      </div>
    </SplitShellSection>
  )
}
