import { type NextRequest } from 'next/server'

import { executeListQuery } from '@/features/data-access/server'
import { toNextErrorResponse, toNextJsonResponse } from '@/helpers/next-response/server'

import { type IPost, PostsCachePolicy, PostsEndpoints } from '@/modules/posts'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  try {
    const result = await executeListQuery<IPost>({
      searchParams,
      endpoints: PostsEndpoints,
      cachePolicy: PostsCachePolicy,
    })

    return toNextJsonResponse(result)
  } catch (error) {
    return toNextErrorResponse(error)
  }
}
