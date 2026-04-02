export const ButtonStyles = {
  base: 'cursor-pointer rounded-md bg-primary px-4 py-2 text-content-inverse shadow-sm',
  interactive:
    'transition hover:bg-primary-hover hover:shadow-md focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:outline-none active:bg-primary-active',
  disabled: 'opacity-50 cursor-not-allowed',
} as const
