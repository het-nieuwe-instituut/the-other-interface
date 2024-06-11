'use client'
import { imageBasePath } from '@/features/modules/modulesConstants'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import NextImage, { ImageProps } from 'next/image'
import React, { Children, useContext, useState } from 'react'
import { cn } from '../../utils/cn'
import Gradient from './gradient.svg'
import NavArrowLeft from './nav-arrow-left.svg'
import NavArrowRight from './nav-arrow-right.svg'
import { useHorizontalSnappingList } from '../../hooks/useHorizontallScrollSnapping'

export interface ThumbnailCarouselProps {
  className?: string
  children: React.ReactElement<ThumbnailCarouselItemProps>[]
}

const ThumbnailCarouselContext = React.createContext<{
  index: number
  setIndex: (index: number) => void
}>({
  index: 0,
  setIndex: () => undefined,
})

export const ThumbnailCarousel = ({ className, children }: ThumbnailCarouselProps) => {
  const { pages, width, nextPage, prevPage, scrollContainerRef, canScrollNext, canScrollPrev } =
    useHorizontalSnappingList({
      numberOfItems: children.length,
      itemWidth: 154.783,
    })
  const [index, setIndex] = useState<number>(0)
  const focusedItem = Children.toArray(children)[
    index
  ] as React.ReactElement<ThumbnailCarouselItemProps>

  const focusedItemProps = focusedItem.props
  if (!focusedItem) {
    return <ErrorBox />
  }

  const { src, alt } = focusedItemProps
  const imageSrc = src ? imageBasePath(src.toString()) : ''

  return (
    <ThumbnailCarouselContext.Provider
      value={{ setIndex: (index: number) => setIndex(index), index }}
    >
      <div className={cn(className, 'flex flex-col gap-4 relative')}>
        <div className="relative flex h-[621.41px] w-full items-center justify-center">
          <NextImage
            src={imageSrc ?? ''}
            alt={alt}
            className="bg-ivory-100 object-contain object-center"
            fill
            onContextMenu={e => e.preventDefault()}
          />
        </div>

        <div className="flex">
          <div className=" overflow-x-scroll scrollbar-hide" ref={scrollContainerRef}>
            <div
              className="flex flex-nowrap gap-4"
              style={{
                width: pages === 0 ? width : pages * width,
              }}
            >
              {children}
            </div>
          </div>
          <Gradient
            className={cn(
              'pointer-events-none absolute left-0 rotate-180 transition-opacity opacity-100 -mt-[1px]',
              !canScrollPrev && 'opacity-0'
            )}
          />
          <div className="relative flex">
            <Gradient
              className={cn(
                'pointer-events-none absolute left-[-91.81px] transition-opacity opacity-100 -top-[1px]',
                !canScrollNext && 'opacity-0'
              )}
            />

            <div className="flex h-full w-[116.32px] items-center justify-center gap-2 bg-white">
              <button onClick={prevPage}>
                <NavArrowLeft />
              </button>
              <button onClick={nextPage}>
                <NavArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ThumbnailCarouselContext.Provider>
  )
}

interface ThumbnailCarouselItemProps extends ImageProps {
  index: number
}
export const ThumbnailCarouselItem = ({ src, alt, index }: ThumbnailCarouselItemProps) => {
  const context = useContext(ThumbnailCarouselContext)
  const imageSrc = src ? imageBasePath(src.toString()) : ''

  return (
    <button
      onClick={() => context.setIndex(index)}
      className=" relative h-[103px] w-[154.78px] flex-none overflow-hidden"
    >
      <NextImage
        onClick={() => context.setIndex(index)}
        src={imageSrc ?? ''}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        onContextMenu={e => e.preventDefault()}
      />
    </button>
  )
}
