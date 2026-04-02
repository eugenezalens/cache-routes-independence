import 'server-only'

import { HttpErrors } from '@/core/http-errors'

import { toNextJsonResponse } from './to-next-json-response.server'

export function toNextErrorResponse(error: unknown) {
  if (error instanceof HttpErrors.Base) {
    return toNextJsonResponse(
      {
        code: error.code,
        message: error.message,
      },
      { status: error.statusCode },
    )
  }

  return toNextJsonResponse(
    {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal Server Error',
    },
    { status: 500 },
  )
}
