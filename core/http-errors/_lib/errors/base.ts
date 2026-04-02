export abstract class BaseHttpError extends Error {
  public readonly statusCode: number
  public readonly code: string
  public readonly isOperational: boolean

  constructor(message: string, statusCode: number, code: string, isOperational = true) {
    super(message)

    this.statusCode = statusCode
    this.code = code
    this.isOperational = isOperational

    Object.setPrototypeOf(this, new.target.prototype)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
