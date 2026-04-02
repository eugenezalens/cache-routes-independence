import 'server-only'

import { buildPostRequestInit } from './post-method.helpers'
import { type TPostRequestConfig } from './post-method.types'
import { type TApiResult } from '../../api.types'
import { buildUrl } from '../../helpers/build-url.server'
import { sendRequest } from '../../helpers/send-request'

export async function sendPostRequest<TData = unknown>(config: TPostRequestConfig): Promise<TApiResult<TData>> {
  return sendRequest<TData>(buildUrl(config), buildPostRequestInit(config))
}
