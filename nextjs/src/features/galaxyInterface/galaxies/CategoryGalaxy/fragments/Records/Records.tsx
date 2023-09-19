import { Grid } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { Zoom2Query } from 'src/generated/graphql'

type Props = {
  zoom2: Zoom2Query
}

export const Records: React.FC<Props> = ({ zoom2 }) => {
  const { positionedRecords } = usePresenter(zoom2.zoomLevel2.nodes ?? [])

  return (
    <Grid
      position="absolute"
      w="96vw"
      h="70%"
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
