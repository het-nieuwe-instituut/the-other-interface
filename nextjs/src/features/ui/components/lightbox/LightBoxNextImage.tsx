import { ImageProps } from 'next/image'
import { useContext, useRef, useEffect } from 'react'
import { LightboxContext } from './LightboxProvider'
import NextImage from 'next/image'

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
