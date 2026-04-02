'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/helpers'

export type TNavbarLinkProps = ComponentPropsWithoutRef<typeof Link>

export function NavbarLink({ children, className, ...props }: TNavbarLinkProps) {
  const pathName = usePathname()

  const isActive = pathName === props.href.toString()

  return (
    <Link
      className={cn(
        'rounded-sm p-sm text-sm transition hover:bg-surface-raised hover:shadow-sm',
        isActive && 'bg-surface-subtle',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
