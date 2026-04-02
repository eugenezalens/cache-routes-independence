import { Title, type TTitleProps } from '@/components/ui/title'

export type TPageShellTitleProps = TTitleProps

export function PageShellTitle({ children, ...props }: TPageShellTitleProps) {
  return <Title {...props}>{children}</Title>
}
