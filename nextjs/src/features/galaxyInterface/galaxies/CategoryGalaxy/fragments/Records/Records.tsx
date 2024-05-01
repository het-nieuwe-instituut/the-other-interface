import { Text, Box } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { keyframes } from '@emotion/react'

import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'
import { Loader } from '@/features/galaxyInterface/components/Loader/Loader'
import { RecordsGrid } from '../RecordsGrid'
import { LANDINGPAGE_Z_INDEXES } from '../../../MainGalaxy/fragments/constants'

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
    return <Loader />
  }

  if (isCurrentRecordsEmpty) {
    return (
      <Box width={'100%'}>
        <Text
          textStyle="headingTimesLarge.lg"
          justifyItems={'flex-start'}
          marginBottom={GALAXY_EDITORIAL_LAYER_PART}
          color="blueAlpha.100"
          fontSize={'74px'}
          lineHeight={'normal'}
        >
          {t('noResultsFound')}.
        </Text>
      </Box>
    )
  }

  return (
    <Box width={'100%'} height={'100%'}>
      <RecordsGrid
        css={{
          zIndex: LANDINGPAGE_Z_INDEXES.CURRENT_PAGE,
          animation: isCurrentRecordsEmpty ? 'none' : `${currentPageFadeIn} 300ms linear`,
        }}
      >
        {currentPositionedRecords?.map(record => (
          <Record key={record.key} record={record} />
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
        {nextPositionedRecords?.map(record => (
          <Record key={record.key} record={record} />
        ))}
      </RecordsGrid>
    </Box>
  )
}
