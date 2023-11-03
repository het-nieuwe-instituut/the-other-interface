import { Flex, Image } from '@chakra-ui/react'
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
    <Flex
      height={maxHeight}
      width="100%"
      direction="column"
      justify="flex-end"
      flex={`0 0 ${maxHeight}`}
    >
      <Image
        src={displaySrc}
        width={isPortrait ? 'auto' : '100%'}
        maxHeight={'100%'}
        objectFit="contain"
        alt={alt || 'image without title'}
      />
    </Flex>
  )
}
