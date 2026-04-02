export { COMMENTS_MODULE_KEY } from './_lib/constants/comments.constants'

export type { IComment } from './_lib/models/comments.models'

export { CommentsRoutes } from './_lib/contracts/comments-routes.contract'
export { CommentsCachePolicy } from './_lib/contracts/comments-cache-policy.contract'
export { CommentsEndpoints } from './_lib/contracts/comments-endpoints.contract'

export { CommentCard, type TCommentCardProps } from './_lib/components/comment-card/comment-card'
export { CommentCardBody, type TCommentCardBodyProps } from './_lib/components/comment-card/comment-card-body'
export {
  CommentCardSkeleton,
  type TCommentCardSkeletonProps,
} from './_lib/components/comment-card/comment-card-skeleton'
export { CommentCardText, type TCommentCardTextProps } from './_lib/components/comment-card/comment-card-text'
export {
  OpenCommentDetailsAction,
  type TOpenCommentDetailsActionProps,
} from './_lib/components/open-comment-details-action'
