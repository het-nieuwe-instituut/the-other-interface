import { useState } from 'react'
import { DetailedRecord } from '../DetailedRecord'
import { Record } from '../Record/Record'
import { AllRelationTotalsType } from '../RelatedCategory'
import { usePresenter } from './usePresenter'

interface Props {
  allRelationTotals?: AllRelationTotalsType
  onHoverRecord: () => void
  onLeaveRecord: () => void
  isHovered: boolean
}

export const RelatedStories: React.FC<Props> = ({
  allRelationTotals,
  onHoverRecord,
  onLeaveRecord,
  isHovered,
}) => {
  const { positionedStories, nextPositionedStories } = usePresenter(allRelationTotals)
  const [currentRecord, setCurrentRecord] = useState('')

  return (
    <>
      <div className="z-20 row-start-1 row-end-3 h-full text-white">
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {positionedStories.map(story => (
            <Record
              key={story.id}
              record={story}
              onHoverRecord={() => handleRecordHover(story.id)}
              onLeaveRecord={() => handleRecordLeave()}
              isHovered={isHovered}
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
        </div>
      </div>

      <div className=" z-20 row-start-1 row-end-3 text-white opacity-20 blur-[6px] ">
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {nextPositionedStories.map(story => (
            <Record key={story.id} record={story} />
          ))}

          <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" />
        </div>
      </div>
    </>
  )

  function handleRecordHover(storyId: string) {
    onHoverRecord()
    setCurrentRecord(storyId)
  }

  function handleRecordLeave() {
    onLeaveRecord()
    setCurrentRecord('')
  }
}
