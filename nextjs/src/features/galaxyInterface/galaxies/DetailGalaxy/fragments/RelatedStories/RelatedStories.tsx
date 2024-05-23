import { Grid, GridItem } from '@chakra-ui/react'
import { DetailedRecord } from '../DetailedRecord'
import { usePresenter } from './usePresenter'
import { Record } from '../Record/Record'

interface Props {
  gridRow: string
}

export const RelatedStories: React.FC<Props> = ({ gridRow }) => {
  const { positionedStories } = usePresenter()

  return (
    <GridItem gridRow={gridRow} gridColumn="2" color="white">
      <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(4, 1fr)">
        {positionedStories.map(story => (
          <Record key={story.id} record={story} />
        ))}

        <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" />
      </Grid>
    </GridItem>
  )
}
