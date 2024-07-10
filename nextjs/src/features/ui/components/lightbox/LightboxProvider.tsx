'use client'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren, useCallback, useLayoutEffect, useRef, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/plugins/captions.css'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import 'yet-another-react-lightbox/plugins/counter.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import Next from '@/features/ui/icons/Next.svg'
import Previous from '@/features/ui/icons/Previous.svg'
import { TypographyVariants } from '../typography/variants'

export const LightboxContext = React.createContext<{
  toggle: (src: string | undefined) => void
  registerImage: (opts: { src: string; caption?: string }) => void
  images: { src: string; height?: number; width?: number }[]
}>({
  toggle: () => {},
  registerImage: () => {},
  images: [] as { src: string; height?: number; width?: number }[],
})

export const LightboxProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [index, setIndex] = React.useState<number | undefined>(undefined)
  const [images, setImages] = useState<
    { src: string; caption?: string; height?: number; width?: number }[]
  >([])
  const pathname = usePathname()
  const prevPath = useRef(pathname)

  useLayoutEffect(() => {
    if (prevPath.current !== pathname) {
      setIndex(undefined)
      setImages([])
      prevPath.current = pathname
    }
  }, [pathname])

  const registerImage = useCallback(({ src, caption = '' }: { src: string; caption?: string }) => {
    return setImages(images => {
      if (images.find(image => image.src === src)) {
        return images
      }
      return [...images, { src, caption }]
    })
  }, [])

  return (
    <LightboxContext.Provider
      value={{
        registerImage,
        toggle: src => setIndex(images.findIndex(image => image.src === src)),
        images,
      }}
    >
      {children}
      <Lightbox
        on={{
          view: ({ index }) => {
            setIndex(index)
          },
          entered: () => {
            const lightboxImages = document.querySelectorAll('.yarl__slide_image')

            lightboxImages.forEach(image => {
              image.addEventListener('contextmenu', e => {
                e.preventDefault()
              })
            })
          },
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        carousel={{
          finite: true,
        }}
        render={{
          iconPrev: () => (index === 0 ? undefined : <Previous />),
          iconNext: () => (index === images.length - 1 ? undefined : <Next />),
        }}
        className={TypographyVariants({ socialLarge: 'md' })}
        open={index !== undefined}
        close={() => setIndex(undefined)}
        index={index}
        plugins={[Zoom, Captions, Counter]}
        slides={images.map(image => ({
          src: image.src ?? '',
          description: image.caption ?? '',
          width: image.width ?? 0,
          height: image.height ?? 0,
        }))}
      />
    </LightboxContext.Provider>
  )
}
