import { Box, Text, BoxProps } from '@chakra-ui/react'

import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CloudCategory } from '@/features/shared/utils/categories'

type Props = {
  categoryType: CloudCategory
  title: string
  css?: BoxProps['css']
}

export const RecordText: React.FC<Props> = ({ title, categoryType, css }) => {
  const { t } = useTypeSafeTranslation('landingpage')

  return (
    <Box w="100%" color="blueAlpha.100" css={css}>
      <Text
        align="center"
        isTruncated
        textStyle="headingTimesLarge.md"
        fontSize={'1.6vw'}
        lineHeight={'1.6vw'}
      >
        {title}
      </Text>
      <Text
        align="center"
        textStyle="headingTimesLarge.sm"
        fontSize={'0.9vw'}
        lineHeight={'0.9vw'}
        mt={'4px'}
      >
        {t(categoryType)}
      </Text>
    </Box>
  )
}
