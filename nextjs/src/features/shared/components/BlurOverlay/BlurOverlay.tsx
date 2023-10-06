import { Box } from '@chakra-ui/react'
import { SEARCH_MODE_OVERLAY_Z_INDEX } from '../../constants/mainConstants'

const BlurOverlay: React.FC = () => {
  return (
    <Box
      pos="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      backdropFilter="blur(3px)"
      bg="rgba(255, 255, 255, 0.4)"
      pointerEvents="none"
      zIndex={SEARCH_MODE_OVERLAY_Z_INDEX}
    />
  )
}

export default BlurOverlay
