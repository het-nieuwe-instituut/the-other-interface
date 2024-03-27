import { Text } from '@chakra-ui/react'
import { TableModule } from '@/features/modules/components/TableModule/TableModule'
import { usePresenter } from './usePresenter'
import { ComponentCoreTableBody, ComponentCoreTableHeadItem, Maybe } from 'src/generated/graphql'
import { mapRecordTableData } from './mapRecordTableData'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { Dispatch, SetStateAction, useState } from 'react'

interface PaginatedTableProps {
  data:
    | {
        type: Category
        name: string
        tableBody: Maybe<ComponentCoreTableBody[]> | undefined
        tableHead: Maybe<ComponentCoreTableHeadItem[]> | undefined
      }
    | undefined

  setters: {
    setPeople: Dispatch<SetStateAction<number>>
    setObjects: Dispatch<SetStateAction<number>>
    setArchives: Dispatch<SetStateAction<number>>
    setPublications: Dispatch<SetStateAction<number>>
  }
}

export const RecordTable: React.FC = () => {
  const [people, setPeople] = useState(1)
  const [objects, setObjects] = useState(1)
  const [archives, setArchives] = useState(1)
  const [publications, setPublications] = useState(1)
  const { data } = usePresenter({ people, objects, archives, publications })
  const tableData = mapRecordTableData(data)

  return (
    <>
      {tableData?.map((item, index) => (
        <PaginatedTable
          data={item}
          key={index}
          setters={{ setPeople, setObjects, setArchives, setPublications }}
        />
      ))}
    </>
  )
}

const PaginatedTable: React.FC<PaginatedTableProps> = props => {
  const { data, setters } = props

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
            onClick={() => {
              if (data?.type === CATEGORIES.objects) {
                setters.setObjects(prev => prev + 1)
              }

              if (data?.type === CATEGORIES.people) {
                setters.setPeople(prev => prev + 1)
              }

              if (data?.type === CATEGORIES.publications) {
                setters.setPublications(prev => prev + 1)
              }

              if (data?.type === CATEGORIES.archives) {
                setters.setArchives(prev => prev + 1)
              }
            }}
          >
            Load more
          </Text>
        }
      />
    </>
  )
}
