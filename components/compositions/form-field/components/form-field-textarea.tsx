import { type ComponentPropsWithoutRef } from 'react'

import { Textarea } from '@/components/ui/textarea'

export type TFormFieldTextareaProps = ComponentPropsWithoutRef<typeof Textarea>

export function FormFieldTextarea({ ...props }: TFormFieldTextareaProps) {
  return <Textarea {...props} />
}
