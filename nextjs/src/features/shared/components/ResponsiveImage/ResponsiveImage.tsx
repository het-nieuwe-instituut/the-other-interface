import React from 'react'
import { usePresenter } from './usePresenter'
import Image from 'next/image'

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
  const { displaySrc, dimensions } = usePresenter(src)

  return (
    <Image
      src={displaySrc}
      alt={alt || 'image without title'}
      sizes={size}
      style={{
        objectFit: 'contain',
        maxHeight,
        width: '100%',
        flex: `1 1 ${maxHeight}`,
        objectPosition: 'bottom',
      }}
      width={dimensions.width}
      height={dimensions.height}
    />
  )
}
