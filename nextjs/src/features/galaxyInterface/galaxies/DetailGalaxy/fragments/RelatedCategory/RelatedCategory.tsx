'use client'
import { Grid, GridItem } from '@chakra-ui/react'
import { useParams } from 'next/navigation'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { GridParams } from '@/features/shared/types/position'
import { useRecordRelations } from '@/features/shared/hooks/queries/useRecordRelations'
import { CloudCategory } from '@/features/shared/utils/categories'

interface Props extends GridParams {
  category: CloudCategory
}

export const RelatedCategory: React.FC<Props> = ({ gridRow, gridColumn, category }) => {
  const params = useParams()
  const id = params?.id as string
  const { data } = useRecordRelations(category, id)
  const { positionedRecords } = usePresenter(category, data?.relations)

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
