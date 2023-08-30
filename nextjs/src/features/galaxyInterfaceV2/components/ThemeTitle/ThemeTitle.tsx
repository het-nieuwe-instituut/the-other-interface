import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Text } from '@chakra-ui/react'

interface Props {
  title: string
}

export const ThemeTitle: React.FC<Props> = ({ title }) => {
  const { t } = useLooseTypeSafeTranslation('homepage')
  return (
    <Text
      textStyle="headingTimesLarge.2xl"
      position={'absolute'}
      bottom="80px"
      left="24px"
      color={'blueAlpha.100'}
      noOfLines={1}
    >
      {t('storiesOver', {
        title,
      })}
    </Text>
  )
}
