'use client'
import { CSSProperties, ReactElement, useContext, useRef } from 'react'
import { ImageWithCaptionProps } from '../image-with-caption/ImageWithCaption'
import Next from '@/features/ui/icons/Next.svg'
import Previous from '@/features/ui/icons/Previous.svg'

import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { ImageProps } from 'next/image'
import NextLink from 'next/link'
import React, { useState } from 'react'
import { useResizeObserver } from 'usehooks-ts'
import { useHorizontalSnappingList } from '../../hooks/useHorizontallScrollSnapping'
import { cn } from '../../utils/cn'
import { LightBoxNextImageByIcon } from '../lightbox/LightBoxNextImage'
import { TypographyVariants } from '../typography/variants'
import { LightboxProvider } from '../lightbox/LightboxProvider'

interface ImageCarouselProps {
  children: Array<ReactElement<ImageWithCaptionProps> | null>
}

export const ImageCarouselContext = React.createContext({
  itemWidth: 0,
})

const IMAGE_HEIGHT = 600

export const ImageCarousel = ({ children }: ImageCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width: containerWidth = 0 } = useResizeObserver({ ref: containerRef })
  const [loaded, setLoaded] = useState(false)
  const itemWidth = (containerWidth / 100) * 80
  const restWidth = (containerWidth / 100) * 20
  const { pages, width, nextPage, prevPage, scrollContainerRef, canScrollNext, canScrollPrev } =
    useHorizontalSnappingList({
      numberOfItems: children.length,
      itemWidth,
      gap: 16,
      onDimensionsKnown: () => {
        setLoaded(true)
      },
    })

  return (
    <LightboxProvider>
      <ImageCarouselContext.Provider
        value={{
          itemWidth: itemWidth,
        }}
      >
        <div
          ref={containerRef}
          className="relative flex  w-full flex-col items-center justify-center"
        >
          <div
            ref={scrollContainerRef}
            className={cn(
              loaded ? 'opacity-100' : 'opacity-0',
              'scrollbar-hide overflow-x-scroll w-full relative h-full transition-opacity'
            )}
          >
            <div
              className="flex h-full flex-nowrap gap-4"
              style={{
                width: pages === 0 ? width : pages * (itemWidth + 16) + restWidth - 16,
              }}
            >
              {children}
            </div>
          </div>
          <div
            className={cn(
              !loaded
                ? 'size-full flex items-center justify-center absolute mask opacity-100'
                : 'opacity-0 hidden',
              'transition-opacity'
            )}
          >
            <ThemedSpinner />
          </div>
          <div className={cn('absolute flex justify-between w-full', !loaded && 'hidden')}>
            <button
              onClick={prevPage}
              className={cn(!canScrollPrev ? 'opacity-0' : 'opacity-100', 'transition-opacity')}
            >
              <Previous />
            </button>
            <button>
              <Next
                onClick={nextPage}
                className={cn(!canScrollNext ? 'opacity-0' : 'opacity-100', 'transition-opacity')}
              />
            </button>
          </div>
        </div>
      </ImageCarouselContext.Provider>
    </LightboxProvider>
  )
}

export interface ImageCarouselItemProps extends ImageProps {
  href?: string
  className?: string
  imageClassName?: string
  captionClassname?: string
  caption?: string
}

export const ImageCarouselItem = (props: ImageCarouselItemProps) => {
  const { itemWidth } = useContext(ImageCarouselContext)
  const { t: commonT } = useTypeSafeTranslation('common')
  const { caption, className, src, imageClassName, captionClassname, href, ...restProps } = props

  const renderContent = () => {
    return (
      <figure
        style={{ '--item-width': `${itemWidth}px` } as CSSProperties}
        className="relative flex h-full w-[var(--item-width)] flex-col gap-2"
      >
        <div
          className={cn(className, 'relative w-full bg-ivory-100 h-[var(--image-carousel-height)]')}
          style={{ '--image-carousel-height': `${IMAGE_HEIGHT}px` } as CSSProperties}
        >
          {!src ? (
            <div className={cn(className, 'relative')}>
              <div className="flex h-[var(--default-image-height)] w-full items-center justify-center bg-gray-300">
                {commonT('somethingWentWrong')}
              </div>
            </div>
          ) : (
            <LightBoxNextImageByIcon
              src={src}
              className={cn('object-cover object-center', imageClassName)}
              sizes="100vw"
              caption={caption}
              fill
              {...restProps}
              onContextMenu={e => e.preventDefault()}
            />
          )}
        </div>
        {caption && (
          <figcaption
            title={caption}
            className={TypographyVariants({ socialLarge: 'sm', className: captionClassname })}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  return href ? <NextLink href={href}>{renderContent()}</NextLink> : renderContent()
}
