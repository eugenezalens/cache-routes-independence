import 'server-only'

import { NextResponse } from 'next/server'

export function toNextJsonResponse<TBody>(body: TBody, init?: ResponseInit) {
  const headers = new Headers(init?.headers)
  headers.set('Cache-Control', 'no-store')

  return NextResponse.json(body, {
    ...init,
    headers,
  })
}
