import { Box, Text } from '@chakra-ui/react'
import { TableModule } from '@/features/modules/components/TableModule/TableModule'
import { usePresenter } from './usePresenter'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { theme } from '@/features/shared/styles/theme/theme'
import { useMapRecordTableData } from './useMapRecordTableData'
interface PaginatedTableProps {
  data: {
    type: Category
    name: string
    total: string
  }
  fetchNextPage: () => void
  hasNextPage: boolean | undefined
}

export const RecordTable: React.FC = () => {
  const {
    data: publicationData,
    hasNextPage: hasNextPagePublication,
    fetchNextPage: fetchNextPagePublications,
  } = usePresenter(CATEGORIES.publications)
  const {
    data: archiveData,
    hasNextPage: hasNextPageArchive,
    fetchNextPage: fetchNextPageArchive,
  } = usePresenter(CATEGORIES.archives)
  const {
    data: objectData,
    hasNextPage: hasNextPageObject,
    fetchNextPage: fetchNextPageObject,
  } = usePresenter(CATEGORIES.objects)
  const {
    data: peopleData,
    hasNextPage: hasNextPagePeople,
    fetchNextPage: fetchNextPagePeople,
  } = usePresenter(CATEGORIES.people)

  const publicationTableData = useMapRecordTableData(
    publicationData?.pages,
    CATEGORIES.publications
  )
  const archivesTableData = useMapRecordTableData(archiveData?.pages, CATEGORIES.archives)
  const objectsTableData = useMapRecordTableData(objectData?.pages, CATEGORIES.objects)
  const peoplenTableData = useMapRecordTableData(peopleData?.pages, CATEGORIES.people)

  return (
    <Box maxW={theme.breakpoints.lg} px={6} pt={0}>
      {publicationTableData && (
        <PaginatedTable
          data={publicationTableData}
          hasNextPage={hasNextPagePublication}
          fetchNextPage={fetchNextPagePublications}
        />
      )}
      {archivesTableData && (
        <PaginatedTable
          data={archivesTableData}
          hasNextPage={hasNextPageArchive}
          fetchNextPage={fetchNextPageArchive}
        />
      )}
      {objectsTableData && (
        <PaginatedTable
          data={objectsTableData}
          hasNextPage={hasNextPageObject}
          fetchNextPage={fetchNextPageObject}
        />
      )}
      {peoplenTableData && (
        <PaginatedTable
          data={peoplenTableData}
          hasNextPage={hasNextPagePeople}
          fetchNextPage={fetchNextPagePeople}
        />
      )}
    </Box>
  )
}

const PaginatedTable: React.FC<PaginatedTableProps> = props => {
  const { data, fetchNextPage, hasNextPage } = props

  return (
    <>
      <TableModule
        component={data}
        count={data?.total}
        LoadMore={
          <>
            {hasNextPage && (
              <Text
                as={'button'}
                textDecoration={'underline'}
                textUnderlineOffset={'4px'}
                _hover={{ textDecoration: 'none' }}
                _disabled={{ color: 'grey', textDecoration: 'none', cursor: 'not-allowed' }}
                marginTop={'16px'}
                marginRight={'16px'}
                onClick={fetchNextPage}
              >
                Load More
              </Text>
            )}
          </>
        }
      />
    </>
  )
}
