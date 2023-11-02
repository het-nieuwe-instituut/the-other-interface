import { Grid } from '@chakra-ui/react'

import { usePresenter } from './usePresenter'
import { Record } from '../Record'
import { ZoomLevel2Type } from 'src/generated/graphql'
import { useEffect, useRef } from 'react'

type Props = {
  records: ZoomLevel2Type[]
}

export const Records: React.FC<Props> = ({ records }) => {
  const { positionedRecords, page } = usePresenter(records)

  // 1. Add a reference to the <Grid>
  const gridRef = useRef<HTMLDivElement>(null)

  // 2. Use the useEffect hook to log the count of children each time positionedRecords changes.
  useEffect(() => {
    if (gridRef.current) {
      console.log(
        page,
        `records: ${positionedRecords.length}, rendered: ${gridRef.current.children.length}`
      )
    }
  }, [positionedRecords])

  return (
    <Grid
      ref={gridRef}
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
