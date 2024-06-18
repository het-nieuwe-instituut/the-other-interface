import { Flex, Text, BoxProps } from '@chakra-ui/react'

import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { EntityNames } from 'src/generated/graphql'

type Props = {
  categoryType: EntityNames
  title?: string | null
  css?: BoxProps['css']
}

export const RecordText: React.FC<Props> = ({ title = '', categoryType, css }) => {
  const { t } = useLooseTypeSafeTranslation('category')

  return (
    <Flex
      w="100%"
      color="blueAlpha.100"
      overflow={'hidden'}
      css={css}
      direction="column"
      maxW={'210px'}
      mt={2}
    >
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
        {t(categoryType?.toLowerCase())}
      </Text>
    </Flex>
  )
}
