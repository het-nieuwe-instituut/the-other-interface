import { CloudCategory } from '@/features/shared/utils/categories'
import { GridItem } from '@chakra-ui/react'

interface Props {
  category: CloudCategory
}

export const RelatedCategory: React.FC<Props> = ({ category }) => {
  return (
    <GridItem border={'1px solid pink'} color={'white'}>
      {category}
    </GridItem>
  )
}
