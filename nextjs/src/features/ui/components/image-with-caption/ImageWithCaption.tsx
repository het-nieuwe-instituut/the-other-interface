'use client'
import { imageBasePath } from '@/features/modules/modulesConstants'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { ImageProps } from 'next/image'
import { CSSProperties } from 'react'
import { cn } from '../../utils/cn'
import { LightBoxNextImageByIcon } from '../lightbox/LightBoxNextImage'
import { TypographyVariants } from '../typography/variants'

export interface ImageWithCaptionProps extends ImageProps {
  className?: string
  imageClassName?: string
  captionClassname?: string
  caption?: string
}

const DEFAULT_IMAGE_HEIGHT = 680

export const ImageWithCaption = ({
  src,
  alt,
  caption,
  className,
  captionClassname,
  imageClassName,
  height,
  width,
  ...restProps
}: ImageWithCaptionProps) => {
  const imageSrc = src ? imageBasePath(src.toString()) : ''
  const { t: commonT } = useTypeSafeTranslation('common')

  return (
    <figure className="relative flex flex-col gap-2 ">
      <div
        className={cn(className, 'relative max-w-[80rem] max-h-[600px] bg-ivory-60')}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        {!imageSrc ? (
          <div
            className={cn(className, 'relative')}
            style={{ '--default-image-height': `${DEFAULT_IMAGE_HEIGHT}px` } as CSSProperties}
          >
            <div className="flex h-[var(--default-image-height)] w-full items-center justify-center bg-gray-300 ">
              {commonT('somethingWentWrong')}
            </div>
          </div>
        ) : (
          <LightBoxNextImageByIcon
            src={imageSrc}
            alt={alt}
            className={cn('object-contain object-center', imageClassName)}
            sizes="100vw"
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
