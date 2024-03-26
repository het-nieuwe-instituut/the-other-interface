import { Text } from '@chakra-ui/react'
import { TableModule } from '@/features/modules/components/TableModule/TableModule'
import { usePresenter } from './usePresenter'

export const RecordTable: React.FC = () => {
  const { data } = usePresenter()
  console.log('data', data)
  const testData = {
    name: 'test title',
    description: 'test description',
    tableBody: [],
    tableHead: [],
  }

  return (
    <>
      <TableModule
        component={testData}
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
