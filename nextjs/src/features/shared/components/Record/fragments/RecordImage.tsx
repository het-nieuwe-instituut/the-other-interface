'use client'
import { Box } from '@chakra-ui/react'
import { ResponsiveImage } from '../../ResponsiveImage/ResponsiveImage'

interface Props {
  url: string
}

export const RecordImage: React.FC<Props> = props => {
  return (
    <Box mt={10} height={'523px'}>
      <ResponsiveImage src={props?.url} alt={'test'} maxHeight="523px" size="523px" />
    </Box>
  )
}
