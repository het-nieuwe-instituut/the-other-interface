import { Grid, Text } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'

type Props = {
  records: ZoomLevel2Type[]
}

export const Records: React.FC<Props> = ({ records }) => {
  const { positionedRecords, t } = usePresenter(records)

  if (!positionedRecords.length) {
    return (
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
    )
  }

  return (
    <Grid
      position="absolute"
      w="96vw"
      h={`calc(80% - 1.7rem - 60px)`} // considering fixed height of galaxy footer
      top="7%"
      left="2vw"
      right="2vw"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
    >
      {positionedRecords.map(record => (
        <Record key={record.key} record={record} />
      ))}
    </Grid>
  )
}
