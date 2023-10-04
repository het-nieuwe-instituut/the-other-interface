import { Box, Text, BoxProps } from '@chakra-ui/react'

import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'

type Props = {
  categoryType: Category
  title?: string | null
  css?: BoxProps['css']
}

export const RecordText: React.FC<Props> = ({ title = '', categoryType, css }) => {
  const { t } = useLooseTypeSafeTranslation('category')

  return (
    <Box w="100%" color="blueAlpha.100" css={css}>
      <Text
        align="center"
        isTruncated
        textStyle="headingTimesLarge.sm"
        fontSize={'clamp(12px, .9vw, 20px)'}
        lineHeight={'normal'}
      >
        {title}
      </Text>
      <Text
        align="center"
        textStyle="headingTimesLarge.sm"
        fontSize={'clamp(9px, .7vw, 18px)'}
        lineHeight={'normal'}
        mt={'2px'}
      >
        {t(toSingularCategory(categoryType))}
      </Text>
    </Box>
  )
}
