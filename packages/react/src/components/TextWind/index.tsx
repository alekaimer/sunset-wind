import { ComponentProps, ReactNode } from 'react'

export interface TextWindProps extends ComponentProps<'p'> {
  children: ReactNode
}

export function TextWind({ children, ...props }: TextWindProps) {
  return (
    <p className="text-red-700" {...props}>
      {children}
    </p>
  )
}

TextWind.displayName = 'TextWind'
