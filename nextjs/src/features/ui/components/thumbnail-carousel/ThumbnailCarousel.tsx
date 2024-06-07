'use client'
import { imageBasePath } from '@/features/modules/modulesConstants'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import NextImage, { ImageProps } from 'next/image'
import React, { Children, useContext, useState } from 'react'
import { cn } from '../../utils/cn'

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
  const [index, setIndex] = useState<number>(0)
  const focusedItem = Children.toArray(children)[
    index
  ] as React.ReactElement<ThumbnailCarouselItemProps>
  const focusedItemProps = focusedItem.props
  console.log(focusedItemProps)
  if (!focusedItem) {
    return <ErrorBox />
  }

  const { src, alt } = focusedItemProps
  const imageSrc = src ? imageBasePath(src.toString()) : ''

  return (
    <ThumbnailCarouselContext.Provider
      value={{ setIndex: (index: number) => setIndex(index), index }}
    >
      <div className={cn(className, 'flex flex-col gap-4')}>
        <div className="relative h-auto w-full bg-blue-50">
          <NextImage
            src={imageSrc ?? ''}
            alt={alt}
            className=" object-contain object-left"
            sizes="100vw"
            fill
            onContextMenu={e => e.preventDefault()}
          />
        </div>
        <div className="flex gap-4">{children}</div>
      </div>
    </ThumbnailCarouselContext.Provider>
  )
}

interface ThumbnailCarouselItemProps extends ImageProps {
  index: number
}
export const ThumbnailCarouselItem = ({
  src,
  alt,
  index,
  ...restProps
}: ThumbnailCarouselItemProps) => {
  const context = useContext(ThumbnailCarouselContext)
  const imageSrc = src ? imageBasePath(src.toString()) : ''

  return (
    <button
      onClick={() => context.setIndex(index)}
      className=" relative h-[103.7px] w-[154.78px] overflow-hidden"
    >
      <NextImage
        onClick={() => context.setIndex(index)}
        src={imageSrc ?? ''}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        {...restProps}
        onContextMenu={e => e.preventDefault()}
      />
    </button>
  )
}
