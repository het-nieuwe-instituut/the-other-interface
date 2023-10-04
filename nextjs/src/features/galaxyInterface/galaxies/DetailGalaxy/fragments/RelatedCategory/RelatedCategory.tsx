'use client'
import { Grid, GridItem } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record/Record'
import { GridParams } from '@/features/shared/types/position'
import { CloudCategory } from '@/features/shared/utils/categories'

interface Props extends GridParams {
  category: CloudCategory
}

export const RelatedCategory: React.FC<Props> = ({ gridRow, gridColumn, category }) => {
  const { positionedRecords } = usePresenter(category)

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
