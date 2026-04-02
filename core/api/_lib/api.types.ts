export type TApiResult<TData = unknown> = {
  data: TData
  headers: Headers
  status: number
}

export type TUrlBuilderConfig = {
  path: string
  searchParams?: URLSearchParams
}

export type TCacheBuilderConfig = {
  ttl: number
  tagList: string[]
}
