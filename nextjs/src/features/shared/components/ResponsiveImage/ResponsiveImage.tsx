import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { usePresenter } from './usePresenter'

type ResponsiveImageProps = {
  src: string
  alt: string
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt }) => {
  const { isPortrait } = usePresenter(src)

  if (isPortrait === null) {
    return (
      <Box width="67%" height="50%" display="flex" alignItems="center" justifyContent="center">
        Loading...
      </Box>
    )
  }

  return (
    <Image
      src={src}
      width={isPortrait ? 'auto' : '100%'}
      height={isPortrait ? '100%' : 'auto'}
      maxHeight="calc(100% - 1.6vw)" // where 1.6vw is a title height
      objectFit="contain"
      alt={alt}
    />
  )
}
