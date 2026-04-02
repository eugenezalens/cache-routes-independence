import 'server-only'

import { buildPutRequestInit } from './put-method.helpers'
import { type TPutRequestConfig } from './put-method.types'
import { type TApiResult } from '../../api.types'
import { buildUrl } from '../../helpers/build-url.server'
import { sendRequest } from '../../helpers/send-request'

export async function sendPutRequest<TData = unknown>(config: TPutRequestConfig): Promise<TApiResult<TData>> {
  return sendRequest<TData>(buildUrl(config), buildPutRequestInit(config))
}
