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
          opacity: isSuccessfullyLoaded ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
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
          transition: 'opacity 0.4s ease-in-out, transform 0.6s ease-in-out',
          transform: isSuccessfullyLoaded ? 'scale(1)' : 'scale(0.6)',
        }}
      />
    </Box>
  )
}
