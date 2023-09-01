import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

import { useIsImagePortrait } from '../../hooks/useIsImagePortrait'
import { useRandomFallback } from '../../hooks/useRandomFallback'

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
  const { RandomFallback } = useRandomFallback()

  if (isLoading) {
    return (
      <Flex height="50%" alignItems="center" justifyContent="center">
        isLoading...
      </Flex>
    )
  }

  if (isPortrait === null || !src) {
    return (
      <Flex height="50%" alignItems="center" justifyContent="center">
        {RandomFallback && <RandomFallback />}
      </Flex>
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
