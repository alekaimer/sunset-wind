import { ComponentProps, ReactNode } from 'react'

export interface TextProps extends ComponentProps<'p'> {
  children: ReactNode
}

export function Text({ children, ...props }: TextProps) {
  return (
    <p className="text-red-700" {...props}>
      {children}
    </p>
  )
}

Text.displayName = 'Text'
