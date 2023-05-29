import React, { ComponentProps, ReactNode } from 'react'

export interface TextProps extends ComponentProps<'p'> {
  children: ReactNode
  tagName?: 'p' | 'span'
}

export function Text({ children, tagName, ...props }: TextProps) {
  const Component = (tagName as React.ElementType) || 'p'

  return (
    <Component className="text-gray-400" {...props}>
      {children}
    </Component>
  )
}

Text.displayName = 'Text'
