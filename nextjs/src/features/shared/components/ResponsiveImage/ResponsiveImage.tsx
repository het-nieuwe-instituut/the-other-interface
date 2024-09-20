'use client'
import { cn } from '@/features/ui/utils/cn'
import Head from 'next/head'

import Image from 'next/image'
import React, { CSSProperties, useLayoutEffect, useRef, useState } from 'react'
import { isUrl } from '../../utils/links'
import { limitCopyrightedImageResolution } from './limitCopyrightedImageResolution'

export type ResponsiveImageProps = {
  className: string
  imageClassName?: string
  src?: string | null
  alt?: string | null
  size?: string
  style?: CSSProperties
  onClick?: () => void
  onLoad?: () => void
  priority?: boolean
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = '',
  alt = '',
  size = '200px',
  style,
  onClick,
  onLoad,
  className,
  imageClassName,
  priority = false,
}) => {
  const [showFallback, setShowFallback] = useState(!src)
  const [isLoaded, setIsLoaded] = useState(!src)
  const fallbackImageRef = useRef<string>(`/images/fallbacks/1.svg`)
  const processedSrc = isUrl(src) ? limitCopyrightedImageResolution(src) : null

  useLayoutEffect(() => {
    fallbackImageRef.current = `/images/fallbacks/${Math.floor(Math.random() * 9) + 1}.svg`
  }, [])

  return (
    <div style={style} className={cn('relative max-h-[var(--height)] w-full', className)}>
      {/* Fallback Image */}
      {processedSrc && (
        <Head>
          <link rel="preload" href={processedSrc} as="image" />
        </Head>
      )}
      <Image
        src={fallbackImageRef.current}
        alt={alt || 'Fallback image'}
        sizes={size}
        className={cn(
          'transition-opacity',
          'absolute top-0 left-0 object-center object-contain opacity-100',
          !showFallback && isLoaded && 'opacity-0',
          imageClassName
        )}
        onContextMenu={e => e.preventDefault()}
        fill={true}
      />

      {/* Actual Image */}
      {processedSrc && (
        <Image
          className={cn(
            'absolute top-0 left-0 object-center object-contain',
            showFallback && 'opacity-0',
            imageClassName
          )}
          src={processedSrc}
          alt={alt || 'Actual image'}
          sizes={size}
          quality={100}
          onClick={onClick}
          fill={true}
          priority={priority}
          onContextMenu={e => e.preventDefault()}
          onLoadingComplete={() => {
            onLoad?.()
            setIsLoaded(true)
            setShowFallback(false)
          }}
          onError={() => {
            console.log('could not load image, showing fallback image instead.')
            return src && setShowFallback(true)
          }}
        />
      )}
    </div>
  )
}
