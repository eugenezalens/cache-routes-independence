import { HttpErrorCodes } from '../http-errors.constants'
import { BaseHttpError } from './base'

export class BadRequestHttpError extends BaseHttpError {
  constructor(message = 'Bad request') {
    super(message, 400, HttpErrorCodes.badRequest)
  }
}
