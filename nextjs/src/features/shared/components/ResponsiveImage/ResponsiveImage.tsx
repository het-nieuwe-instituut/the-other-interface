import { Flex, Image, Text } from '@chakra-ui/react'
import React, { Fragment } from 'react'

import { useIsImagePortrait } from '../../hooks/useIsImagePortrait'
import { useRandomFallback } from '../../hooks/useRandomFallback'

type ResponsiveImageProps = {
  src: string
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
        isLoading
      </Flex>
    )
  }

  if (isPortrait === null) {
    return (
      <Flex height="50%" alignItems="center" justifyContent="center">
        {isLoading ? (
          <Text>isLoading</Text>
        ) : (
          <Fragment>{RandomFallback && <RandomFallback />}</Fragment>
        )}
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
