import 'server-only'

import { env } from './env'

export function getApiOrigin(): string {
  return env.API_ORIGIN
}
