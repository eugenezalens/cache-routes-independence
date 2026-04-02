import { type TCacheBuilderConfig } from '../api.types'

export function buildCacheRequestInit(config: TCacheBuilderConfig): RequestInit['next'] {
  return {
    revalidate: config.ttl,
    tags: config.tagList,
  }
}
