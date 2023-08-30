import { Grid } from '@chakra-ui/react'
import { FilterDropdown } from './fragments'

interface Props {
  category?: string
}

export const GalaxyRecordsFilter: React.FC<Props> = ({ category }) => {
  return (
    <Grid
      height="60px"
      templateColumns="1fr 3fr 1fr"
      gap="5px"
      borderRadius={'5px'}
      backgroundColor={'blueAlpha.100'}
      padding={'5px 20px'}
    >
      <FilterDropdown category={category} />
    </Grid>
  )
}
