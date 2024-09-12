import { cn } from '@/features/ui/utils/cn'
import React from 'react'

interface Props {
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  defaultValue?: string
}

export const FilterInput = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, onChange, defaultValue, onFocus }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-full w-full border-none bg-transparent p-0 font-social-large text-xl',
          'focus:shadow-none focus:outline-none placeholder-blue-50'
        )}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        defaultValue={defaultValue}
      />
    )
  }
)
FilterInput.displayName = 'FilterInput'
