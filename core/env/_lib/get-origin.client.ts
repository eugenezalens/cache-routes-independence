import 'client-only'

import { env } from './env'

export function getClientOrigin(): string {
  return env.NEXT_PUBLIC_APP_ORIGIN
}
