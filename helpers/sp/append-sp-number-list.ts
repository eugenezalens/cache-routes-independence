import { normalizeNumberList } from '@/utils/normalize'

export function appendSpNumberList(searchParams: URLSearchParams, key: string, list: readonly number[]): void {
  const normalized = normalizeNumberList(list)

  normalized.forEach((value) => {
    searchParams.append(key, String(value))
  })
}
