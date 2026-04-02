import { type TListQueryRequestParams } from '@/features/data-access'

export type TCommentListRequestParams = TListQueryRequestParams<{ postId?: number }>
