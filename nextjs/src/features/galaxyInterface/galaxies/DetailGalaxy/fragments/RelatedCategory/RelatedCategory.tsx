import { CloudCategory } from '@/features/shared/utils/categories'
import { Grid, GridItem } from '@chakra-ui/react'

import { fakeRelations } from '../../fakeData'
import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { GridParams } from '../types'

interface Props extends GridParams {
  category: CloudCategory
}

export const RelatedCategory: React.FC<Props> = ({ category, gridRow, gridColumn }) => {
  const { positionedStories } = usePresenter(category, fakeRelations)

  return (
    <GridItem color={'white'} gridRow={gridRow} gridColumn={gridColumn}>
      <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
        {positionedStories.map(story => (
          <Record key={story.id} record={story} />
        ))}
      </Grid>
    </GridItem>
  )
}
