import { HttpErrorCodes } from '../http-errors.constants'
import { BaseHttpError } from './base'

export class UpstreamHttpError extends BaseHttpError {
  constructor(message = 'Upstream service failed') {
    super(message, 502, HttpErrorCodes.upstream)
  }
}
