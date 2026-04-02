import { type ComponentPropsWithoutRef } from 'react'

export type TPaginationEllipsisProps = Omit<ComponentPropsWithoutRef<'span'>, 'children'>

export function PaginationEllipsis({ className, ...props }: TPaginationEllipsisProps) {
  return (
    <span aria-hidden className={className} {...props}>
      &#8230;
    </span>
  )
}
