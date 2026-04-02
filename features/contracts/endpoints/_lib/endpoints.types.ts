type TQueryEndpoint<TParamList extends unknown[] = []> = {
  getPath: (...paramList: TParamList) => string
  getBff: (...paramList: TParamList) => string
}

export type TQueryListEndpoint = TQueryEndpoint
export type TQueryByIdEndpoint = TQueryEndpoint<[id: number]>

export type TQueryEndpoints = {
  list: TQueryListEndpoint
  byId: TQueryByIdEndpoint
}

export type TMutationCreateEndpoint = {
  getPath: () => string
}

export type TMutationUpdateEndpoint = {
  getPath: (id: number) => string
}

export type TMutationEndpoints = {
  create: TMutationCreateEndpoint
  update: TMutationUpdateEndpoint
}

export type TEndpointsConfig = {
  entity: string
}

export type TEndpoints = {
  queries: TQueryEndpoints
  mutations: TMutationEndpoints
}
