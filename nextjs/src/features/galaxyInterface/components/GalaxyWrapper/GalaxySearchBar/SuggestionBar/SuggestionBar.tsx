import { FOOTER_Z_INDEX } from '@/features/shared/constants/mainConstants'
import { Flex } from '@chakra-ui/react'

interface Props {
  isOpen?: boolean
}

export const SuggestionBar: React.FC<Props> = ({ isOpen = false }) => {
  return (
    <Flex
      position={'absolute'}
      bottom={'60px'}
      height="75px"
      width={'100%'}
      gap="5px"
      borderRadius={'5px 5px 0 0'}
      backgroundColor={'blueAlpha.80'}
      padding={'5px 20px'}
      zIndex={FOOTER_Z_INDEX - 1}
      transform={isOpen ? 'translateY(0)' : 'translateY(100%)'}
      transition={
        'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
      }
      opacity={isOpen ? 1 : 0}
      visibility={isOpen ? 'visible' : 'hidden'}
    ></Flex>
  )
}
