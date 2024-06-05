'use client'
import { WebOptions, useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'

export function useImageCarouselState(getSlidesConfiguration: WebOptions<unknown>['slides']) {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    created() {
      setLoaded(true)
    },
    mode: 'free-snap',
    slides: getSlidesConfiguration,
  })

  const next = () => {
    instanceRef?.current?.next()
  }

  const previous = () => {
    instanceRef?.current?.prev()
  }
  return {
    instanceRef,
    sliderRef,
    next,
    previous,
    loaded,
  }
}
