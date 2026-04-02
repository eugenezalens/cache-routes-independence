export { POSTS_MODULE_KEY } from './_lib/constants/posts.constants'

export type { IPost } from './_lib/models/posts.models'

export { PostsRoutes } from './_lib/contracts/posts-routes.contract'
export { PostsCachePolicy } from './_lib/contracts/posts-cache-policy.contract'
export { PostsEndpoints } from './_lib/contracts/posts-endpoints.contract'

export { PostCard, type TPostCardProps } from './_lib/components/post-card/post-card'
export { PostCardSkeleton, type TPostCardSkeletonProps } from './_lib/components/post-card/post-card-skeleton'
export { PostCardBody, type TPostCardBodyProps } from './_lib/components/post-card/post-card-body'
export { PostCardText, type TPostCardTextProps } from './_lib/components/post-card/post-card-text'
export { OpenPostDetailsAction, type TOpenPostDetailsActionProps } from './_lib/components/open-post-details-action'
export { OpenPostEditingAction, type TOpenPostEditingActionProps } from './_lib/components/open-post-editing-action'

export { postEditorSchema } from './_lib/api/mutations/post-editor-schema'
export { createPostAction } from './_lib/api/mutations/create-post.action'
export { updatePostAction } from './_lib/api/mutations/update-post.action'
