import { type MouseEvent, type ComponentPropsWithoutRef, type ReactNode } from 'react'

import { ActionIconButton } from '@/components/ui/action-icon'

import { cn } from '@/helpers'

export type TPaginationCallbackControlProps = {
  page: number
  skeleton?: ReactNode
  onPageChange?: (page: number, event: MouseEvent<HTMLButtonElement>) => void
} & ComponentPropsWithoutRef<typeof ActionIconButton>

export function PaginationCallbackControl({
  page,
  skeleton,
  isDisabled,
  onPageChange,
  children,
  className,
  ...props
}: TPaginationCallbackControlProps) {
  const isLoading = !!skeleton

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onPageChange?.(page, event)
  }

  return (
    <ActionIconButton
      isDisabled={isLoading || isDisabled}
      onClick={handleClick}
      type="button"
      aria-label={`Go to page ${page}`}
      className={cn(isLoading && 'opacity-100', className)}
      {...props}
    >
      {skeleton ?? children}
    </ActionIconButton>
  )
}
