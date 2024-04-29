'use client'
import React from 'react'
import { usePresenter } from './usePresenter'
import Image from 'next/image'
import { Box, BoxProps } from '@chakra-ui/react'
import { limitCopyrightedImageResolution } from './limitCopyrightedImageResolution'

type ResponsiveImageProps = {
  src?: string | null
  alt?: string | null
  maxHeight?: string
  size?: string
  css?: BoxProps['css']
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  onClick?: () => void
  disableRightClick?: boolean
  onLoad?: () => void
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = '',
  alt = '',
  maxHeight = '100%',
  size = '200px',
  css,
  fit = 'contain',
  disableRightClick = false,
  onClick,
  onLoad,
}) => {
  const { fallbackImage, isSuccessfullyLoaded, handleRightClick } = usePresenter(
    src,
    disableRightClick
  )

  const processedSrc = limitCopyrightedImageResolution(src)

  return (
    <Box position="relative" maxHeight={maxHeight} width={'100%'} css={css}>
      {/* Fallback Image */}
      <Image
        src={fallbackImage}
        alt={alt || 'Fallback image'}
        sizes={size}
        style={{
          transition: 'opacity 0.5s ease-out',
          opacity: isSuccessfullyLoaded ? 0 : 1,
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'contain',
          objectPosition: 'bottom',
        }}
        fill={true}
      />

      {/* Actual Image */}
      {processedSrc && (
        <Image
          src={processedSrc}
          alt={alt || 'Actual image'}
          sizes={size}
          quality={100}
          onClick={onClick}
          style={{
            transition: 'opacity 1s ease-out',
            opacity: isSuccessfullyLoaded ? 1 : 0,
            position: 'absolute',
            top: 0,
            left: 0,
            objectPosition: 'bottom',
            objectFit: fit,
          }}
          fill={true}
          onContextMenu={handleRightClick}
          onLoad={() => {
            if (onLoad) {
              onLoad()
            }
          }}
        />
      )}
    </Box>
  )
}
