import { type NextRequest } from 'next/server'

import { executeListQuery } from '@/features/data-access/server'
import { toNextErrorResponse, toNextJsonResponse } from '@/helpers/next-response/server'

import { CommentsCachePolicy, CommentsEndpoints, type IComment } from '@/modules/comments'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  try {
    const result = await executeListQuery<IComment>({
      searchParams,
      endpoints: CommentsEndpoints,
      cachePolicy: CommentsCachePolicy,
    })

    return toNextJsonResponse(result)
  } catch (error) {
    return toNextErrorResponse(error)
  }
}
