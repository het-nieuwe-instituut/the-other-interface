import { Box } from '@chakra-ui/react'

import { Position, CloudSize } from './types'

interface Props {
  position: Position
  size: CloudSize
}

export const Cloud: React.FC<Props> = ({ position, size }) => (
  <Box
    position="absolute"
    backgroundImage="url(images/cloud.svg)"
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    borderRadius="50%"
    w={size}
    h={size}
    style={{ ...position }}
  />
)
