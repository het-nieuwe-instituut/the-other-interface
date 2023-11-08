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
  const { displaySrc } = usePresenter(src)

  return (
    <Box position="relative" maxHeight={maxHeight} width={'100%'} flex={`1 1 ${maxHeight}`}>
      <Image
        src={displaySrc}
        alt={alt || 'image without title'}
        sizes={size}
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'bottom',
        }}
      />
    </Box>
  )
}
