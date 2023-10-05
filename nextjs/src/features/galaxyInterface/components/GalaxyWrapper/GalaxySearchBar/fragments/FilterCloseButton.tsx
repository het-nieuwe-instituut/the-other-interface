import { Button } from '@chakra-ui/react'
import CrossIcon from '@/icons/cross-icon.svg'

export const FilterCloseButton: React.FC = () => {
  return (
    <Button
      bg="transparent"
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      border={'none'}
      p={0}
    >
      <CrossIcon boxSize="20px" />
    </Button>
  )
}
