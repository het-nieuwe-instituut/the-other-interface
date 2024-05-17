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
  disableRightClick?: boolean
  onLoad?: () => void
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src = '',
  alt = '',
  size = '200px',
  style,
  fit = 'contain',
  disableRightClick = false,
  onClick,
  onLoad,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const fallbackImageRef = useRef<string | null>(null)

  if (!fallbackImageRef.current) {
    fallbackImageRef.current = `/images/fallbacks/${Math.floor(Math.random() * 9) + 1}.svg`
  }

  const handleLoad = () => {
    setImageLoaded(true)
    if (onLoad) {
      onLoad() // Call external onLoad callback
    }
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
          // transition: 'opacity 0.5s ease-out',
          opacity: imageLoaded ? 0 : 1,
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'contain',
          objectPosition: 'bottom',
        }}
        onContextMenu={disableRightClick ? () => false : undefined}
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
            // transition: 'opacity 1s ease-out',
            opacity: imageLoaded ? 1 : 0,
            position: 'absolute',
            top: 0,
            left: 0,
            objectPosition: 'bottom',
            objectFit: fit,
          }}
          fill={true}
          onContextMenu={disableRightClick ? e => e.preventDefault() : undefined}
          onLoad={handleLoad}
        />
      )}
    </div>
  )
}
