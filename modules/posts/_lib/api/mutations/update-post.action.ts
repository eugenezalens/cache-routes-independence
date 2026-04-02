'use server'

import { parseWithZod } from '@conform-to/zod/v4'
import { redirect } from 'next/navigation'

import { ServerApi } from '@/features/data-access/server'
import { mapActionErrorToFormMessage } from '@/helpers'

import { postEditorSchema } from './post-editor-schema'
import { PostsCachePolicy } from '../../contracts/posts-cache-policy.contract'
import { PostsEndpoints } from '../../contracts/posts-endpoints.contract'
import { PostsRoutes } from '../../contracts/posts-routes.contract'

export async function updatePostAction(
  context: { userId: number; postId: number },
  _prevState: unknown,
  formData: FormData,
) {
  const submission = parseWithZod(formData, { schema: postEditorSchema })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  try {
    await ServerApi.mutations.update({
      endpoints: PostsEndpoints,
      cachePolicy: PostsCachePolicy,
      params: { id: context.postId },
      payload: JSON.stringify({
        id: context.postId,
        userId: context.userId,
        title: submission.value.title,
        body: submission.value.body,
      }),
    })
  } catch (error) {
    const formError = mapActionErrorToFormMessage(error)

    if (formError) {
      return submission.reply({
        formErrors: [formError],
      })
    }

    throw error
  }

  redirect(PostsRoutes.details({ params: { id: context.postId } }))
}
