'use client'

import { type ComponentType } from 'react'

import { ActionIconStyles } from '@/components/ui/action-icon'

import { useDelayedLoading } from '@/hooks/client'

import { type TPaginationCallbackControlProps } from './pagination-callback-control'
import { PaginationControlSkeleton } from './pagination-control-skeleton'
import { PaginationEllipsis } from './pagination-ellipsis'
import { PaginationNumber } from './pagination-number'
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

export type TPaginationNumbersProps = TPaginationExclusiveSlotConfig<TSlots, TSlotsProps>

export function PaginationNumbers({ slots, slotsProps }: TPaginationNumbersProps) {
  const { isLoading, isPending, paginationRange, currentPage, createPageUrl } = usePaginationContext()

  const showSkeleton = useDelayedLoading(isLoading || isPending)

  const RoutingControl = slots.routingControl
  const CallbackControl = slots.callbackControl

  return (
    <>
      {paginationRange.map((item) => {
        if (item.type === 'ellipsis') {
          return (
            <li key={item.id} className={ActionIconStyles.base}>
              <PaginationEllipsis className="flex h-7 w-7 items-center justify-center" />
            </li>
          )
        }

        const isActive = item.value === currentPage

        return (
          <li key={item.id}>
            {RoutingControl && (
              <RoutingControl
                {...slotsProps?.routingControl}
                page={item.value}
                skeleton={showSkeleton ? <PaginationControlSkeleton isActive={isActive} /> : null}
                href={createPageUrl(item.value)}
              >
                <PaginationNumber value={item.value} isActive={isActive} />
              </RoutingControl>
            )}

            {CallbackControl && (
              <CallbackControl
                {...slotsProps?.callbackControl}
                page={item.value}
                skeleton={showSkeleton ? <PaginationControlSkeleton isActive={isActive} /> : null}
              >
                <PaginationNumber value={item.value} isActive={isActive} />
              </CallbackControl>
            )}
          </li>
        )
      })}
    </>
  )
}
