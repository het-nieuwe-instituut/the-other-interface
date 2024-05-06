'use client'
import { Grid, GridItem } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record/Record'
import { GridParams } from '@/features/shared/types/position'
import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { keyExtractor } from '@/features/shared/utils/lists'
import { Dispatch, SetStateAction, useState } from 'react'

export interface AllRelationTotalsType {
  [CLOUD_CATEGORIES.archives]: number
  [CLOUD_CATEGORIES.people]: number
  [CLOUD_CATEGORIES.publications]: number
  [CLOUD_CATEGORIES.objects]: number
  stories: number
}

interface Props extends GridParams {
  category: CloudCategory
  allRelationTotals?: AllRelationTotalsType
  setIsHovered: Dispatch<SetStateAction<boolean>>
  isHovered: boolean
}

export const RelatedCategory: React.FC<Props> = ({
  gridRow,
  gridColumn,
  category,
  allRelationTotals,
  setIsHovered,
  isHovered,
}) => {
  const { positionedRecords, nextPositionedRecords } = usePresenter(category, allRelationTotals)
  const [currentRecord, setCurrentRecord] = useState('')

  return (
    <>
      <GridItem color={'white'} gridRow={gridRow} gridColumn={gridColumn} css={{ zIndex: 20 }}>
        <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
          {positionedRecords.map((record, index) => (
            <Record
              key={keyExtractor(record.id, index, positionedRecords)}
              record={record}
              setIsHovered={setIsHovered}
              setCurrentRecord={setCurrentRecord}
              style={
                isHovered && currentRecord !== record.id
                  ? {
                      opacity: 0.2,
                      filter: 'blur(6px)',
                      transition: 'opacity 0.3s ease-in-out',
                    }
                  : {}
              }
            />
          ))}
        </Grid>
      </GridItem>
      <GridItem
        color={'white'}
        gridRow={gridRow}
        gridColumn={gridColumn}
        css={{
          zIndex: 10,
          opacity: 0.2,
          filter: 'blur(6px)',
        }}
      >
        <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
          {nextPositionedRecords.map((record, index) => (
            <Record key={keyExtractor(record.id, index, positionedRecords)} record={record} />
          ))}
        </Grid>
      </GridItem>
    </>
  )
}
