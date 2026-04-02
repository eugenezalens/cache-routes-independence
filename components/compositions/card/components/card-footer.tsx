import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TCardFooterProps = ComponentPropsWithoutRef<'footer'>

export function CardFooter({ children, className, ...props }: TCardFooterProps) {
  return (
    <footer className={cn('border-t border-divider pt-sm', className)} {...props}>
      {children}
    </footer>
  )
}
