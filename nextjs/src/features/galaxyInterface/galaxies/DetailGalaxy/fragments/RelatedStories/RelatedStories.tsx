import { useContext, useState } from 'react'
import { DetailGalaxyContext } from '../../DetailGalaxy/DetailGalxyContext'
import { DetailedRecord } from '../DetailedRecord'
import { Record } from '../Record/Record'
import { AllRelationTotalsType } from '../RelatedCategory'
import { usePresenter } from './usePresenter'

interface Props {
  allRelationTotals?: AllRelationTotalsType
}

export const RelatedStories: React.FC<Props> = ({ allRelationTotals }) => {
  const { positionedStories, nextPositionedStories } = usePresenter(allRelationTotals)
  const [currentRecord, setCurrentRecord] = useState('')
  const DetailGalaxyContent = useContext(DetailGalaxyContext)

  return (
    <>
      <div className="z-20 col-start-2 col-end-2 row-start-1 row-end-3 text-white">
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {positionedStories.map(story => (
            <Record
              key={story.id}
              record={story}
              onHoverRecord={() => handleRecordHover(story.id)}
              onLeaveRecord={() => handleRecordLeave()}
              isHovered={DetailGalaxyContent.isRecordHovered}
              currentRecord={currentRecord}
              style={
                DetailGalaxyContent.isRecordHovered && currentRecord !== story.id
                  ? {
                      opacity: 0.2,
                      filter: 'blur(6px)',
                      transition: 'opacity 0.5s ease-in-out',
                    }
                  : {}
              }
            />
          ))}

          <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" />
        </div>
      </div>

      <div className=" pointer-events-none z-20 col-start-2 col-end-2 row-start-1 row-end-3 text-white opacity-20 blur-[6px]">
        <div className="grid h-full grid-cols-2 grid-rows-4">
          {nextPositionedStories.map(story => (
            <Record key={story.id} record={story} tabIndex={-1} />
          ))}

          <DetailedRecord gridRow="2 / 4" gridColumn="1 / 3" />
        </div>
      </div>
    </>
  )

  function handleRecordHover(storyId: string) {
    console.log('test')
    DetailGalaxyContent.setIsRecordHovered(true)
    setCurrentRecord(storyId)
  }

  function handleRecordLeave() {
    DetailGalaxyContent.setIsRecordHovered(false)
    setCurrentRecord('')
  }
}
