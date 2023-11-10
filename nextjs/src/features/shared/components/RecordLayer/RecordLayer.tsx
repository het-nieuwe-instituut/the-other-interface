'use client'
import { Box, useTheme } from '../../configs/chakra'
import { RecordHeader } from '../Record/RecordHeader/RecordHeader'

interface Props {
  data: unknown[]
}

export const RecordLayer: React.FC<Props> = ({ data }) => {
  const theme = useTheme()
  console.log(data)

  return (
    <Box px={{ xl: 6, base: 0 }} position={'relative'} zIndex={2} backgroundColor={'ivoryAlpha.95'}>
      <Box maxW={theme.breakpoints.xl} marginX={'auto'} paddingTop={6}>
        <RecordHeader />
      </Box>
    </Box>
  )
}
