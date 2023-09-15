import { Box, Text, BoxProps } from '@chakra-ui/react'

import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'

type Props = {
  categoryType: Category
  title: string
  css?: BoxProps['css']
}

export const RecordText: React.FC<Props> = ({ title, categoryType, css }) => {
  const { t } = useLooseTypeSafeTranslation('category')

  return (
    <Box w="100%" color="blueAlpha.100" css={css}>
      <Text
        align="center"
        isTruncated
        textStyle="headingTimesLarge.sm"
        fontSize={'0.9vw'}
        lineHeight={'0.9vw'}
      >
        {title}
      </Text>
      <Text
        align="center"
        textStyle="headingTimesLarge.sm"
        fontSize={'0.7vw'}
        lineHeight={'0.7vw'}
        mt={'4px'}
      >
        {t(toSingularCategory(categoryType))}
      </Text>
    </Box>
  )
}
