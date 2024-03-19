import { Text } from '@chakra-ui/react'
import { TableModule } from '@/features/modules/components/TableModule/TableModule'
export const RecordTableWrapper: React.FC = () => {
  // const { } = usePresenter()

  return (
    <>
      <TableModule
        component={{
          name: 'test',
          description: 'test',
          tableBody: [],
          tableHead: [],
        }}
        LoadMore={
          <Text
            as={'button'}
            textDecoration={'underline'}
            textUnderlineOffset={'4px'}
            _hover={{ textDecoration: 'none' }}
            _disabled={{ color: 'grey', textDecoration: 'none', cursor: 'not-allowed' }}
            marginTop={'16px'}
            // disabled={}
            // onClick={() => {}}
          >
            Load more
          </Text>
        }
      />
    </>
  )
}
