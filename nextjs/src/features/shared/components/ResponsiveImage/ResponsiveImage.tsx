import { Box, Image } from '../../configs/chakra'
import React from 'react'
import { usePresenter } from './usePresenter'

type ResponsiveImageProps = {
  src?: string | null
  alt?: string | null
  maxHeight?: string
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = '',
  alt = '',
  maxHeight = '100%',
}) => {
  const { isPortrait, fallbackImage } = usePresenter(src)

  if (isPortrait === null || !src) {
    return (
      <Box
        maxHeight={maxHeight}
        height="100%"
        width="100%"
        backgroundImage={fallbackImage}
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
