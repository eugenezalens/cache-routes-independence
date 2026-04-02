import { type TCachePolicy, type TEndpoints } from '@/features/contracts'

export type TUpdateMutationRequestParams = {
  id: number
}

export type TUpdateMutationExecuteRequest = {
  endpoints: TEndpoints
  cachePolicy: TCachePolicy
  params: TUpdateMutationRequestParams
  payload: string
}
