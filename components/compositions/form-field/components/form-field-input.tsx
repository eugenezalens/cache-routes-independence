import { type ComponentPropsWithoutRef } from 'react'

import { Input } from '@/components/ui/input'

export type TFormFieldInputProps = ComponentPropsWithoutRef<typeof Input>

export function FormFieldInput({ ...props }: TFormFieldInputProps) {
  return <Input {...props} />
}
