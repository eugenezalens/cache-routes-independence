import { toKebabCase, toWordList } from '@/utils/strings'

export function createHeadingId(prefix: string, suffix?: string): string {
  const wordList = toWordList(prefix)
  const baseId = toKebabCase(wordList)

  if (suffix) {
    return `${baseId}-${suffix}`
  }

  return baseId
}
