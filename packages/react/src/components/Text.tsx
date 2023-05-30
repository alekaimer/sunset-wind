import React, { ComponentProps, ReactNode } from 'react'
import { clsx } from 'clsx'

export interface TextProps extends ComponentProps<'p'> {
  children: ReactNode
  tagName?: 'p' | 'span'
}

export function Text({ children, tagName, className, ...props }: TextProps) {
  const Component = (tagName as React.ElementType) || 'p'

  return (
    <Component className={clsx('text-gray-400', className)} {...props}>
      {children}
    </Component>
  )
}

Text.displayName = 'Text'
