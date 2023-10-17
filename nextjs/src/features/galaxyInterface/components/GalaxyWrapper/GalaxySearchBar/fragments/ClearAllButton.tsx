import { Text, Button } from '@chakra-ui/react'

type Props = {
  handleClick: () => void
}

export const ClearAllButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <Button
      bg="transparent"
      border={'none'}
      padding={'0'}
      minWidth="auto"
      borderRadius={'0'}
      onClick={handleClick}
      color={'navyAlpha.100'}
      _hover={{ bg: 'navyAlpha.100', color: 'blueAlpha.100' }}
      _focus={{ boxShadow: 'none' }}
      transition="all 0.2s ease-in-out"
    >
      <Text textStyle="socialLarge.md" textDecoration="underline">
        clearAll
      </Text>
    </Button>
  )
}
