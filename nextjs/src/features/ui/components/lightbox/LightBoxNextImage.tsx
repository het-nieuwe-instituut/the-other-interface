'use client'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import NextImage, { ImageProps } from 'next/image'
import { useContext, useEffect, useRef } from 'react'
import { Button } from '../button/component'
import FullScreen from '@/features/ui/icons/FullScreen.svg'

import { LightboxContext } from './LightboxProvider'
export interface LightBoxNextImageProps extends ImageProps {
  caption?: string
  // but will still register the image
  disableOpeningLightbox?: boolean
}
export const LightBoxNextImage = (props: LightBoxNextImageProps) => {
  const { src, caption, disableOpeningLightbox, ...restProps } = props
  const { images, registerImage, toggle } = useContext(LightboxContext)

  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      if (src && typeof src === 'string') {
        registerImage({ src, caption })
      } else {
        registerImage({ src: src.toString(), caption })
      }
    }
  }, [caption, registerImage, src])

  if (disableOpeningLightbox) {
    return <NextImage src={src} {...restProps} />
  }
  return (
    <button
      disabled={images.find(v => v.src === src) === undefined}
      onClick={() => {
        if (src && typeof src === 'string') {
          toggle(src)
        } else {
          toggle(src.toString())
        }
      }}
    >
      <NextImage src={src} {...restProps} />
    </button>
  )
}

export interface LightBoxNextImageByIconProps extends ImageProps {
  caption?: string
}
export const LightBoxNextImageByIcon = (props: LightBoxNextImageByIconProps) => {
  const { src, caption } = props
  const { images, registerImage, toggle } = useContext(LightboxContext)
  const { t: commonT } = useTypeSafeTranslation('common')
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      if (src && typeof src === 'string') {
        registerImage({ src, caption })
      } else {
        registerImage({ src: src.toString(), caption })
      }
    }
  }, [caption, registerImage, src])

  return (
    <div className="group relative size-full">
      <NextImage {...props} />
      <Button
        intent={'tertiary'}
        className="absolute right-4 top-4 z-[9999]  opacity-0 transition-opacity group-hover:opacity-100"
        disabled={images.find(v => v.src === src) === undefined}
        size={'small'}
        onClick={e => {
          e.stopPropagation()
          e.preventDefault()
          if (src && typeof src === 'string') {
            toggle(src)
          } else {
            toggle(src.toString())
          }
        }}
      >
        {commonT('seeFullImage')}
        <FullScreen className="size-6" />
      </Button>
    </div>
  )
}
