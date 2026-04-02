import { type PAGINATION_ELLIPSIS } from '../constants/pagination.constants'

type TSearchParamsPagination = {
  page?: string
  limit?: string
}

type TPaginationEllipsisItem = {
  id: string
  type: 'ellipsis'
  value: typeof PAGINATION_ELLIPSIS
  isActive: false
}

type TPaginationPageItem = {
  id: string
  type: 'page'
  value: number
  isActive: boolean
}

type TPaginationItem = TPaginationPageItem | TPaginationEllipsisItem

type TPaginationController = {
  currentPage: number
  hasPrevPage: boolean
  hasNextPage: boolean
  paginationRange: TPaginationItem[]
  createPageUrl: (pageNumber: number) => string
}

type TExclusiveOptionalKeys<TKey extends PropertyKey> = Partial<Record<TKey, never>>

type TPaginationExclusiveSlotConfig<
  TSlotMap extends Record<string, unknown>,
  TSlotPropsMap extends { [TKey in keyof TSlotMap]: unknown },
> = {
  [TKey in keyof TSlotMap]: {
    slots: { [TInnerKey in TKey]: TSlotMap[TInnerKey] } & TExclusiveOptionalKeys<Exclude<keyof TSlotMap, TKey>>
    slotsProps?: { [TInnerKey in TKey]?: TSlotPropsMap[TInnerKey] } & TExclusiveOptionalKeys<
      Exclude<keyof TSlotMap, TKey>
    >
  }
}[keyof TSlotMap]

type TPaginationState = {
  isLoading: boolean
  isPending: boolean
  setIsPending: (value: boolean) => void
}

type TPaginationContext = TPaginationState & TPaginationController

export type {
  TSearchParamsPagination,
  TPaginationEllipsisItem,
  TPaginationPageItem,
  TPaginationItem,
  TPaginationController,
  TPaginationState,
  TPaginationExclusiveSlotConfig,
  TPaginationContext,
}
