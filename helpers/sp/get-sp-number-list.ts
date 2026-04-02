export function getSpNumberList(searchParams: URLSearchParams, key: string): number[] {
  return searchParams.getAll(key).map(Number)
}
