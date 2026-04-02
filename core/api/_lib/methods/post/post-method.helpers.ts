import { type TPostRequestConfig } from './post-method.types'
import { JSON_CONTENT_TYPE } from '../../constants/api.constants'

export function buildPostRequestInit(config: TPostRequestConfig): RequestInit {
  const requestInit: RequestInit = {
    method: 'POST',
    body: config.body,
    headers: {
      'Content-Type': JSON_CONTENT_TYPE,
    },
  }

  return requestInit
}
