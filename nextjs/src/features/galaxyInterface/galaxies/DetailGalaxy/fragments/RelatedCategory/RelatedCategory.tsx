'use client'
import { Grid, GridItem } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record/Record'
import { GridParams } from '@/features/shared/types/position'
import { CloudCategory } from '@/features/shared/utils/categories'
import { keyExtractor } from '@/features/shared/utils/lists'

interface Props extends GridParams {
  category: CloudCategory
  allRelationTotals?: Record<string, number>
}

export const RelatedCategory: React.FC<Props> = ({
  gridRow,
  gridColumn,
  category,
  allRelationTotals,
}) => {
  const { positionedRecords } = usePresenter(category, allRelationTotals)

  return (
    <GridItem color={'white'} gridRow={gridRow} gridColumn={gridColumn}>
      <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
        {positionedRecords.map((record, index) => (
          <Record key={keyExtractor(record.id, index, positionedRecords)} record={record} />
        ))}
      </Grid>
    </GridItem>
  )
}
