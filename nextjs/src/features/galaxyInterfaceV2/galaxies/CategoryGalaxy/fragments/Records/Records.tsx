import { Grid } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { fakeObjects } from '../../fakeData'
import { Record } from '../Record'

export const Records: React.FC = () => {
  const { positionedRecords } = usePresenter(fakeObjects)

  return (
    <Grid
      position="absolute"
      w="96vw"
      h="70vh"
      top="7%"
      left="2vw"
      right="2vw"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
      border={'1px solid pink'}
    >
      {positionedRecords.map((record, index) => (
        <Record key={record?.title ?? `empty-${index}`} record={record} />
      ))}
    </Grid>
  )
}
