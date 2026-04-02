import { type NextRequest } from 'next/server'
import * as z from 'zod'

import { executeByIdQuery } from '@/features/data-access/server'
import { toNextErrorResponse, toNextJsonResponse } from '@/helpers/next-response/server'

import { type IUser, UsersCachePolicy, UsersEndpoints } from '@/modules/users'

const ParamsSchema = z.object({
  userId: z.coerce.number().int().positive(),
})

type TRouteContext = { params: Promise<{ userId: string }> }

export async function GET(_request: NextRequest, { params }: TRouteContext) {
  const parsed = ParamsSchema.safeParse(await params)

  if (!parsed.success) {
    return toNextJsonResponse({ message: 'Invalid userId' }, { status: 400 })
  }

  try {
    const result = await executeByIdQuery<IUser>({
      params: { id: parsed.data.userId },
      endpoints: UsersEndpoints,
      cachePolicy: UsersCachePolicy,
    })

    return toNextJsonResponse(result)
  } catch (error) {
    return toNextErrorResponse(error)
  }
}
