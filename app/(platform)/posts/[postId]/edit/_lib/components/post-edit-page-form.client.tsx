'use client'

import { type IPost, updatePostAction } from '@/modules/posts'
import { PostEditorForm } from '@/modules/posts/client'

export function PostEditPageForm({ post }: { post: IPost }) {
  return (
    <PostEditorForm
      submitLabel="Save"
      defaultValue={{
        title: post.title,
        body: post.body,
      }}
      action={updatePostAction.bind(null, { userId: post.userId, postId: post.id })}
    />
  )
}
