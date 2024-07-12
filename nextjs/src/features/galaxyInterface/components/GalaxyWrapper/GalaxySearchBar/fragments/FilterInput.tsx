import { cn } from '@/features/ui/utils/cn'

interface Props {
  inputRef: React.RefObject<HTMLInputElement>
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  defaultValue?: string
}

export const FilterInput: React.FC<Props> = ({
  placeholder,
  onChange,
  defaultValue,
  onFocus,
  inputRef,
}) => {
  return (
    <input
      className={cn(
        'h-full w-full border-none bg-transparent p-0 font-social-large text-xl',
        'focus:shadow-none focus:outline-none'
      )}
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      defaultValue={defaultValue}
    />
  )
}
