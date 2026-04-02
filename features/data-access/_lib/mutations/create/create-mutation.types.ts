import { type TCachePolicy, type TEndpoints } from '@/features/contracts'

export type TCreateMutationExecuteRequest = {
  endpoints: TEndpoints
  cachePolicy: TCachePolicy
  payload: string
}
