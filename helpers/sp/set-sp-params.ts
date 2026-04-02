import { type TUrlSearchParamsInput } from '@/types'

export function setSpParams(searchParams: URLSearchParams, params: TUrlSearchParamsInput): void {
  const entries = Object.entries(params)

  entries.forEach(([key, value]) => {
    if (Array.isArray(value)) {
      searchParams.delete(key)

      value.forEach((item) => {
        searchParams.append(key, String(item))
      })

      return
    }

    searchParams.set(key, String(value))
  })
}
