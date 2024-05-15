'use client'
import { Grid, GridItem } from '@chakra-ui/react'

import { GridParams } from '@/features/shared/types/position'
import { CLOUD_CATEGORIES, CloudCategory } from '@/features/shared/utils/categories'
import { keyExtractor } from '@/features/shared/utils/lists'
import { useContext, useState } from 'react'
import { DetailGalaxyContext } from '../../DetailGalaxy/DetailGalxyContext'
import { Record } from '../Record/Record'
import { usePresenter } from './usePresenter'

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
}

export const RelatedCategory: React.FC<Props> = ({
  gridRow,
  gridColumn,
  category,
  allRelationTotals,
}) => {
  const { positionedRecords, nextPositionedRecords } = usePresenter(category, allRelationTotals)
  const [currentRecord, setCurrentRecord] = useState('')
  const DetailGalaxyContent = useContext(DetailGalaxyContext)

  return (
    <>
      <GridItem color={'white'} gridRow={gridRow} gridColumn={gridColumn} css={{ zIndex: 20 }}>
        <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)">
          {positionedRecords.map((record, index) => (
            <Record
              key={keyExtractor(record.id, index, positionedRecords)}
              record={record}
              onHoverRecord={() => {
                DetailGalaxyContent.setIsRecordHovered(true)
                setCurrentRecord(record.id)
              }}
              onLeaveRecord={() => {
                DetailGalaxyContent.setIsRecordHovered(false)
                setCurrentRecord('')
              }}
              isHovered={DetailGalaxyContent.isRecordHovered}
              currentRecord={currentRecord}
              style={
                DetailGalaxyContent.isRecordHovered && currentRecord !== record.id
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
            <Record
              key={keyExtractor(record.id, index, positionedRecords)}
              record={record}
              tabIndex={-1}
            />
          ))}
        </Grid>
      </GridItem>
    </>
  )
}
