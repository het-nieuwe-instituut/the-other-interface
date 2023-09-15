import { Box, Text, BoxProps } from '@chakra-ui/react'

import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CloudCategory } from '@/features/shared/utils/categories'

type Props = {
  categoryType: CloudCategory
  title: string
  css?: BoxProps['css']
  titleFontSize?: `${string}vw`
  categoryFontSize?: `${string}vw`
}

export const RecordText: React.FC<Props> = ({
  title,
  categoryType,
  css,
  titleFontSize = '1.6vw',
  categoryFontSize = '0.9vw',
}) => {
  const { t } = useTypeSafeTranslation('category')

  return (
    <Box w="100%" color="blueAlpha.100" css={css}>
      <Text
        align="center"
        isTruncated
        textStyle="headingTimesLarge.md"
        fontSize={titleFontSize}
        lineHeight={titleFontSize}
      >
        {title}
      </Text>
      <Text
        align="center"
        textStyle="headingTimesLarge.sm"
        fontSize={categoryFontSize}
        lineHeight={categoryFontSize}
        mt={'4px'}
      >
        {t(categoryType)}
      </Text>
    </Box>
  )
}
