import { Text } from '@chakra-ui/react'
import { TableModule } from '@/features/modules/components/TableModule/TableModule'
import { usePresenter } from './usePresenter'
import { ComponentCoreTableBody, ComponentCoreTableHeadItem, Maybe } from 'src/generated/graphql'
import { mapRecordTableData } from './mapRecordTableData'

interface PaginatedTableProps {
  data:
    | {
        name: string
        tableBody: Maybe<ComponentCoreTableBody[]> | undefined
        tableHead: Maybe<ComponentCoreTableHeadItem[]> | undefined
      }
    | undefined
}

export const RecordTable: React.FC = () => {
  const { data } = usePresenter()

  const tableData = mapRecordTableData(data)

  return (
    <>
      {tableData?.map((item, index) => (
        <PaginatedTable data={item} key={index} />
      ))}
    </>
  )
}

const PaginatedTable: React.FC<PaginatedTableProps> = props => {
  const { data } = props
  return (
    <>
      <TableModule
        component={data}
        LoadMore={
          <Text
            as={'button'}
            textDecoration={'underline'}
            textUnderlineOffset={'4px'}
            _hover={{ textDecoration: 'none' }}
            _disabled={{ color: 'grey', textDecoration: 'none', cursor: 'not-allowed' }}
            marginTop={'16px'}
            // disabled={}
            onClick={() => console.log('clicked')}
          >
            Load more
          </Text>
        }
      />
    </>
  )
}
