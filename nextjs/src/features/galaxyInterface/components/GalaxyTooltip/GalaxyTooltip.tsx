import { Box, Image, keyframes, Text } from '@chakra-ui/react'

import React from 'react'
import { useGalaxyTooltip } from './useGalaxyTooltip'

export interface GalaxyTooltipProps {
    title?: string
    url?: string
    alt?: string
    description?: string
    isError?: boolean
    isLoading?: boolean
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

export const GalaxyTooltip: React.FC<GalaxyTooltipProps> = props => {
    const {
        ref,
        height,
        isError,
        url,
        alt,
        title,
        description,
        loadingAll,
        setGrowing,
        growing,
        positionAdjustMents,
        setLoading,
        setHeight,
        setWidth,
    } = useGalaxyTooltip(props)
    const grow = keyframes`
        0%   { width: 80px; height: 49px; }
        100% { width: 300px; height: ${height}px; }
    `
    const adjust = keyframes`
        0%   { margin-top: 0; margin-left: 0 }
        100% {  margin-top: ${positionAdjustMents.top}px; margin-left: ${positionAdjustMents.left}px; }
    `
    const growAnimation = `${grow} 160ms linear`
    const adjustAnimation = `${adjust} 160ms forwards`

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

                            {url && (
                                <Box width={'100%'}>
                                    <Image
                                        src={url ?? ''}
                                        width={'100%'}
                                        alt={alt ?? ''}
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
