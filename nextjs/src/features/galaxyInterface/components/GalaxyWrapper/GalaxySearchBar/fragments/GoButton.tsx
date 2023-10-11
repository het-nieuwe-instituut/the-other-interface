import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Flex, Text } from '@chakra-ui/react'

type Props = {
  handleClick: () => void
}

export const GoButton: React.FC<Props> = ({ handleClick }) => {
  const { t } = useTypeSafeTranslation('common')

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
      transition="all 0.2s ease-in-out"
    >
      <Text textStyle="socialLarge.sm">{t('go')}</Text>
    </Flex>
  )
}
