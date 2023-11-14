import { GridItem, Text, Flex } from '@chakra-ui/react'
import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { useParams } from 'next/navigation'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'
import { useRecordDetail } from '@/features/shared/hooks/queries/useRecordDetail'
import { notFound } from 'next/navigation'

interface Props {
  gridRow: string
  gridColumn: string
}

export const DetailedRecord: React.FC<Props> = ({ gridRow, gridColumn }) => {
  const { t } = useLooseTypeSafeTranslation('category')
  const params = useParams()
  const category = params?.category as Category
  const id = params?.id as string

  const { data: record, isLoading } = useRecordDetail(category, id)

  if (!isLoading && !record) {
    notFound()
  }

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
        gap="2px"
      >
        <ResponsiveImage
          src={record?.thumbnail}
          alt={record?.title}
          maxHeight="calc(100% - 3vw - 8px)" // where 2.6vw are a texts' line heights, 8px are gaps
          size={'25vw'}
          css={{
            flex: `1 1 calc(100% - 3vw - 8px)`,
          }}
        />

        <Flex
          w="100%"
          color="blueAlpha.100"
          direction="column"
          flex="1"
          justifyContent="space-between"
        >
          <Text
            align="center"
            isTruncated
            textStyle="headingTimesLarge.md"
            fontSize={'clamp(20px, 1.6vw, 40px)'}
            lineHeight={'normal'}
            mb="auto"
          >
            {record?.title}
          </Text>
          <Text
            align="center"
            textStyle="headingTimesLarge.sm"
            fontSize={'clamp(12px, .9vw, 20px)'}
            lineHeight={'normal'}
          >
            {t(toSingularCategory(category))}
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  )
}
