import { useKeenSlider } from 'keen-slider/react'
import React, { createRef, useEffect, useState } from 'react'
import { Maybe, UploadFileEntity } from 'src/generated/graphql'

const usePresenter = (items: Maybe<UploadFileEntity[]> | undefined) => {
    const carouselRef = createRef<HTMLDivElement>()
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)

    const [options, setOptions] = useState({})
    const [sliderRef, instanceRef] = useKeenSlider(options)

    const handlePaginationNext = () => {
        instanceRef?.current?.next()
        setCurrentSlide(Number(currentSlide) + 1)
    }

    const handlePaginationPrev = () => {
        instanceRef?.current?.prev()
        setCurrentSlide(Number(currentSlide) - 1)
    }

    const calculateImagePropotions = (
        originalImageWidth: number,
        originaImagelHeight: number,
        adjustToHeight: number,
        maxWidth: number
    ) => {
        let caulculatedWidth = (adjustToHeight * originalImageWidth) / originaImagelHeight
        let calculatedHeight = adjustToHeight
        if (caulculatedWidth >= maxWidth) {
            calculatedHeight = (maxWidth * originaImagelHeight) / originalImageWidth
            caulculatedWidth = (calculatedHeight * originalImageWidth) / originaImagelHeight
        }

        return {
            width: caulculatedWidth,
            height: calculatedHeight,
        }
    }

    const getSlides = (maxSlideWidth: number) => {
        if (maxSlideWidth === 0) {
            return
        }
        const imageHeight = 600
        const margin = 20

        const slides = items?.map(current => {
            const originaImagelHeight = current?.attributes?.height || 1
            const originalImageWidth = current?.attributes?.width || 1
            const calculateWidth = calculateImagePropotions(
                originalImageWidth,
                originaImagelHeight,
                imageHeight,
                maxSlideWidth
            ).width
            return { size: (calculateWidth + margin) / maxSlideWidth, spacing: 0 }
        })

        return slides
    }

    useEffect(() => {
        if (items && items?.length > 0) {
            setOptions({
                initial: 0,
                created() {
                    setLoaded(true)
                },
                mode: 'free-snap',
                slides: getSlides,
            })
        }
    }, [items])

    return {
        handlePaginationNext,
        handlePaginationPrev,
        calculateImagePropotions,
        sliderRef,
        instanceRef,
        size: instanceRef?.current?.size ?? 0,
        carouselRef,
        loaded,
    }
}

export default usePresenter
