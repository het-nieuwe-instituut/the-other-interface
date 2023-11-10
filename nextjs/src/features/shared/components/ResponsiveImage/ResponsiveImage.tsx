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
      {/* Fallback Image */}
      <Image
        src={fallbackImage}
        alt={alt || 'Fallback image'}
        sizes={size}
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
        style={{
          transition: 'opacity 0.5s ease-out',
          opacity: isSuccessfullyLoaded ? 0 : 1,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      {/* Actual Image */}
      <Image
        src={src || ''}
        alt={alt || 'Actual image'}
        sizes={size}
        layout="fill"
        objectFit="contain"
        objectPosition="bottom"
        style={{
          transition: 'opacity 1s ease-out',
          opacity: isSuccessfullyLoaded ? 1 : 0,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </Box>
  )
}
