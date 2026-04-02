export function normalizeNumberList(list: readonly number[]): number[] {
  return Array.from(new Set(list))
    .filter((v) => Number.isInteger(v))
    .sort((a, b) => a - b)
}
