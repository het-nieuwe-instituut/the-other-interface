import { useWindowSize } from '@/features/shared/hooks/useWindowSize'

import { useEffect, useRef, useState } from 'react'
import { GalaxyTooltipProps } from './GalaxyTooltip'

export function useGalaxyTooltip(props: GalaxyTooltipProps) {
    const { height: windowHeight = 0, width: windowWidth = 0 } = useWindowSize()
    const [growing, setGrowing] = useState(true)
    const [loading, setLoading] = useState(true)
    const [height, setHeight] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLDivElement | null>(null)
    const offsetTop = ref.current?.getBoundingClientRect().top ?? 0
    const offsetLeft = ref.current?.getBoundingClientRect().left ?? 0

    useEffect(() => {
        if (!props.url) {
            setLoading(false)
            setHeight(ref.current?.getBoundingClientRect().height ?? 0)
            setWidth(ref.current?.getBoundingClientRect().width ?? 0)
        }
    }, [props.url])

    return {
        ...props,
        ref,
        windowWidth,
        windowHeight,
        growing,
        setGrowing,
        setWidth,
        setHeight,
        setLoading,
        loadingAll: props.isLoading || loading,
        height,
        width,
        positionAdjustMents: {
            top: getAdjustVerticalPosition(windowHeight, offsetTop, height),
            left: getAdjustHorizontalPosition(windowWidth, offsetLeft, width),
        },
    }
}

function getAdjustHorizontalPosition(windowWidth: number, offsetLeft: number, elementWidth: number) {
    if (windowWidth < offsetLeft + elementWidth) {
        return -(elementWidth + 34)
    }

    return 0
}

function getAdjustVerticalPosition(windowHeight: number, offsetTop: number, elementHeight: number) {
    if (windowHeight < offsetTop + elementHeight) {
        return -(offsetTop + elementHeight - windowHeight)
    }

    return 0
}
