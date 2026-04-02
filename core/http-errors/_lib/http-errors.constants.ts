export const HttpErrorCodes = {
  notFound: 'NOT_FOUND',
  badRequest: 'BAD_REQUEST',
  unauthorized: 'UNAUTHORIZED',
  upstream: 'UPSTREAM_ERROR',
} as const

export type THttpErrorCode = (typeof HttpErrorCodes)[keyof typeof HttpErrorCodes]
