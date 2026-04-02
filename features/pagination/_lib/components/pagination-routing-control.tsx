import { type ComponentPropsWithRef, type ReactNode } from 'react'

import { ActionIconLink } from '@/components/ui/action-icon'

import { cn } from '@/helpers'

import { PaginationPendingReporter } from './pagination-pending-reporter.client'

export type TPaginationRoutingControlProps = {
  page: number
  skeleton?: ReactNode
} & ComponentPropsWithRef<typeof ActionIconLink>

export function PaginationRoutingControl({
  page,
  skeleton,
  isDisabled,
  href,
  children,
  className,
  ...props
}: TPaginationRoutingControlProps) {
  const isLoading = !!skeleton

  return (
    <ActionIconLink
      isDisabled={isLoading || isDisabled}
      href={href}
      className={cn(isLoading && 'opacity-100', className)}
      aria-label={`Go to page ${page}`}
      {...props}
    >
      <PaginationPendingReporter />
      {skeleton ?? children}
    </ActionIconLink>
  )
}
