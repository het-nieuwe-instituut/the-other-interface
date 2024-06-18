import { Input } from '@chakra-ui/react'

interface Props {
  inputRef: React.RefObject<HTMLInputElement>
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  value?: string
}

export const FilterInput: React.FC<Props> = ({
  placeholder,
  onChange,
  value,
  onFocus,
  inputRef,
}) => {
  return (
    <Input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      bg="transparent"
      border="none"
      padding={0}
      _focus={{
        boxShadow: 'none',
        border: 'none',
      }}
      sx={{
        '::placeholder': {
          color: 'pinkAlpha.50',
        },
      }}
      height="100%"
      className="placeholder:font-social-large font-social-large  text-pink.50 pt-[6px] text-xl"
    />
  )
}
