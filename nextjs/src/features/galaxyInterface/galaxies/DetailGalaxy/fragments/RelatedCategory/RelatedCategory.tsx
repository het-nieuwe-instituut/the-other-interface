'use client'
import { Grid, GridItem } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record/Record'
import { GridParams } from '@/features/shared/types/position'
import { CloudCategory } from '@/features/shared/utils/categories'
import { keyExtractor } from '@/features/shared/utils/lists'

interface Props extends GridParams {
  category: CloudCategory
}

export const RelatedCategory: React.FC<Props> = ({ gridRow, gridColumn, category }) => {
  // this is fetching the id for the related items by category
  const { positionedRecords } = usePresenter(category)

  return (
    <GridItem color={'white'} gridRow={gridRow} gridColumn={gridColumn}>
      <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
        {positionedRecords.map((record, index) => (
          // the Record is then using the id to fetch the details of the related item
          <Record key={keyExtractor(record.id, index, positionedRecords)} record={record} />
        ))}
      </Grid>
    </GridItem>
  )
}
