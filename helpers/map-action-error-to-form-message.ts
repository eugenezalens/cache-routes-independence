import { HttpErrors } from '@/core/http-errors'
import { type TOptional } from '@/types'

export function mapActionErrorToFormMessage(error: unknown): TOptional<string> {
  if (error instanceof HttpErrors.NotFound) {
    return 'The requested resource was not found.'
  }

  if (error instanceof HttpErrors.Upstream) {
    return 'The service is temporarily unavailable. Please try again later.'
  }

  return undefined
}
