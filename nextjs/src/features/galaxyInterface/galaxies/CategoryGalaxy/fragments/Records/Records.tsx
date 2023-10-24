import { Grid } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'

export const Records: React.FC = () => {
  const { positionedRecords } = usePresenter()

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
      border={`1px solid black`}
    >
      {positionedRecords.map(record => (
        <Record key={record.id} record={record} />
      ))}
    </Grid>
  )
}
