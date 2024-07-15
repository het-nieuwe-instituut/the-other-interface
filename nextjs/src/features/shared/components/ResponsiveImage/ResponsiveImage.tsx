'use client'
import { cn } from '@/features/ui/utils/cn'
import Image from 'next/image'
import React, { CSSProperties, useLayoutEffect, useRef, useState } from 'react'
import { limitCopyrightedImageResolution } from './limitCopyrightedImageResolution'

export type ResponsiveImageProps = {
  className: string
  src?: string | null
  alt?: string | null
  size?: string
  style?: CSSProperties
  onClick?: () => void
  onLoad?: () => void
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = '',
  alt = '',
  size = '200px',
  style,
  onClick,
  onLoad,
  className,
}) => {
  const [showFallback, setShowFallback] = useState(!src)
  const [isLoaded, setIsLoaded] = useState(!src)
  const fallbackImageRef = useRef<string>(`/images/fallbacks/1.svg`)
  const processedSrc = limitCopyrightedImageResolution(src)

  useLayoutEffect(() => {
    fallbackImageRef.current = `/images/fallbacks/${Math.floor(Math.random() * 9) + 1}.svg`
  }, [])

  return (
    <div style={style} className={cn('relative max-h-[var(--height)] w-full', className)}>
      {/* Fallback Image */}
      <Image
        src={fallbackImageRef.current}
        alt={alt || 'Fallback image'}
        sizes={size}
        className={cn(
          'transition-opacity',
          'absolute top-0 left-0 object-center object-contain opacity-100',
          !showFallback && isLoaded && 'opacity-0'
        )}
        onContextMenu={() => false}
        fill={true}
      />

      {/* Actual Image */}
      {processedSrc && (
        <Image
          className={cn(
            'absolute top-0 left-0 object-center object-contain',
            showFallback && 'opacity-0'
          )}
          src={processedSrc}
          alt={alt || 'Actual image'}
          sizes={size}
          quality={100}
          onClick={onClick}
          fill={true}
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
