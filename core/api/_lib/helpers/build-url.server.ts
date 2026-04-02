import 'server-only'

import { getApiOrigin } from '@/core/env/server'

import { type TUrlBuilderConfig } from '../api.types'

export function buildUrl(config: TUrlBuilderConfig): URL {
  const url = new URL(config.path, getApiOrigin())

  if (config.searchParams) {
    url.search = config.searchParams.toString()
  }

  return url
}
