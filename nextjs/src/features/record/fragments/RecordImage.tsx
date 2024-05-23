'use client'
import { Box } from '@chakra-ui/react'
import { ResponsiveImage } from '../../shared/components/ResponsiveImage/ResponsiveImage'

interface Props {
  url: string
}

export const RecordImage: React.FC<Props> = props => {
  return (
    <Box mt={8} height={'523px'}>
      <ResponsiveImage
        src={props?.url}
        alt={'test'}
        maxHeight="523px"
        css={{ height: '100%' }}
        fit="cover"
        disableRightClick
      />
    </Box>
  )
}
