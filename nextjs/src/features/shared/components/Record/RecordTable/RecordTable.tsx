import { TableModule } from '@/features/modules/components/TableModule/TableModule'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { NavButton } from '@/features/ui/components/nav-button/component'
import { useMapRecordTableData } from './useMapRecordTableData'
import { useTableRecords } from './useTableRecords'
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
  } = useTableRecords(CATEGORIES.publications)
  const {
    data: archiveData,
    hasNextPage: hasNextPageArchive,
    fetchNextPage: fetchNextPageArchive,
  } = useTableRecords(CATEGORIES.archives)
  const {
    data: objectData,
    hasNextPage: hasNextPageObject,
    fetchNextPage: fetchNextPageObject,
  } = useTableRecords(CATEGORIES.objects)
  const {
    data: peopleData,
    hasNextPage: hasNextPagePeople,
    fetchNextPage: fetchNextPagePeople,
  } = useTableRecords(CATEGORIES.people)

  const publicationTableData = useMapRecordTableData(
    publicationData?.pages,
    CATEGORIES.publications
  )
  const archivesTableData = useMapRecordTableData(archiveData?.pages, CATEGORIES.archives)
  const objectsTableData = useMapRecordTableData(objectData?.pages, CATEGORIES.objects)
  const peoplenTableData = useMapRecordTableData(peopleData?.pages, CATEGORIES.people)

  return (
    <div className="flex max-w-[64em] flex-col gap-20 pb-20 pt-0">
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
      {publicationTableData && (
        <PaginatedTable
          data={publicationTableData}
          hasNextPage={hasNextPagePublication}
          fetchNextPage={fetchNextPagePublications}
        />
      )}
      {peoplenTableData && (
        <PaginatedTable
          data={peoplenTableData}
          hasNextPage={hasNextPagePeople}
          fetchNextPage={fetchNextPagePeople}
        />
      )}
    </div>
  )
}

const PaginatedTable: React.FC<PaginatedTableProps> = props => {
  const { data, fetchNextPage, hasNextPage } = props
  const { t: commonT } = useTypeSafeTranslation('common')
  if (!data) return null
  return (
    <>
      <TableModule
        component={data}
        count={data?.total}
        LoadMore={
          <>
            {hasNextPage && (
              <NavButton variant={'textPrimary'} onClick={fetchNextPage} className="mt-9">
                {commonT('loadMore')}
              </NavButton>
            )}
          </>
        }
      />
    </>
  )
}
