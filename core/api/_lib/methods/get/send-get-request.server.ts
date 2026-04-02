import 'server-only'

import { buildGetRequestInit } from './get-method.helpers'
import { type TGetRequestConfig } from './get-method.types'
import { type TApiResult } from '../../api.types'
import { buildUrl } from '../../helpers/build-url.server'
import { sendRequest } from '../../helpers/send-request'

export async function sendGetRequest<TData = unknown>(config: TGetRequestConfig): Promise<TApiResult<TData>> {
  return sendRequest<TData>(buildUrl(config), buildGetRequestInit(config))
}
