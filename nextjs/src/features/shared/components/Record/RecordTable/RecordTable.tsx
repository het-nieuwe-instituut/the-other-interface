import { Box, Text } from '@chakra-ui/react'
import { TableModule } from '@/features/modules/components/TableModule/TableModule'
import { usePresenter } from './usePresenter'
import { ComponentCoreTableBody, ComponentCoreTableHeadItem, Maybe } from 'src/generated/graphql'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { Dispatch, SetStateAction, useState } from 'react'
import { theme } from '@/features/shared/styles/theme/theme'
import { useMapRecordTableData } from './useMapRecordTableData'

interface PaginatedTableProps {
  data:
    | {
        type: Category
        name: string
        tableBody: Maybe<ComponentCoreTableBody[]> | undefined
        tableHead: Maybe<ComponentCoreTableHeadItem[]> | undefined
        total: string
      }
    | undefined

  setter: Dispatch<SetStateAction<number>>
  count: number
}

export const RecordTable: React.FC = () => {
  const [people, setPeople] = useState(1)
  const [objects, setObjects] = useState(1)
  const [archives, setArchives] = useState(1)
  const [publications, setPublications] = useState(1)
  const { data } = usePresenter({ people, objects, archives, publications })
  const tableData = useMapRecordTableData(data)

  return (
    <Box maxW={theme.breakpoints.lg} px={6} pt={0}>
      {tableData?.map((item, index) => {
        switch (item?.type) {
          case CATEGORIES.publications:
            return (
              <PaginatedTable
                data={item}
                key={index}
                setter={setPublications}
                count={publications}
              />
            )
          case CATEGORIES.people:
            return <PaginatedTable data={item} key={index} setter={setPeople} count={people} />
          case CATEGORIES.objects:
            return <PaginatedTable data={item} key={index} setter={setObjects} count={objects} />
          case CATEGORIES.archives:
            return <PaginatedTable data={item} key={index} setter={setArchives} count={archives} />
          default:
            null
        }
      })}
    </Box>
  )
}

const PaginatedTable: React.FC<PaginatedTableProps> = props => {
  const { data, setter, count } = props

  return (
    <>
      <TableModule
        component={data}
        count={data?.total}
        LoadMore={
          <>
            {count > 1 && (
              <Text
                as={'button'}
                textDecoration={'underline'}
                textUnderlineOffset={'4px'}
                _hover={{ textDecoration: 'none' }}
                _disabled={{ color: 'grey', textDecoration: 'none', cursor: 'not-allowed' }}
                marginTop={'16px'}
                marginRight={'16px'}
                onClick={() => {
                  setter(prev => prev - 1)
                }}
              >
                Load previous page
              </Text>
            )}
            {count * 5 < parseInt(data?.total ?? '0') && (
              <Text
                as={'button'}
                textDecoration={'underline'}
                textUnderlineOffset={'4px'}
                _hover={{ textDecoration: 'none' }}
                _disabled={{ color: 'grey', textDecoration: 'none', cursor: 'not-allowed' }}
                marginTop={'16px'}
                onClick={() => {
                  setter(prev => prev + 1)
                }}
              >
                Load next page
              </Text>
            )}
          </>
        }
      />
    </>
  )
}
