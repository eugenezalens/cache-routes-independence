import { type TCachePolicy, type TEndpoints } from '@/features/contracts'
import { type TPaginationParams, type TRequestParams } from '@/types'

export type TListQueryRequestParams<TOther extends TRequestParams = TRequestParams> = {
  idList?: readonly number[]
  pagination?: Readonly<TPaginationParams>
  otherParams?: Readonly<TOther>
}

export type TListQueryExecuteRequest = {
  endpoints: TEndpoints
  cachePolicy: TCachePolicy
  searchParams: URLSearchParams
}

export type TListQueryPerformClientRequest = Pick<TListQueryExecuteRequest, 'endpoints'> & {
  params?: TListQueryRequestParams
}

export type TListQueryPerformServerRequest = Pick<TListQueryExecuteRequest, 'endpoints' | 'cachePolicy'> & {
  params?: TListQueryRequestParams
}
