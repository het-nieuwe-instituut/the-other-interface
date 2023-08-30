import { Box, GridItem } from '@chakra-ui/react'

interface Props {
  category?: string
}

export const FilterDropdown: React.FC<Props> = ({ category }) => {
  return (
    <GridItem backgroundColor={'navyAlpha.100'} borderRadius={'5px'}>
      {category}
    </GridItem>
  )
}
