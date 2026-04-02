import { EugenezalensIcon } from '@/components/icons/eugenezalens-icon'
import { ActionIconLink } from '@/components/ui/action-icon'

export function Logo() {
  return (
    <ActionIconLink href="/" aria-label="Home">
      <EugenezalensIcon width={40} height={40} priority />
    </ActionIconLink>
  )
}
