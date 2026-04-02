import { type NextRequest } from 'next/server'

import { executeListQuery } from '@/features/data-access/server'
import { toNextErrorResponse, toNextJsonResponse } from '@/helpers/next-response/server'

import { type IUser, UsersCachePolicy, UsersEndpoints } from '@/modules/users'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  try {
    const result = await executeListQuery<IUser>({
      searchParams,
      endpoints: UsersEndpoints,
      cachePolicy: UsersCachePolicy,
    })

    return toNextJsonResponse(result)
  } catch (error) {
    return toNextErrorResponse(error)
  }
}
