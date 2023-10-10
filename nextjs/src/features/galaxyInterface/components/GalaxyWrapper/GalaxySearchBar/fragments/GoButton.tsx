import { Flex, Text } from '@chakra-ui/react'

type Props = {
  handleClick: () => void
}

export const GoButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <Flex
      height={'32px'}
      border={'1px solid'}
      borderColor={'navyAlpha.100'}
      p={'6px 8px'}
      borderRadius={'3px'}
      justifyContent={'center'}
      alignItems={'center'}
      onClick={handleClick}
      cursor={'pointer'}
      color={'navyAlpha.100'}
      _hover={{ borderColor: 'transparent', bg: 'navyAlpha.100', color: 'blueAlpha.100' }}
    >
      <Text textStyle="socialLarge.sm">Go</Text>
    </Flex>
  )
}
