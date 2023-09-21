import { Box, GridItem, Text, Flex } from '@chakra-ui/react'
import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { useParams } from 'next/navigation'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'
import { Zoom3Record } from '@/features/pages/tasks/getZoom3Record'

interface Props {
  gridRow: string
  gridColumn: string
  record: Zoom3Record
}

export const DetailedRecord: React.FC<Props> = ({ gridRow, gridColumn, record }) => {
  const { t } = useLooseTypeSafeTranslation('category')
  const params = useParams()
  const category = params?.category as Category

  return (
    <GridItem
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
      >
        <ResponsiveImage
          src={record?.image}
          alt={record?.title}
          maxHeight={!record?.image ? '100%' : 'calc(100% - 2.5vw - 20px)'} // where 2.6vw are a texts' line heights, 16px are gaps
        />

        <Box w="100%" color="blueAlpha.100" position={!record?.image ? 'absolute' : 'relative'}>
          <Text
            align="center"
            isTruncated
            textStyle="headingTimesLarge.md"
            fontSize={'1.6vw'}
            lineHeight={'1.6vw'}
          >
            {record?.title}
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
