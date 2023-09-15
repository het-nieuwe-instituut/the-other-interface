import { GridItem } from '@chakra-ui/react'

interface Props {
  gridRow: string
  gridColumn: string
}

export const DetailedRecord: React.FC<Props> = ({ gridRow, gridColumn }) => {
  return (
    <GridItem border={'1px solid pink'} color={'white'} gridRow={gridRow} gridColumn={gridColumn}>
      DETAILS
    </GridItem>
  )
}
