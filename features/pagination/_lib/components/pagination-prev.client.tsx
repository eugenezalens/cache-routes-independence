'use client'

import { type ComponentType } from 'react'

import { PrevIcon } from '@/components/icons/prev-icon'

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

export type TPaginationPrevProps = TPaginationExclusiveSlotConfig<TSlots, TSlotsProps>

export function PaginationPrev({ slots, slotsProps }: TPaginationPrevProps) {
  const { isLoading, isPending, currentPage, hasPrevPage, createPageUrl } = usePaginationContext()

  const showSkeleton = useDelayedLoading(isLoading || isPending)
  const prevPage = hasPrevPage ? currentPage - 1 : currentPage

  const RoutingControl = slots.routingControl
  const CallbackControl = slots.callbackControl

  return (
    <li>
      {RoutingControl && (
        <RoutingControl
          {...slotsProps?.routingControl}
          page={prevPage}
          skeleton={showSkeleton ? <PaginationControlSkeleton isActive /> : null}
          isDisabled={!hasPrevPage}
          href={hasPrevPage ? createPageUrl(prevPage) : '#'}
        >
          <PrevIcon />
        </RoutingControl>
      )}

      {CallbackControl && (
        <CallbackControl
          {...slotsProps?.callbackControl}
          page={prevPage}
          skeleton={showSkeleton ? <PaginationControlSkeleton isActive /> : null}
          isDisabled={!hasPrevPage}
        >
          <PrevIcon />
        </CallbackControl>
      )}
    </li>
  )
}
