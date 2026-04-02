import { type TPutRequestConfig } from './put-method.types'
import { JSON_CONTENT_TYPE } from '../../constants/api.constants'

export function buildPutRequestInit(config: TPutRequestConfig): RequestInit {
  const requestInit: RequestInit = {
    method: 'PUT',
    body: config.body,
    headers: {
      'Content-Type': JSON_CONTENT_TYPE,
    },
  }

  return requestInit
}
