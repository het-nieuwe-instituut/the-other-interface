import { ImageProps } from 'next/image'
import { useContext, useRef, useEffect } from 'react'
import { LightboxContext } from './LightboxProvider'
import NextImage from 'next/image'
import { IconButton } from '../icon-button/component'
import ExternalLink from '@/features/ui/icons/external-link.svg'
export interface LightBoxNextImageProps extends ImageProps {
  caption?: string
}
export const LightBoxNextImage = (props: LightBoxNextImageProps) => {
  const { src, caption } = props
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
      <NextImage {...props} />
    </button>
  )
}

export interface LightBoxNextImageByIconProps extends ImageProps {
  caption?: string
}
export const LightBoxNextImageByIcon = (props: LightBoxNextImageByIconProps) => {
  const { src, caption } = props
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

  return (
    <div className="group relative size-full">
      <NextImage {...props} />
      <IconButton
        icon={<ExternalLink className="size-6" />}
        className="absolute right-4 top-4 z-[9999] bg-ivory-100 opacity-0 transition-opacity group-hover:opacity-100"
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
      />
    </div>
  )
}
