import { Grid, Text, Box } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'
import { Loader } from '@/features/galaxyInterface/components/Loader/Loader'

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
      <Grid
        position="absolute"
        w="96vw"
        h={`calc(80% - 1.7rem - 60px)`} // considering fixed height of galaxy footer
        top="7%"
        left="2vw"
        right="2vw"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(3, 1fr)"
        zIndex={100}
      >
        {positionedRecords.map(record => (
          <Record key={record.key} record={record} />
        ))}
      </Grid>

      <Grid
        position="absolute"
        w="96vw"
        h={`calc(80% - 1.7rem - 60px)`} // considering fixed height of galaxy footer
        top="7%"
        left="2vw"
        right="2vw"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(3, 1fr)"
        filter={'blur(6px)'}
        opacity={0.2}
        zIndex={99}
      >
        {nextPositionedRecords.map(record => (
          <Record key={record.key} record={record} />
        ))}
      </Grid>
    </Box>
  )
}
