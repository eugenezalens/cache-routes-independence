import { EndpointsHelpers } from './endpoints.helpers'
import { type TEndpoints, type TEndpointsConfig } from './endpoints.types'

export function buildEndpoints({ entity }: TEndpointsConfig): TEndpoints {
  const endpoints: TEndpoints = {
    queries: {
      list: EndpointsHelpers.queries.buildList(entity),
      byId: EndpointsHelpers.queries.buildById(entity),
    },
    mutations: {
      create: EndpointsHelpers.mutations.buildCreate(entity),
      update: EndpointsHelpers.mutations.buildUpdate(entity),
    },
  }

  return endpoints
}
