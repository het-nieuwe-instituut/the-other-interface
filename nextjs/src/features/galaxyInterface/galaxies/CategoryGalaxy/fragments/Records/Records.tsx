import { keyframes } from '@emotion/react'
import { Record } from '../Record/Record'
import { usePresenter } from './usePresenter'

import { LANDINGPAGE_Z_INDEXES } from '../../../MainGalaxy/fragments/constants'
import { RecordsGrid } from '../RecordsGrid'

const currentPageFadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })
const nextPageFadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.2 } })

type Props = {
  pageAmount: number
}

export const Records: React.FC<Props> = ({ pageAmount }) => {
  const {
    currentPositionedRecords,
    nextPositionedRecords,
    isCurrentRecordsEmpty,
    isNextRecordsEmpty,
  } = usePresenter(pageAmount)

  return (
    <div className={'group-hover-blur size-full'}>
      <RecordsGrid
        css={{
          zIndex: LANDINGPAGE_Z_INDEXES.CURRENT_PAGE,
          animation: isCurrentRecordsEmpty ? 'none' : `${currentPageFadeIn} 300ms linear`,
        }}
      >
        {currentPositionedRecords?.map((r, i) => (
          <Record key={r.key} tooltipPlace={i >= 8 ? 'top' : 'bottom'} record={r} />
        ))}
      </RecordsGrid>

      <RecordsGrid
        css={{
          zIndex: LANDINGPAGE_Z_INDEXES.NEXT_PAGE,
          opacity: 0.2,
          filter: 'blur(6px)',
          animation: isNextRecordsEmpty ? 'none' : `${nextPageFadeIn} 300ms linear`,
        }}
      >
        {nextPositionedRecords?.map((r, i) => (
          <Record key={r.key} tooltipPlace={i >= 8 ? 'top' : 'bottom'} record={r} />
        ))}
      </RecordsGrid>
    </div>
  )
}
