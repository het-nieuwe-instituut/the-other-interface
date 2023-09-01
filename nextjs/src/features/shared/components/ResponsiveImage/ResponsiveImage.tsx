import { Box, Image } from '@chakra-ui/react'
import React from 'react'

import { useIsImagePortrait } from '../../hooks/useIsImagePortrait'

type ResponsiveImageProps = {
  src: string | null
  alt: string
  maxHeight?: string
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  maxHeight = '100%',
}) => {
  const { isLoading, isPortrait } = useIsImagePortrait(src)

  if (isLoading) {
    return (
      <Box height="50%" alignItems="center" justifyContent="center" color="blueAlpha.100">
        isLoading...
      </Box>
    )
  }

  // Math.floor(Math.random() * fallbacks.length

  if (isPortrait === null || !src) {
    return (
      <Box height="50%" alignItems="center" justifyContent="center" color="blueAlpha.100">
        <Box
          height="100px"
          width="100px"
          backgroundImage={`url('/images/fallbacks/${Math.floor(Math.random() * 5) + 1}.svg')`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        />
      </Box>
    )
  }

  return (
    <Image
      src={src}
      width={isPortrait ? 'auto' : '100%'}
      maxHeight={maxHeight}
      objectFit="contain"
      alt={alt}
    />
  )
}
