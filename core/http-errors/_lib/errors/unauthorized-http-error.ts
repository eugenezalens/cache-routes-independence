import { HttpErrorCodes } from '../http-errors.constants'
import { BaseHttpError } from './base'

export class UnauthorizedHttpError extends BaseHttpError {
  constructor(message = 'Unauthorized') {
    super(message, 401, HttpErrorCodes.unauthorized)
  }
}
