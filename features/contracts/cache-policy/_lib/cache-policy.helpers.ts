import {
  type TBaseCachePolicy,
  type TCachePolicyById,
  type TCachePolicyList,
  type TCachePolicySelection,
} from './cache-policy.types'

const BASE_TTL = 60 * 5 // five minutes
const LISTING_TTL = 60 * 60 // one hour
const BY_ID_TTL = 60 * 60 * 6 // six hours
const SELECTION_TTL = 60 * 60 * 6 // six hours

function createTag(entity: string, selector?: string | number): string {
  if (!selector) {
    return entity
  }

  return `${entity}:${selector}`
}

function createListTag(entity: string): string {
  return createTag(entity, 'list')
}

function createByIdTag(entity: string, id: string | number): string {
  return createTag(entity, id)
}

function createSelectionTag(entity: string): string {
  return createTag(entity, 'selection')
}

function createBaseCachePolicy(entity: string): TBaseCachePolicy {
  return {
    getBaseTag: () => createTag(entity),
    getCacheConfig: () => ({ ttl: BASE_TTL, tagList: [entity] }),
  }
}

function createListCachePolicy(entity: string): TCachePolicyList {
  return {
    getBaseTag: () => createListTag(entity),
    getCacheConfig: () => ({ ttl: LISTING_TTL, tagList: [entity, createListTag(entity)] }),
  }
}

function createByIdCachePolicy(entity: string): TCachePolicyById {
  return {
    getBaseTag: (id) => createByIdTag(entity, id),
    getCacheConfig: (id) => ({ ttl: BY_ID_TTL, tagList: [entity, createByIdTag(entity, id)] }),
  }
}

function createSelectionCachePolicy(entity: string): TCachePolicySelection {
  return {
    getBaseTag: () => createSelectionTag(entity),
    getCacheConfig: (idList) => ({
      ttl: SELECTION_TTL,
      tagList: [entity, createSelectionTag(entity), ...idList.map((id) => createByIdTag(entity, id))],
    }),
  }
}

export const CachePolicyHelpers = {
  create: {
    base: createBaseCachePolicy,
    list: createListCachePolicy,
    byId: createByIdCachePolicy,
    selection: createSelectionCachePolicy,
  },
} as const
