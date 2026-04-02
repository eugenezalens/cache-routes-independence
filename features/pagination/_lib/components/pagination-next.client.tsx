'use client'

import { type ComponentType } from 'react'

import { NextIcon } from '@/components/icons/next-icon'

import { useDelayedLoading } from '@/hooks/client'

import { type TPaginationCallbackControlProps } from './pagination-callback-control'
import { PaginationControlSkeleton } from './pagination-control-skeleton'
import { type TPaginationRoutingControlProps } from './pagination-routing-control'
import { usePaginationContext } from '../context/use-pagination-context'
import { type TPaginationExclusiveSlotConfig } from '../types/pagination.types'

type TSlots = {
  routingControl: ComponentType<TPaginationRoutingControlProps>
  callbackControl: ComponentType<TPaginationCallbackControlProps>
}

type TSlotsProps = {
  routingControl: Omit<TPaginationRoutingControlProps, 'page' | 'href' | 'aria-label'>
  callbackControl: Omit<TPaginationCallbackControlProps, 'page' | 'aria-label'>
}

export type TPaginationNextProps = TPaginationExclusiveSlotConfig<TSlots, TSlotsProps>

export function PaginationNext({ slots, slotsProps }: TPaginationNextProps) {
  const { isLoading, isPending, currentPage, hasNextPage, createPageUrl } = usePaginationContext()

  const showSkeleton = useDelayedLoading(isLoading || isPending)
  const nextPage = hasNextPage ? currentPage + 1 : currentPage

  const RoutingControl = slots.routingControl
  const CallbackControl = slots.callbackControl

  return (
    <li>
      {RoutingControl && (
        <RoutingControl
          {...slotsProps?.routingControl}
          page={nextPage}
          skeleton={showSkeleton ? <PaginationControlSkeleton isActive /> : null}
          isDisabled={!hasNextPage}
          href={hasNextPage ? createPageUrl(nextPage) : '#'}
        >
          <NextIcon />
        </RoutingControl>
      )}

      {CallbackControl && (
        <CallbackControl
          {...slotsProps?.callbackControl}
          page={nextPage}
          skeleton={showSkeleton ? <PaginationControlSkeleton isActive /> : null}
          isDisabled={!hasNextPage}
        >
          <NextIcon />
        </CallbackControl>
      )}
    </li>
  )
}
