import { type NextRequest } from 'next/server'
import * as z from 'zod'

import { executeByIdQuery } from '@/features/data-access/server'
import { toNextErrorResponse, toNextJsonResponse } from '@/helpers/next-response/server'

import { type IPost, PostsCachePolicy, PostsEndpoints } from '@/modules/posts'

const ParamsSchema = z.object({
  postId: z.coerce.number().int().positive(),
})

type TRouteContext = { params: Promise<{ postId: string }> }

export async function GET(_request: NextRequest, { params }: TRouteContext) {
  const parsed = ParamsSchema.safeParse(await params)

  if (!parsed.success) {
    return toNextJsonResponse({ message: 'Invalid postId' }, { status: 400 })
  }

  try {
    const result = await executeByIdQuery<IPost>({
      params: { id: parsed.data.postId },
      endpoints: PostsEndpoints,
      cachePolicy: PostsCachePolicy,
    })

    return toNextJsonResponse(result)
  } catch (error) {
    return toNextErrorResponse(error)
  }
}
