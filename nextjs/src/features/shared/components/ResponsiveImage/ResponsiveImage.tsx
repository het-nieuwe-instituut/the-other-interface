import React from 'react'
import { usePresenter } from './usePresenter'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

type ResponsiveImageProps = {
  src?: string | null
  alt?: string | null
  maxHeight?: string
  size?: string
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = '',
  alt = '',
  maxHeight = '100%',
  size = '200px',
}) => {
  const { fallbackImage, isSuccessfullyLoaded } = usePresenter(src)

  return (
    <Box position="relative" maxHeight={maxHeight} width={'100%'} flex={`1 1 ${maxHeight}`}>
      <Image
        src={fallbackImage}
        alt={alt || 'image without title'}
        sizes={size}
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'bottom',
          transition: 'visibility 0.35s ease-in-out',
          visibility: isSuccessfullyLoaded ? 'hidden' : 'visible',
        }}
      />

      <Image
        src={src || ''}
        alt={alt || 'image without title'}
        sizes={size}
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'bottom',
          opacity: isSuccessfullyLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      />
    </Box>
  )
}
