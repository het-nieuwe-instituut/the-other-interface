import { Box, Image } from '../../configs/chakra'
import React from 'react'

import { useIsImagePortrait } from '../../hooks/useIsImagePortrait'

type ResponsiveImageProps = {
  src?: string | null
  alt?: string | null
  maxHeight?: string
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = '',
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

  if (isPortrait === null || !src) {
    return (
      <Box
        maxHeight={maxHeight}
        height="100%"
        width="100%"
        backgroundImage={`url('/images/fallbacks/${Math.floor(Math.random() * 5) + 1}.svg')`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      />
    )
  }

  return (
    <Image
      src={src}
      width={isPortrait ? 'auto' : '100%'}
      maxHeight={maxHeight}
      objectFit="contain"
      alt={alt || 'image without title'}
    />
  )
}
