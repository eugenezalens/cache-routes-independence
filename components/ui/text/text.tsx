import { type ComponentPropsWithoutRef } from 'react'

export type TTextProps = ComponentPropsWithoutRef<'p'>

export function Text({ children, ...props }: TTextProps) {
  return <p {...props}>{children}</p>
}
