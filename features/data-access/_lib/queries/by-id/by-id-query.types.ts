import { type TCachePolicy, type TEndpoints } from '@/features/contracts'

export type TByIdQueryRequestParams = {
  id: number
}

export type TByIdQueryExecuteRequest = {
  endpoints: TEndpoints
  cachePolicy: TCachePolicy
  params: TByIdQueryRequestParams
}

export type TByIdQueryPerformClientRequest = Pick<TByIdQueryExecuteRequest, 'endpoints' | 'params'>
export type TByIdQueryPerformServerRequest = TByIdQueryExecuteRequest
