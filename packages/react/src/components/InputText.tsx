import { ComponentProps, forwardRef, ElementRef } from 'react'
import { clsx } from 'clsx'

export interface InputTextProps extends ComponentProps<'input'> {
  prefix?: string
}

export const InputText = forwardRef<ElementRef<'input'>, InputTextProps>(
  ({ prefix, className, ...props }: InputTextProps, ref) => {
    return (
      <div
        className={clsx(
          `
          flex items-center border border-gray-300 rounded-md transition-all
          px-3 py-2
          hover:border-info-default
          focus-within:ring-1 focus-within:ring-info-default focus-within:border-info-default
          `,
          className,
        )}
      >
        {!!prefix && <span className="text-gray-400">{prefix}</span>}
        <input
          ref={ref}
          {...props}
          className="
            w-full
            bg-transparent
            placeholder-gray-600 text-gray-300
            focus:outline-none
          "
        />
      </div>
    )
  },
)

InputText.displayName = 'InputText'

export default InputText
