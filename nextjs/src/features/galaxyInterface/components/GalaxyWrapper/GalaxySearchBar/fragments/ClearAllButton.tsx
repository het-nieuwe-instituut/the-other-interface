import { Text } from '@chakra-ui/react'

type Props = {
  handleClick: () => void
}

export const ClearAllButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <Text
      textStyle="socialLarge.sm"
      color={'navyAlpha.100'}
      cursor={'pointer'}
      borderBottom={'1px solid'}
      borderColor={'navyAlpha.100'}
      _hover={{ borderColor: 'transparent', bg: 'navyAlpha.100', color: 'blueAlpha.100' }}
      onClick={handleClick}
      transition="all 0.2s ease-in-out"
    >
      Clear all
    </Text>
  )
}
