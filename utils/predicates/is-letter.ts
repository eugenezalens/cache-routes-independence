export function isLetter(char: string): boolean {
  return /\p{L}/u.test(char)
}
