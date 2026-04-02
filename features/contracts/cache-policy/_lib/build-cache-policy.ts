import { CachePolicyHelpers } from './cache-policy.helpers'
import { type TCachePolicy, type TCachePolicyConfig } from './cache-policy.types'

export function buildCachePolicy({ entity }: TCachePolicyConfig): TCachePolicy {
  const cachePolicy: TCachePolicy = {
    base: CachePolicyHelpers.create.base(entity),
    list: CachePolicyHelpers.create.list(entity),
    byId: CachePolicyHelpers.create.byId(entity),
    selection: CachePolicyHelpers.create.selection(entity),
  }

  return cachePolicy
}
