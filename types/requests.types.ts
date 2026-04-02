export type TPaginationParams = {
  page: number
  limit: number
}

export type TRequestParams = { [key: string]: string | number }

export type TAllowedUrlParams = Record<string, string | number | boolean>
