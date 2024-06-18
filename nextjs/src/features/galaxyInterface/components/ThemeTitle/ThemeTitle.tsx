import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Text } from '@chakra-ui/react'
import { HOMEPAGE_Z_INDEXES } from '../../galaxies/MainGalaxy/fragments/constants'

interface Props {
  title?: string
}

export const ThemeTitle: React.FC<Props> = ({ title }) => {
  const { t } = useLooseTypeSafeTranslation('homepage')

  if (!title) return null

  return (
    <Text
      position={'absolute'}
      bottom={`calc(${GALAXY_EDITORIAL_LAYER_PART} + 96px)`}
      left={6}
      maxWidth={'70vw'}
      isTruncated
      color={'blueAlpha.100'}
      textStyle="headingTimesLarge.2xl"
      fontSize={{ base: '32px', lg: '64px' }}
      lineHeight={{
        base: '33.6px',
        lg: '64px',
      }}
      pointerEvents={'none'}
      zIndex={HOMEPAGE_Z_INDEXES.THEME_TITLE}
    >
      {t('storiesOver', {
        title,
      })}
    </Text>
  )
}
