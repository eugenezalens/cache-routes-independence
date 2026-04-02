import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TPageFallbackProps = ComponentPropsWithoutRef<'div'>

export function PageFallback({ className, children, ...props }: TPageFallbackProps) {
  return (
    <div className={'grid min-h-[calc(100dvh-11.5rem)] w-full place-items-center'} {...props}>
      <div className={cn('flex w-full max-w-3xl flex-col items-center gap-lg p-xl text-center', className)}>
        {children}
      </div>
    </div>
  )
}
