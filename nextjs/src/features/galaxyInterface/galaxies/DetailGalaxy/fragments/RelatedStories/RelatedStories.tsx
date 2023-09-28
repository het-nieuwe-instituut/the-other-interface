import { Grid, GridItem } from '@chakra-ui/react'
import { DetailedRecord } from '../DetailedRecord'
import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { Zoom3Record } from '@/features/pages/tasks/getZoom3Record'
import { Zoom3Relations } from '@/features/pages/tasks/getZoom3Relations'

interface Props {
  gridRow: string
  record: Zoom3Record
  relations: Zoom3Relations
}

export const RelatedStories: React.FC<Props> = ({ gridRow, record, relations = [] }) => {
  const { positionedStories } = usePresenter(relations)

  return (
    <GridItem gridRow={gridRow} gridColumn="2" color="white">
      <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(4, 1fr)">
        {positionedStories.map(story => (
          <Record key={story.id} record={story} />
        ))}

        <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" record={record} />
      </Grid>
    </GridItem>
  )
}
