import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Text } from '@chakra-ui/react'

interface Props {
  title?: string
}

export const ThemeTitle: React.FC<Props> = ({ title }) => {
  const { t } = useLooseTypeSafeTranslation('homepage')

  if (!title) return null

  return (
    <Text
      position={'absolute'}
      bottom={`calc(${GALAXY_EDITORIAL_LAYER_PART} + 9%)`}
      left={6}
      maxWidth={'65vw'}
      isTruncated
      color={'blueAlpha.100'}
      textStyle="headingTimesLarge.2xl"
      fontSize={'7.5vw'}
      lineHeight={'7.5vw'}
    >
      {t('storiesOver', {
        title,
      })}
    </Text>
  )
}
