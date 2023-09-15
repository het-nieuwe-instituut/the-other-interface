import { Box, GridItem, Text, Flex } from '@chakra-ui/react'
import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { useParams } from 'next/navigation'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'

import { fakeDetailedRecord } from '../fakeData'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'

interface Props {
  gridRow: string
  gridColumn: string
}

export const DetailedRecord: React.FC<Props> = ({ gridRow, gridColumn }) => {
  const { t } = useLooseTypeSafeTranslation('category')
  const { title, thumbnail } = fakeDetailedRecord
  const params = useParams()
  const category = params?.category as Category

  return (
    <GridItem
      border={'1px solid pink'}
      color={'white'}
      gridRow={gridRow}
      gridColumn={gridColumn}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        position="relative"
        w="80%"
        h="80%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="12px"
        border={'1px solid red'}
      >
        <ResponsiveImage
          src={thumbnail}
          alt={title}
          maxHeight={!thumbnail ? '100%' : 'calc(100% - 2.5vw - 20px)'} // where 2.6vw are a texts' line heights, 16px are gaps
        />

        <Box w="100%" color="blueAlpha.100" position={!thumbnail ? 'absolute' : 'relative'}>
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
            mt={'8px'}
          >
            {t(toSingularCategory(category))}
          </Text>
        </Box>
      </Flex>
    </GridItem>
  )
}
