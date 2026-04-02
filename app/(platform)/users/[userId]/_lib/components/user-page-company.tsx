import { useId } from 'react'

import { Section, SectionBody, SectionContent, SectionHeader, SectionTitle } from '@/components/compositions/section'
import {
  DescriptionList,
  DescriptionListGroup,
  DescriptionListLabel,
  DescriptionListValue,
} from '@/components/ui/description-list'

import { type IUserCompany } from '@/modules/users'

export function UserPageCompany({ company }: { company: IUserCompany }) {
  const id = useId()

  return (
    <Section baseId={id}>
      <SectionHeader>
        <SectionTitle baseId={id} level={3}>
          Company
        </SectionTitle>
      </SectionHeader>

      <SectionBody variant="capped" className="h-full">
        <SectionContent className="h-full">
          <DescriptionList>
            <DescriptionListGroup hasBottomDivider>
              <DescriptionListLabel>Name</DescriptionListLabel>
              <DescriptionListValue>{company.name}</DescriptionListValue>
            </DescriptionListGroup>

            <DescriptionListGroup hasBottomDivider>
              <DescriptionListLabel>Catch phrase</DescriptionListLabel>
              <DescriptionListValue>{company.catchPhrase}</DescriptionListValue>
            </DescriptionListGroup>

            <DescriptionListGroup>
              <DescriptionListLabel>BS</DescriptionListLabel>
              <DescriptionListValue>{company.bs}</DescriptionListValue>
            </DescriptionListGroup>
          </DescriptionList>
        </SectionContent>
      </SectionBody>
    </Section>
  )
}
