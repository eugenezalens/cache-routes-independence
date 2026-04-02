import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        'surface-sunken',
        'surface-base',
        'surface-subtle',
        'surface-raised',
        'content-primary',
        'content-secondary',
        'content-muted',
        'content-inverse',
        'primary',
        'primary-hover',
        'primary-active',
        'feedback-error',
        'focus-ring',
        'divider',
        'divider-subtle',
      ],
      spacing: ['xs', 'sm', 'md', 'lg', 'xl'],
      radius: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    classGroups: {
      shadow: [{ shadow: ['sm', 'md'] }],
      'bg-color': [{ bg: ['surface-sunken', 'surface-base', 'surface-subtle', 'surface-raised', 'feedback-error'] }],
      'text-color': [
        {
          text: [
            'content-primary',
            'content-secondary',
            'content-muted',
            'content-inverse',
            'primary',
            'primary-hover',
            'primary-active',
            'feedback-error',
          ],
        },
      ],
      'border-color': [
        { border: ['divider', 'divider-subtle', 'primary', 'primary-hover', 'primary-active', 'feedback-error'] },
      ],
      'ring-color': [{ ring: ['focus-ring', 'primary', 'primary-hover', 'primary-active', 'feedback-error'] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
