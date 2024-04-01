import { Box, Text } from '@chakra-ui/react'
import { TableModule } from '@/features/modules/components/TableModule/TableModule'
import { usePresenter } from './usePresenter'
import { ComponentCoreTableBody, ComponentCoreTableHeadItem, Maybe } from 'src/generated/graphql'
import { mapRecordTableData } from './mapRecordTableData'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { Dispatch, SetStateAction, useState } from 'react'
import { theme } from '@/features/shared/styles/theme/theme'
import { useParams } from 'next/navigation'

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

  setters: {
    setPeople: Dispatch<SetStateAction<number>>
    setObjects: Dispatch<SetStateAction<number>>
    setArchives: Dispatch<SetStateAction<number>>
    setPublications: Dispatch<SetStateAction<number>>
  }
  counts: {
    people: number
    objects: number
    archives: number
    publications: number
  }
}

export const RecordTable: React.FC = () => {
  const params = useParams()
  const type = params?.category as Category

  const [people, setPeople] = useState(1)
  const [objects, setObjects] = useState(1)
  const [archives, setArchives] = useState(1)
  const [publications, setPublications] = useState(1)
  const { data } = usePresenter({ people, objects, archives, publications })
  const tableData = mapRecordTableData(data, type)

  return (
    <Box maxW={theme.breakpoints.lg} px={6} pt={0}>
      {tableData?.map((item, index) => (
        <PaginatedTable
          data={item}
          key={index}
          setters={{ setPeople, setObjects, setArchives, setPublications }}
          counts={{ people, objects, archives, publications }}
        />
      ))}
    </Box>
  )
}

const PaginatedTable: React.FC<PaginatedTableProps> = props => {
  const { data, setters, counts } = props

  return (
    <>
      <TableModule
        component={data}
        count={data?.total}
        LoadMore={
          <Text
            as={'button'}
            textDecoration={'underline'}
            textUnderlineOffset={'4px'}
            _hover={{ textDecoration: 'none' }}
            _disabled={{ color: 'grey', textDecoration: 'none', cursor: 'not-allowed' }}
            marginTop={'16px'}
            disabled={counts.people * 5 >= parseInt(data?.total ?? '0')}
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
