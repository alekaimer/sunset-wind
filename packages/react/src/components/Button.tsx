import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // size: "sm" | "md" | "lg";
  children: ReactNode
  asChild?: boolean
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      className={clsx(
        `
          flex items-center justify-center py-3 px-4 bg-primary-500 rounded-full font-semibold text-gray-200 text-sm w-full 
          hover:bg-opacity-80
          active:bg-primary-400
          focus:outline-none focus:ring-1 focus:ring-info-default focus:ring-offset-1 focus:ring-offset-info-default
        `,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
