import { Flex, Text, BoxProps } from '@chakra-ui/react'

import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CloudCategory } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'

type Props = {
  categoryType: CloudCategory
  title?: string | null
  css?: BoxProps['css']
}

export const RecordText: React.FC<Props> = ({ title = '', categoryType, css }) => {
  const { t } = useLooseTypeSafeTranslation('category')

  return (
    <Flex w="100%" color="blueAlpha.100" css={css} direction="column" flex="1" mt={2}>
      <Text
        align="center"
        isTruncated
        textStyle="headingTimesLarge.md"
        fontSize={{ base: '12px', lg: '20px' }}
        lineHeight={{ base: '12px', lg: '21px' }}
      >
        {title}
      </Text>

      <Text
        align="center"
        textStyle="headingTimesLarge.sm"
        fontSize={{ base: '9px', lg: '12px' }}
        lineHeight={{ base: '9px', lg: '12px' }}
        mt={1}
      >
        {t(toSingularCategory(categoryType))}
      </Text>
    </Flex>
  )
}
