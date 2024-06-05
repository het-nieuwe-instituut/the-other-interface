'use client'
import 'keen-slider/keen-slider.min.css'
import { CSSProperties, ReactElement, useContext } from 'react'
import { ImageWithCaption, ImageWithCaptionProps } from '../image-with-caption/ImageWithCaption'
import Next from './Next.svg'
import Previous from './Previous.svg'

import React from 'react'
import { useImageCarouselState } from './useImageCarousel'
import { WebOptions } from 'keen-slider'
import { cn } from '../../utils/cn'
import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { calculateImagePropotions } from '@/features/modules/helpers/modulesHelpers'
import { ImageWithCaptionLink } from '../image-with-caption/ImageWithCaptionLink'

interface ImageCarouselProps {
  children: Array<ReactElement<ImageWithCaptionProps> | null>
  getSlidesConfiguration: WebOptions<unknown>['slides']
}

export const ImageCarouselContext = React.createContext({
  instanceSize: 0,
})

export const ImageCarousel = ({ children, getSlidesConfiguration }: ImageCarouselProps) => {
  const { loaded, sliderRef, instanceRef, next, previous } =
    useImageCarouselState(getSlidesConfiguration)

  return (
    <ImageCarouselContext.Provider
      value={{
        instanceSize: instanceRef?.current?.size ?? 0,
      }}
    >
      <div
        style={{ '--image-carousel-height': `${IMAGE_HEIGHT}px` } as CSSProperties}
        className="relative flex flex-col items-center justify-center h-[var(--image-carousel-height)]"
      >
        <div
          className={cn(
            'keen-slider',
            loaded
              ? 'opacity-100 h-[var(--image-carousel-height)]'
              : 'opacity-0 h-[var(--image-carousel-height)]'
          )}
          ref={sliderRef}
        >
          {children}
        </div>
        <div
          className={cn(
            !loaded
              ? 'size-full flex items-center justify-center absolute mask opacity-100'
              : 'opacity-0 hidden'
          )}
        >
          <ThemedSpinner />
        </div>
        <div className={cn('absolute flex justify-between w-full', !loaded && 'hidden')}>
          <button onClick={previous}>
            <Previous />
          </button>
          <button>
            <Next onClick={next} />
          </button>
        </div>
      </div>
    </ImageCarouselContext.Provider>
  )
}

const IMAGE_HEIGHT = 600

export const ImageCarouselItem = (
  props: ImageWithCaptionProps & { height: number; width: number; href?: string }
) => {
  const { instanceSize } = useContext(ImageCarouselContext)
  const { width: originalWidth, height: originalHeight, caption, href } = props
  const { width, height } = calculateImagePropotions(
    originalWidth ?? 0,
    originalHeight,
    IMAGE_HEIGHT,
    instanceSize
  )

  return (
    <div
      className="flex flex-col keen-slider__slide h-[var(--image-carousel-height)] pr-4"
      style={{ width, height }}
    >
      {href ? (
        <ImageWithCaptionLink
          {...props}
          href={href}
          width={width}
          height={height}
          caption={caption}
          captionClassname="line-clamp-2"
        />
      ) : (
        <ImageWithCaption
          {...props}
          width={width}
          height={height}
          caption={caption}
          captionClassname="line-clamp-2"
        />
      )}
    </div>
  )
}
