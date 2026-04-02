import 'server-only'

import { type TServerPageSearchParams } from '@/types'

export async function parsePostCreatePageSp(
  searchParamsPromise: TServerPageSearchParams<{
    userId?: string
  }>,
) {
  const sp = await searchParamsPromise

  const userId = Number(sp.userId)

  return {
    userId: Number.isNaN(userId) ? undefined : userId,
  }
}
