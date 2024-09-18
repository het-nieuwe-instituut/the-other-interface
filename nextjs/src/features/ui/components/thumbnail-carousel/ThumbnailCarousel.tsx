'use client'
import { imageBasePath } from '@/features/modules/modulesConstants'
import { getExternalSourceTranslation } from '@/features/record/utils/enrichedSources'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import { ImageProps } from 'next/image'
import React, { CSSProperties, Children, useContext, useState } from 'react'
import { ExternalSource } from 'src/generated/graphql'
import { useHorizontalSnappingList } from '../../hooks/useHorizontallScrollSnapping'
import { cn } from '../../utils/cn'
import { LightBoxNextImage, LightBoxNextImageByIcon } from '../lightbox/LightBoxNextImage'
import { LightboxProvider } from '../lightbox/LightboxProvider'
import {
  ExternalSourceBlock,
  ExternalSourceBlockGroup,
  ExternalSourceLink,
} from '../Sources/ExternalSource'
import { ExternalSourceTooltip } from '../tooltip/ExternalSourceTooltip'
import NavArrowLeft from './nav-arrow-left.svg'
import NavArrowRight from './nav-arrow-right.svg'

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
const ITEM_WIDTH = 154.783

export const ThumbnailCarousel = ({ className, children }: ThumbnailCarouselProps) => {
  const { pages, width, scrollContainerRef, scrollToIndex } = useHorizontalSnappingList({
    numberOfItems: children.length,
    itemWidth: ITEM_WIDTH,
    gap: 16,
  })
  const [index, setIndex] = useState<number>(0)
  const focusedItem = Children.toArray(children)[
    index
  ] as React.ReactElement<ThumbnailCarouselItemProps>
  const itemsFitInContainer = Math.floor(width / ITEM_WIDTH)
  const isSingle = Children.toArray(children).length === 1
  const focusedItemProps = focusedItem.props
  if (!focusedItem) {
    return <ErrorBox />
  }

  const { src, alt, enrichedSource } = focusedItemProps
  const imageSrc = src ? imageBasePath(src.toString()) : ''
  const { t } = createTypeSafeTranslation('common')

  const handlePrevious = () => {
    const newIndex = Math.max(0, index - 1)
    setIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleNext = () => {
    const newIndex = Math.min(children.length - 1, index + 1)
    setIndex(newIndex)
    scrollToIndex(newIndex)
  }

  const handleSetNext = (index: number) => {
    setIndex(index)
    scrollToIndex(index)
  }

  const canScrollPrev = index > 0
  const canScrollNext = index < children.length - 1

  return (
    <LightboxProvider>
      <ThumbnailCarouselContext.Provider value={{ setIndex: handleSetNext, index }}>
        <div className={cn(className, 'flex flex-col gap-4 relative')}>
          <div className="absolute left-2 top-2 z-[9999]">
            {enrichedSource && enrichedSource.thumbnail && (
              <ExternalSourceBlockGroup className="mt-1">
                {enrichedSource.thumbnail.map(v => {
                  return (
                    <ExternalSourceTooltip
                      key={v}
                      place="right-start"
                      title={
                        enrichedSource.externalSourceUrl ? (
                          <div className=" inline-block">
                            {t('pulledFrom')}{' '}
                            <div className="inline-block">
                              <ExternalSourceLink
                                externalSourceType={enrichedSource.externalSourceType}
                                externalSourceUrl={enrichedSource.externalSourceUrl}
                              />
                            </div>
                          </div>
                        ) : (
                          getExternalSourceTranslation(enrichedSource.externalSourceType)
                        )
                      }
                    >
                      <ExternalSourceBlock>{v}</ExternalSourceBlock>
                    </ExternalSourceTooltip>
                  )
                })}
              </ExternalSourceBlockGroup>
            )}
          </div>

          <div className="relative flex h-[621.41px] w-full items-center justify-center">
            <LightBoxNextImageByIcon
              src={imageSrc ?? ''}
              alt={alt}
              className="bg-ivory-60 object-contain object-center"
              fill
              onContextMenu={e => e.preventDefault()}
            />
          </div>

          {!isSingle && (
            <div className="relative flex empty:hidden">
              <div className="overflow-x-scroll scrollbar-hide" ref={scrollContainerRef}>
                <div
                  className="flex flex-nowrap gap-4"
                  style={{
                    width: (pages + 1) * itemsFitInContainer * (ITEM_WIDTH + 16),
                  }}
                >
                  {children}
                </div>
              </div>

              <div
                className={cn(
                  'truncate-gradient-left absolute bg-ivory-90 w-[81.81px] h-[106px] top-[-1px] bottom-0',
                  'pointer-events-none absolute  transition-opacity opacity-100 ',
                  !canScrollPrev && 'opacity-0'
                )}
              />
              <div className="absolute right-0 flex h-[106px] w-[116.32px] bg-ivory-100">
                <div
                  className={cn(
                    'truncate-gradient-right bg-ivory-90 w-[81.81px] h-[106px] top-[-1px]',
                    'pointer-events-none absolute left-[-81px] transition-opacity opacity-100 ',
                    !canScrollNext && 'opacity-0'
                  )}
                />

                <div className="flex h-full w-[116.32px] items-center justify-center gap-2 ">
                  <button onClick={handlePrevious} disabled={!canScrollPrev} aria-label="Previous">
                    <NavArrowLeft
                      className={cn(
                        !canScrollPrev && 'opacity-20',
                        canScrollPrev && 'hover:bg-black-100 hover:text-ivory-100'
                      )}
                    />
                  </button>
                  <button onClick={handleNext} disabled={!canScrollNext} aria-label="Next">
                    <NavArrowRight
                      className={cn(
                        !canScrollNext && 'opacity-20',
                        canScrollNext && 'hover:bg-black-100 hover:text-ivory-100'
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </ThumbnailCarouselContext.Provider>
    </LightboxProvider>
  )
}

interface ThumbnailCarouselItemProps extends ImageProps {
  index: number
  enrichedSource?: {
    externalSourceType: ExternalSource
    externalSourceUrl: string
    thumbnail?: string[] | null
  } | null
}
export const ThumbnailCarouselItem = ({ src, alt, index }: ThumbnailCarouselItemProps) => {
  const context = useContext(ThumbnailCarouselContext)
  const imageSrc = src ? imageBasePath(src.toString()) : ''

  return (
    <button
      onClick={() => context.setIndex(index)}
      style={{ '--item-width': `${ITEM_WIDTH}px` } as CSSProperties}
      className=" relative h-[103px] w-[var(--item-width)] flex-none overflow-hidden"
    >
      <LightBoxNextImage
        disableOpeningLightbox
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
