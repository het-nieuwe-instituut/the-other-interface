import { GridItem, Text, Flex } from '@chakra-ui/react'
import { ResponsiveImage } from '@/features/shared/components/ResponsiveImage/ResponsiveImage'
import { useParams } from 'next/navigation'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Category } from '@/features/shared/utils/categories'
import { toSingularCategory } from '@/features/shared/utils/toSingularCategory'
import { useRecordDetailQuery } from '@/features/record/hooks/useRecordDetailQuery'
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

  const { data: record, isLoading } = useRecordDetailQuery({
    type: category,
    id,
    options: { refetchOnWindowFocus: false },
  })

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
          src={record?.thumbnail?.[0] ?? ''}
          alt={record?.title}
          className="max-h-[calc(100%-3vw-8px)]"
          size={'25vw'}
          style={{
            flex: `1 1 calc(100% - 3vw - 8px)`,
          }}
          disableRightClick
        />

        <Flex w="100%" color="blueAlpha.100" direction="column" flex="1" mt={2}>
          <Text
            align="center"
            isTruncated
            textStyle="headingTimesLarge.md"
            fontSize={{ base: '12px', lg: '20px' }}
            lineHeight={{ base: '12px', lg: '21px' }}
          >
            {record?.title}
          </Text>
          <Text
            align="center"
            textStyle="headingTimesLarge.sm"
            fontSize={{ base: '9px', lg: '12px' }}
            lineHeight={'normal'}
            mt={1}
          >
            {t(toSingularCategory(category))}
          </Text>
        </Flex>
      </Flex>
    </GridItem>
  )
}
