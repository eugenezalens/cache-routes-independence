import { type THttpErrorCode } from '@/core/http-errors'

export type TApiEnvelope<TData> = {
  data: TData
}

export type TApiEnvelopeWithMeta<TData, TMeta extends object> = {
  data: TData
  meta: TMeta
}

export type TPaginationMeta = {
  page: number
  limit: number
  totalItems: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export type TPaginatedApiEnvelope<TItem> = TApiEnvelopeWithMeta<
  TItem[],
  {
    pagination: TPaginationMeta
  }
>

export type TApiErrorEnvelope = {
  code: THttpErrorCode
  message: string
}
