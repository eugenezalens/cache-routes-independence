import {
  PageFallback,
  PageFallbackDescription,
  PageFallbackFooter,
  PageFallbackHeader,
  PageFallbackTitle,
} from '@/components/compositions/page-fallback'
import { ButtonLink } from '@/components/ui/button'

import { UsersRoutes } from '@/modules/users'

export function PostCreatePageFallback() {
  return (
    <PageFallback>
      <PageFallbackHeader>
        <PageFallbackTitle>No user selected</PageFallbackTitle>
      </PageFallbackHeader>

      <PageFallbackDescription>You need to select a user.</PageFallbackDescription>

      <PageFallbackFooter>
        <ButtonLink href={UsersRoutes.browse()}>Go to users</ButtonLink>
      </PageFallbackFooter>
    </PageFallback>
  )
}
