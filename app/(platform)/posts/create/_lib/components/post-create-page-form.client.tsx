'use client'

import { createPostAction } from '@/modules/posts'
import { PostEditorForm } from '@/modules/posts/client'

export function PostCreatePageForm({ userId }: { userId: number }) {
  return <PostEditorForm submitLabel="Create" action={createPostAction.bind(null, { userId })} />
}
