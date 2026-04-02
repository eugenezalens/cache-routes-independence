import { type ComponentPropsWithoutRef } from 'react'

import { Label } from '@/components/ui/label'

export type TFormFieldLabelProps = ComponentPropsWithoutRef<typeof Label>

export function FormFieldLabel({ children, ...props }: TFormFieldLabelProps) {
  return <Label {...props}>{children}</Label>
}
