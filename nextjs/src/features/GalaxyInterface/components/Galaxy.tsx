import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useId, useMemo } from 'react'
import { ObjectPerType, usePresenter, ZoomLevel } from '../hooks/usePresenter'
import { Circle } from './Circle'

interface Props {
    data: ObjectPerType[]
    dimensions: {
        height: number
        width: number
    }
}

const Object: React.FC<Props> = ({ data = [], dimensions }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height
    const objectsPerTypeWithIds = useMemo(
        () => data.map(item => ({ ...item, name: item.class.substring(item.class.lastIndexOf('/') + 1) })),
        [data]
    )

    const id = useId().replaceAll(':', '')
    const { svgRef, setZoomLevel, zoomLevel } = usePresenter(dimensions, objectsPerTypeWithIds, id)

    return (
        <Box height={dimensions.height} boxSizing="border-box" position={'relative'} overflow="hidden">
            {zoomLevel === ZoomLevel.Zoom0 && (
                <Flex
                    height="100%"
                    width="100%"
                    position="absolute"
                    alignItems={'center'}
                    justifyContent={'center'}
                    zIndex={1}
                >
                    <button onClick={() => setZoomLevel(ZoomLevel.Zoom1)}>
                        <Text width="12.5rem">National Collection for Dutch Architecture and Urban Planning</Text>
                    </button>
                </Flex>
            )}

            <svg
                overflow="visible"
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            >
                <foreignObject
                    xmlns="http://www.w3.org/1999/xhtml"
                    x={-(1169.17 * 3.3) + dimensions.width / 2}
                    y={-(1169.17 * 3.3) + dimensions.height / 2}
                    width={1169.17 * 3.3}
                    height={1169.17 * 3.3}
                >
                    <Flex
                        width={'100%'}
                        height="100%"
                        background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
                    ></Flex>
                </foreignObject>
                <foreignObject
                    xmlns="http://www.w3.org/1999/xhtml"
                    x={-(1169.17 * 3.3) + dimensions.width / 2}
                    y={dimensions.height / 2}
                    width={1169.17 * 3.3}
                    height={1169.17 * 3.3}
                >
                    <Flex
                        width={'100%'}
                        height="100%"
                        background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
                    ></Flex>
                </foreignObject>

                <foreignObject
                    xmlns="http://www.w3.org/1999/xhtml"
                    x={0 + dimensions.width / 2}
                    y={-(1169.17 * 3.3) + dimensions.height / 2}
                    width={1169.17 * 3.3}
                    height={1169.17 * 3.3}
                >
                    <Flex
                        width={'100%'}
                        height="100%"
                        background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
                    ></Flex>
                </foreignObject>
                <foreignObject
                    xmlns="http://www.w3.org/1999/xhtml"
                    x={0 + dimensions.width / 2}
                    y={dimensions.height / 2}
                    width={1169.17 * 3.3}
                    height={1169.17 * 3.3}
                >
                    <Flex
                        width={'100%'}
                        height="100%"
                        background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
                    ></Flex>
                </foreignObject>
                <foreignObject
                    xmlns="http://www.w3.org/1999/xhtml"
                    x={dimensions.width - 1000}
                    y={-((1169.17 * 6.6) / 2 - dimensions.height / 2)}
                    width={1169.17 * 6.6}
                    height={1169.17 * 6.6}
                >
                    <Flex
                        width={'100%'}
                        height="100%"
                        background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
                    ></Flex>
                </foreignObject>

                <foreignObject
                    xmlns="http://www.w3.org/1999/xhtml"
                    x={-1169.17 * 6.6 + 1000}
                    y={-((1169.17 * 6.6) / 2 - dimensions.height / 2)}
                    width={1169.17 * 6.6}
                    height={1169.17 * 6.6}
                >
                    <Flex
                        width={'100%'}
                        height="100%"
                        background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
                    ></Flex>
                </foreignObject>
                {objectsPerTypeWithIds.map((item, index, array) => {
                    return (
                        <Circle key={`${index}-${array.length}`} className={id} id={item.name} name={item.name}>
                            {zoomLevel === ZoomLevel.Zoom1 && (
                                <div
                                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <button onClick={() => undefined}>Go to {item.name}</button>
                                </div>
                            )}
                        </Circle>
                    )
                })}
            </svg>
        </Box>
    )
}

export default Object
