import 'server-only'

import { env } from './env'

export function getServerOrigin(): string {
  return env.APP_ORIGIN
}
