import { Grid, GridItem } from '@chakra-ui/react'

export const GalaxyRecordsFilter: React.FC = () => {
  return (
    <Grid height="60px" templateColumns="1fr 1fr 1fr" gap="5px" border="1px solid red">
      <GridItem border="1px solid blue">Pagination</GridItem>

      <GridItem border="1px solid blue">Navigation</GridItem>
    </Grid>
  )
}
