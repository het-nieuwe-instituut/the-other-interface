import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { useIsImagePortrait } from '../../hooks/useIsImagePortrait'

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
  const { isPortrait } = useIsImagePortrait(src)

  if (isPortrait === null) {
    return (
      <Flex height="50%" alignItems="center" justifyContent="center">
        Loading...
      </Flex>
    )
  }

  return (
    <Image
      src={src}
      width={isPortrait ? 'auto' : '100%'}
      height={isPortrait ? '100%' : 'auto'}
      maxHeight={maxHeight}
      objectFit="contain"
      alt={alt}
    />
  )
}
