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
        'flex items-center justify-center py-3 px-4 bg-primary300 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
