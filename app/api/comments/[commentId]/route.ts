import { type NextRequest } from 'next/server'
import { z } from 'zod'

import { executeByIdQuery } from '@/features/data-access/server'
import { toNextErrorResponse, toNextJsonResponse } from '@/helpers/next-response/server'

import { CommentsCachePolicy, CommentsEndpoints, type IComment } from '@/modules/comments'

const ParamsSchema = z.object({
  commentId: z.coerce.number().int().positive(),
})

type TRouteContext = { params: Promise<{ commentId: string }> }

export async function GET(_request: NextRequest, { params }: TRouteContext) {
  const parsed = ParamsSchema.safeParse(await params)

  if (!parsed.success) {
    return toNextJsonResponse({ message: 'Invalid commentId' }, { status: 400 })
  }

  try {
    const result = await executeByIdQuery<IComment>({
      params: { id: parsed.data.commentId },
      endpoints: CommentsEndpoints,
      cachePolicy: CommentsCachePolicy,
    })

    return toNextJsonResponse(result)
  } catch (error) {
    return toNextErrorResponse(error)
  }
}
