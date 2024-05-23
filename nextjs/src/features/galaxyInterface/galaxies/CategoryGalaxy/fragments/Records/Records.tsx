import { keyframes } from '@emotion/react'
import { Record } from '../Record/Record'
import { usePresenter } from './usePresenter'

import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { LANDINGPAGE_Z_INDEXES } from '../../../MainGalaxy/fragments/constants'
import { RecordsGrid } from '../RecordsGrid'
import { Category } from '@/features/shared/utils/categories'

const currentPageFadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })
const nextPageFadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.2 } })

type Props = {
  pageAmount: number
}

export const Records: React.FC<Props> = ({ pageAmount }) => {
  const {
    isResultLoading,
    currentPositionedRecords,
    t,
    nextPositionedRecords,
    isCurrentRecordsEmpty,
    isNextRecordsEmpty,
  } = usePresenter(pageAmount)

  if (isResultLoading) {
    return <ThemedSpinner />
  }

  if (isCurrentRecordsEmpty) {
    return (
      <div className="w-full">
        <p
          className={TypographyVariants({
            times: 'lg',
            className: 'text-blue-100 text-[74px] leading-normal justify-start mb-[12vh]',
          })}
        >
          {t('noResultsFound')}.
        </p>
      </div>
    )
  }

  return (
    <div className={'group-hover-blur size-full'}>
      <RecordsGrid
        css={{
          zIndex: LANDINGPAGE_Z_INDEXES.CURRENT_PAGE,
          animation: isCurrentRecordsEmpty ? 'none' : `${currentPageFadeIn} 300ms linear`,
        }}
      >
        {currentPositionedRecords?.map((r, i) => (
          <Record
            key={r.key}
            tooltipPlace={i >= 8 ? 'top' : 'bottom'}
            record={{ ...r, category: r.category as Category }}
          />
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
          <Record
            key={r.key}
            tooltipPlace={i >= 8 ? 'top' : 'bottom'}
            record={{ ...r, category: r.category as Category }}
          />
        ))}
      </RecordsGrid>
    </div>
  )
}
