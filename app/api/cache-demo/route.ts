import { type NextRequest } from 'next/server'

import { toNextJsonResponse } from '@/helpers/next-response/server'

const CACHE_TTL_SECONDS = 60

type TDemoMode = 'cache' | 'no-store'

type TDemoPayload = {
  delayMs: number
  generatedAt: string
  requestToken: string
}

function getMode(searchParams: URLSearchParams): TDemoMode {
  return searchParams.get('mode') === 'cache' ? 'cache' : 'no-store'
}

async function fetchDemoPayload(request: NextRequest, mode: TDemoMode): Promise<TDemoPayload> {
  const sourceUrl = new URL('/api/cache-demo/source', request.nextUrl.origin)

  const response = await fetch(
    sourceUrl,
    mode === 'cache' ? { next: { revalidate: CACHE_TTL_SECONDS, tags: ['cache-demo'] } } : { cache: 'no-store' },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch cache demo payload.')
  }

  return (await response.json()) as TDemoPayload
}

export async function GET(request: NextRequest) {
  const mode = getMode(request.nextUrl.searchParams)
  const startedAt = Date.now()

  const payload = await fetchDemoPayload(request, mode)
  const serverDurationMs = Date.now() - startedAt

  return toNextJsonResponse({
    mode,
    delayMs: payload.delayMs,
    cacheTtlSeconds: CACHE_TTL_SECONDS,
    serverDurationMs,
    generatedAt: payload.generatedAt,
    requestToken: payload.requestToken,
  })
}
