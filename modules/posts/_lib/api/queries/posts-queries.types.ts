import { type TListQueryRequestParams } from '@/features/data-access'

export type TPostListRequestParams = TListQueryRequestParams<{ userId?: number }>
