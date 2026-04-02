import { isLetter } from '@/utils/predicates'

function getInitial(username?: string): string {
  if (!username) {
    return '?'
  }

  for (const char of username.trim()) {
    if (isLetter(char)) {
      return char.toUpperCase()
    }
  }

  return '?'
}

export const userAvatarHelpers = {
  get: {
    initial: getInitial,
  },
}
