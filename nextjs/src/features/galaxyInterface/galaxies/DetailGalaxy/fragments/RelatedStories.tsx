import { Grid, GridItem } from '@chakra-ui/react'
import { DetailedRecord } from './DetailedRecord'

interface Props {
  gridRow: string
}

export const RelatedStories: React.FC<Props> = ({ gridRow }) => {
  return (
    <GridItem gridRow={gridRow} gridColumn="2" border="1px solid pink" color="white">
      <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="1fr 2fr 1fr">
        <GridItem border="1px solid blue">story</GridItem>
        <GridItem border="1px solid blue">story</GridItem>
        <GridItem border="1px solid blue">story</GridItem>
        <GridItem border="1px solid blue">story</GridItem>

        <DetailedRecord gridRow="2 / 3" gridColumn="1 / 3" />
      </Grid>
    </GridItem>
  )
}
