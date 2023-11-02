import { Grid } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { ZoomLevel2Type } from 'src/generated/graphql'

type Props = {
  records: ZoomLevel2Type[]
}

export const Records: React.FC<Props> = ({ records }) => {
  const { positionedRecords } = usePresenter(records)

  return (
    <Grid
      position="absolute"
      w="96vw"
      h={`calc(80% - 1.7rem - 60px)`}
      top="7%"
      left="2vw"
      right="2vw"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
    >
      {positionedRecords.map(record => (
        <Record key={record.id} record={record} />
      ))}
    </Grid>
  )
}
