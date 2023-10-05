import { Input } from '@chakra-ui/react'

interface Props {
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  value?: string
}

export const FilterInput: React.FC<Props> = ({ placeholder, onChange, value }) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      bg="transparent"
      border="none"
      _focus={{
        boxShadow: 'none',
        border: 'none',
      }}
      height="100%"
    />
  )
}
