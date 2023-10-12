import { Input } from '@chakra-ui/react'

interface Props {
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  value?: string
}

export const FilterInput: React.FC<Props> = ({ placeholder, onChange, value, onFocus }) => {
  return (
    <Input
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
      height="100%"
    />
  )
}
