import { Grid, GridItem } from '@chakra-ui/react'
import { DetailedRecord } from '../DetailedRecord'
import { usePresenter } from './usePresenter'
import { Record } from '../Record/Record'
import { AllRelationTotalsType } from '../RelatedCategory'
import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  gridRow: string
  allRelationTotals?: AllRelationTotalsType
  setIsHovered: Dispatch<SetStateAction<boolean>>
  isHovered: boolean
}

export const RelatedStories: React.FC<Props> = ({
  gridRow,
  allRelationTotals,
  setIsHovered,
  isHovered,
}) => {
  const { positionedStories, nextPositionedStories } = usePresenter(allRelationTotals)
  const [currentRecord, setCurrentRecord] = useState('')

  return (
    <>
      <GridItem
        gridRow={gridRow}
        gridColumn="2"
        color="white"
        css={{
          zIndex: 20,
        }}
      >
        <Grid height="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(4, 1fr)">
          {positionedStories.map(story => (
            <Record
              key={story.id}
              record={story}
              setIsHovered={setIsHovered}
              isHovered={isHovered}
              setCurrentRecord={setCurrentRecord}
              currentRecord={currentRecord}
              style={
                isHovered && currentRecord !== story.id
                  ? {
                      opacity: 0.2,
                      filter: 'blur(6px)',
                      transition: 'opacity 0.5s ease-in-out',
                    }
                  : {}
              }
            />
          ))}

          <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" className="detailed-story" />
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
