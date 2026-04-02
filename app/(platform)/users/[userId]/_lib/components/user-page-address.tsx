import { useId } from 'react'

import { Section, SectionBody, SectionContent, SectionHeader, SectionTitle } from '@/components/compositions/section'
import {
  DescriptionList,
  DescriptionListGroup,
  DescriptionListLabel,
  DescriptionListValue,
} from '@/components/ui/description-list'

import { type IUserAddress } from '@/modules/users'

export function UserPageAddress({ address }: { address: IUserAddress }) {
  const id = useId()

  return (
    <Section baseId={id}>
      <SectionHeader>
        <SectionTitle baseId={id} level={3}>
          Address
        </SectionTitle>
      </SectionHeader>

      <SectionBody variant="capped" className="h-full">
        <SectionContent className="h-full">
          <DescriptionList>
            <DescriptionListGroup hasBottomDivider>
              <DescriptionListLabel>Street</DescriptionListLabel>
              <DescriptionListValue>{address.street}</DescriptionListValue>
            </DescriptionListGroup>

            <DescriptionListGroup hasBottomDivider>
              <DescriptionListLabel>Suite</DescriptionListLabel>
              <DescriptionListValue>{address.suite}</DescriptionListValue>
            </DescriptionListGroup>

            <DescriptionListGroup hasBottomDivider>
              <DescriptionListLabel>City</DescriptionListLabel>
              <DescriptionListValue>{address.city}</DescriptionListValue>
            </DescriptionListGroup>

            <DescriptionListGroup>
              <DescriptionListLabel>Zipcode</DescriptionListLabel>
              <DescriptionListValue>{address.zipcode}</DescriptionListValue>
            </DescriptionListGroup>
          </DescriptionList>
        </SectionContent>
      </SectionBody>
    </Section>
  )
}
