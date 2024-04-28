import { Grid, GridItem } from '@chakra-ui/react'
import { DetailedRecord } from '../DetailedRecord'
import { usePresenter } from './usePresenter'
import { Record } from '../Record/Record'
import { AllRelationTotalsType } from '../RelatedCategory'

interface Props {
  gridRow: string
  allRelationTotals?: AllRelationTotalsType
}

export const RelatedStories: React.FC<Props> = ({ gridRow, allRelationTotals }) => {
  const { positionedStories, nextPositionedStories } = usePresenter(allRelationTotals)

  return (
    <>
      <GridItem gridRow={gridRow} gridColumn="2" color="white">
        <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(4, 1fr)">
          {positionedStories.map(story => (
            <Record key={story.id} record={story} />
          ))}

          <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" />
        </Grid>
      </GridItem>

      <GridItem
        gridRow={gridRow}
        gridColumn="2"
        color="white"
        css={{
          zIndex: 10,
          opacity: 0.2,
          filter: 'blur(6px)',
        }}
      >
        <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(4, 1fr)">
          {nextPositionedStories.map(story => (
            <Record key={story.id} record={story} />
          ))}

          <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" />
        </Grid>
      </GridItem>
    </>
  )
}
