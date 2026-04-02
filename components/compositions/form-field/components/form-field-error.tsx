import { type ComponentPropsWithoutRef } from 'react'

import { Text } from '@/components/ui/text'

import { cn } from '@/helpers'

export type TFormFieldErrorProps = ComponentPropsWithoutRef<typeof Text>

export function FormFieldError({ children, className, ...props }: TFormFieldErrorProps) {
  return (
    <Text className={cn('text-feedback-error', className)} {...props}>
      {children}
    </Text>
  )
}
