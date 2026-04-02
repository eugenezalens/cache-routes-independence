import { type TGetRequestBuilderConfig } from './get-method.types'
import { buildCacheRequestInit } from '../../helpers/build-cache-request-init'

export function buildGetRequestInit(config: TGetRequestBuilderConfig): RequestInit {
  const requestInit: RequestInit = {
    method: 'GET',
  }

  if (config?.cache) {
    requestInit.next = buildCacheRequestInit(config.cache)
  }

  return requestInit
}
