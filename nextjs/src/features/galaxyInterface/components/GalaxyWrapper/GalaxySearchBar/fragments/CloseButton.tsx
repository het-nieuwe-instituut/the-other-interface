import { Button } from '@chakra-ui/react'
import CrossIcon from '@/icons/cross-icon.svg'

type Props = {
  handleClick: () => void
}

export const CloseButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <Button
      bg="transparent"
      border={'none'}
      p={0}
      padding={'0'}
      minWidth="auto"
      onClick={handleClick}
      _hover={{ bg: 'transparent' }}
      _active={{ bg: 'transparent' }}
      transition="transform 0.2s ease-in-out"
    >
      <CrossIcon />
    </Button>
  )
}