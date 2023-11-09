import { Text, Box } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'
import { Loader } from '@/features/galaxyInterface/components/Loader/Loader'
import { RecordsGrid } from '../RecordsGrid'
import { LANDINGPAGE_Z_INDEXES } from '../../../MainGalaxy/fragments/constants'

type Props = {
  pageAmount: number
}

export const Records: React.FC<Props> = ({ pageAmount }) => {
  const { isResultLoading, positionedRecords, t, nextPositionedRecords } = usePresenter(pageAmount)

  if (isResultLoading) {
    return <Loader />
  }

  if (!positionedRecords.length) {
    return (
      <Box width={'100%'}>
        <Text
          textStyle="socialLarge.lg"
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
      <RecordsGrid css={{ zIndex: LANDINGPAGE_Z_INDEXES.CURRENT_PAGE }}>
        {positionedRecords.map(record => (
          <Record key={record.key} record={record} />
        ))}
      </RecordsGrid>

      <RecordsGrid
        css={{ zIndex: LANDINGPAGE_Z_INDEXES.NEXT_PAGE, opacity: 0.2, filter: 'blur(6px)' }}
      >
        {nextPositionedRecords.map(record => (
          <Record key={record.key} record={record} />
        ))}
      </RecordsGrid>
    </Box>
  )
}
