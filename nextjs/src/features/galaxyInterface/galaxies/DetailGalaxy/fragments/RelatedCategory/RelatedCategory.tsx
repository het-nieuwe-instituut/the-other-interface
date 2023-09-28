import { CloudCategory } from '@/features/shared/utils/categories'
import { Grid, GridItem } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { GridParams } from '@/features/shared/types/position'
import { Zoom3Relations } from '@/features/pages/tasks/getZoom3Relations'

interface Props extends GridParams {
  category: CloudCategory
  relations: Zoom3Relations
}

export const RelatedCategory: React.FC<Props> = ({
  category,
  gridRow,
  gridColumn,
  relations = [],
}) => {
  const { positionedRecords } = usePresenter(category, relations)

  return (
    <GridItem color={'white'} gridRow={gridRow} gridColumn={gridColumn}>
      <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
        {positionedRecords.map(record => (
          <Record key={record.id} record={record} />
        ))}
      </Grid>
    </GridItem>
  )
}
