import { type TUrlSearchParamsInput } from '@/types'

type TEmptyUrlParams = Record<never, never>
type TEmptyRouteConfig = Record<never, never>

type TConfig<
  TParams extends TUrlSearchParamsInput = TEmptyUrlParams,
  TSearchParams extends TUrlSearchParamsInput = TUrlSearchParamsInput,
> = (keyof TParams extends never ? TEmptyRouteConfig : { params: TParams }) & {
  searchParams?: TSearchParams
}

type TGetRoute<
  TParams extends TUrlSearchParamsInput = TEmptyUrlParams,
  TSearchParams extends TUrlSearchParamsInput = TUrlSearchParamsInput,
> = keyof TParams extends never
  ? (config?: TConfig<TParams, TSearchParams>) => string
  : (config: TConfig<TParams, TSearchParams>) => string

export type TGetBrowseRoute = TGetRoute
export type TGetDetailsRoute = TGetRoute<{ id: number }>
export type TGetCreateRoute = TGetRoute
export type TGetEditRoute = TGetRoute<{ id: number }>

export type TRoutesConfig = {
  pluralEntity: string
  singularEntity: string
}

export type TRoutes = {
  browse: TGetBrowseRoute
  details: TGetDetailsRoute
  create: TGetCreateRoute
  edit: TGetEditRoute
}
