import { Image } from '@chakra-ui/react'
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
  const { isPortrait, displaySrc } = usePresenter(src)

  return (
    <Image
      src={displaySrc}
      width={isPortrait ? 'auto' : '100%'}
      maxHeight={maxHeight}
      objectFit="contain"
      alt={alt || 'image without title'}
    />
  )
}
