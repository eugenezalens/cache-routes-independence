'use server'

import { updateTag } from 'next/cache'

export async function invalidateCacheDemoAction() {
  updateTag('cache-demo')
}
