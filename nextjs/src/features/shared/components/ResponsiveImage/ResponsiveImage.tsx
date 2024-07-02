'use client'
import Image from 'next/image'
import React, { CSSProperties, useRef, useState } from 'react'
import { limitCopyrightedImageResolution } from './limitCopyrightedImageResolution'
import { cn } from '@/features/ui/utils/cn'

type ResponsiveImageProps = {
  className: string
  src?: string | null
  alt?: string | null
  size?: string
  style?: CSSProperties
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  onClick?: () => void
  onLoad?: () => void
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = '',
  alt = '',
  size = '200px',
  style,
  fit = 'contain',
  onClick,
  onLoad,
  className,
}) => {
  const [showFallback, setShowFallback] = useState(!src)
  const fallbackImageRef = useRef<string | null>(null)

  if (!fallbackImageRef.current) {
    fallbackImageRef.current = `/images/fallbacks/${Math.floor(Math.random() * 9) + 1}.svg`
  }

  const processedSrc = limitCopyrightedImageResolution(src)

  return (
    <div style={style} className={cn('relative max-h-[var(--height)] w-full', className)}>
      {/* Fallback Image */}
      <Image
        src={fallbackImageRef.current}
        alt={alt || 'Fallback image'}
        sizes={size}
        style={{
          transition: 'opacity 0.5s ease-out',
          opacity: !showFallback ? 0 : 1,
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        onContextMenu={() => false}
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
            transition: 'opacity 0.5s ease-out',
            opacity: !showFallback ? 1 : 0,
            position: 'absolute',
            top: 0,
            left: 0,
            objectPosition: 'center',
            objectFit: fit,
          }}
          fill={true}
          onContextMenu={e => e.preventDefault()}
          onLoad={onLoad}
          onError={() => {
            console.log('could not load image, showing fallback image instead.')
            return src && setShowFallback(true)
          }}
        />
      )}
    </div>
  )
}
