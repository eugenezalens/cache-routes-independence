export type TUrlParamsValue = string | string[] | undefined
export type TUrlParams = Record<string, TUrlParamsValue>

export type TServerPageParams<TParams extends TUrlParams = TUrlParams> = Promise<TParams>
export type TServerPageSearchParams<TSearchParams extends TUrlParams = TUrlParams> = Promise<TSearchParams>

export type TServerPageProps<TParams extends TUrlParams = TUrlParams, TSearchParams extends TUrlParams = TUrlParams> = {
  params: TServerPageParams<TParams>
  searchParams: TServerPageSearchParams<TSearchParams>
}

export type TUrlSearchParamsInput = Record<string, string | number | boolean | (string | number | boolean)[]>
