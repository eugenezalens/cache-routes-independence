export function toKebabCase(wordList: string[]): string {
  return wordList.map((word) => word.toLowerCase()).join('-')
}
