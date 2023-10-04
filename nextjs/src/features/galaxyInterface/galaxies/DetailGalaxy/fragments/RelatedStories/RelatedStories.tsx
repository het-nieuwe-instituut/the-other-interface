import { Box, Grid, GridItem } from '@chakra-ui/react'
import { DetailedRecord } from '../DetailedRecord'
import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { useParams } from 'next/navigation'
import { useRecordRelations } from '@/features/shared/hooks/queries/useRecordRelations'
import { CloudCategory } from '@/features/shared/utils/categories'

interface Props {
  gridRow: string
}

export const RelatedStories: React.FC<Props> = ({ gridRow }) => {
  const params = useParams()
  const category = params?.category as CloudCategory
  const id = params?.id as string
  const { data, isLoading } = useRecordRelations(category, id)

  const { positionedStories } = usePresenter(data?.relations)

  return (
    <GridItem gridRow={gridRow} gridColumn="2" color="white">
      <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(4, 1fr)">
        {positionedStories.map(story => (
          <Record key={story.id} record={story} />
        ))}

        {isLoading && <Box color="white">Data is loading...</Box>}

        <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" />
      </Grid>
    </GridItem>
  )
}
