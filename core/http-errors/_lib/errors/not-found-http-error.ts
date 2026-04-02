import { HttpErrorCodes } from '../http-errors.constants'
import { BaseHttpError } from './base'

export class NotFoundHttpError extends BaseHttpError {
  constructor(message = 'Resource not found') {
    super(message, 404, HttpErrorCodes.notFound)
  }
}
