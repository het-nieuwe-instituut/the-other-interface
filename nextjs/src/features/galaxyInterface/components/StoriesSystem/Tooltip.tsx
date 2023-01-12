import ApiClient from '@/features/graphql/api'
import useQuery from '@/features/shared/hooks/useQuery'
import { useWindowSize } from '@/features/shared/hooks/useWindowSize'
import { Box, Image, keyframes, Text } from '@chakra-ui/react'
import isEmpty from 'lodash/isEmpty'

import React, { useEffect, useRef, useState } from 'react'
import { ImageModuleFragmentFragment } from 'src/generated/graphql'

interface Props {
    id: string
    title: string
    description: string
}

const flicker = keyframes`
    0%   { opacity:1; width: 80px; height: 49px }
    50%  { opacity:0.5; width: 80px; height: 49px; backdrop-filter: blur(5px); }
    100% { opacity:1; width: 80px; height: 49px; backdrop-filter: blur(10px); }
`

const show = keyframes`
    0%  { opacity:0 }
    100% { opacity:1 }
`

const flickerAnimation = `${flicker} 600ms infinite`
const showAnimation = `${show} 360ms forwards`

export const Tooltip: React.FC<Props> = ({ id, title, description }) => {
    const { height: windowHeight = 0, width: windowWidth = 0 } = useWindowSize()
    const [growing, setGrowing] = useState(true)
    const [loading, setLoading] = useState(true)
    const [height, setHeight] = useState<number>(0)
    const [width, setWidth] = useState<number>(0)
    const ref = useRef<HTMLDivElement | null>(null)
    const { isLoading, isError, data } = useQuery(() => ApiClient?.storyImages({ id: id }))
    const components = data?.story.data?.attributes?.components?.filter(c => !isEmpty(c))
    const imgComponent = components?.find(x => x !== undefined) as ImageModuleFragmentFragment | undefined
    const offsetTop = ref.current?.getBoundingClientRect().top ?? 0
    const offsetLeft = ref.current?.getBoundingClientRect().left ?? 0
    const loadingAll = loading || isLoading
    const grow = keyframes`
        0%   { width: 80px; height: 49px; }
        100% { width: 300px; height: ${height}px; }
    `
    const adjust = keyframes`
        0%   { margin-top: 0; margin-left: 0 }
        100% {  margin-top: ${-getAdjustVerticalPosition(
            windowHeight,
            offsetTop,
            height
        )}px; margin-left: ${-getAdjustHorizontalPosition(windowWidth, offsetLeft, width)}px; }
    `
    const growAnimation = `${grow} 160ms linear`
    const adjustAnimation = `${adjust} 160ms forwards`

    useEffect(() => {
        if (!imgComponent?.image.data?.attributes?.url) {
            setLoading(false)
            setHeight(ref.current?.getBoundingClientRect().height ?? 0)
            setWidth(ref.current?.getBoundingClientRect().width ?? 0)
        }
    }, [imgComponent?.image.data?.attributes?.url])

    console.log(windowWidth, offsetLeft, width)

    return (
        <Box marginTop={0} animation={!(loadingAll || growing) ? adjustAnimation : ''} pointerEvents={'none'}>
            <Box
                animation={loadingAll ? flickerAnimation : growAnimation}
                onAnimationEnd={() => setGrowing(false)}
                width={'300px'}
                minHeight={'49px'}
                background={'rgba(255, 255, 255, 0.5)'}
                borderRadius={'5px'}
                backdropFilter={'blur(10px)'}
                overflow={'hidden'}
            >
                <Box opacity={0} width={'300px'} animation={!growing ? showAnimation : ''} ref={ref}>
                    {isError ? (
                        <p>Something went wrong</p>
                    ) : (
                        <Box padding="15px">
                            <Text textStyle={'h5'}>{title}</Text>

                            {imgComponent?.image.data?.attributes?.url && (
                                <Box width={'100%'}>
                                    <Image
                                        src={imgComponent?.image.data?.attributes?.url ?? ''}
                                        width={'100%'}
                                        alt={imgComponent?.alt_text ?? ''}
                                        onLoad={() => {
                                            setLoading(false)
                                            setHeight(ref.current?.getBoundingClientRect().height ?? 0)
                                            setWidth(ref.current?.getBoundingClientRect().width ?? 0)
                                        }}
                                        mt={'10px'}
                                    />
                                </Box>
                            )}
                            {description && (
                                <Text textStyle={'micro'} mt={'10px'}>
                                    {description}
                                </Text>
                            )}
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

function getAdjustHorizontalPosition(windowWidth: number, offsetLeft: number, elementWidth: number) {
    if (windowWidth < offsetLeft + elementWidth) {
        return elementWidth + 34
    }

    return 0
}

function getAdjustVerticalPosition(windowHeight: number, offsetTop: number, elementHeight: number) {
    if (windowHeight < offsetTop + elementHeight) {
        return offsetTop + elementHeight - windowHeight
    }

    return 0
}
