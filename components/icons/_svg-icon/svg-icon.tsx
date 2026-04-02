import Image from 'next/image'
import { type ComponentPropsWithoutRef } from 'react'

export type TSvgIconProps = ComponentPropsWithoutRef<typeof Image>

export function SvgIcon({ src, alt, height = 28, width = 28, ...props }: TSvgIconProps) {
  return <Image src={src} alt={alt} height={height} width={width} {...props} />
}
