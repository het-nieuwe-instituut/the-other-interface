'use client'
import { Spinner } from '@chakra-ui/react'
import { GALAXY_EDITORIAL_LAYER_PART } from '@/features/shared/constants/mainConstants'

export const ThemedSpinner: React.FC = () => (
  <Spinner
    thickness="6px"
    speed="1.3s"
    emptyColor="blueAlpha.50"
    color="blueAlpha.100"
    size="xl"
    marginBottom={GALAXY_EDITORIAL_LAYER_PART}
  />
)
