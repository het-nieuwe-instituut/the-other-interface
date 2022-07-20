import { Button, Flex } from '@chakra-ui/react'
import React, { useId } from 'react'
import { CollectionItem, useGalaxyController } from '../business/d3/useGalaxyController'
import { Circle } from './Circle'

interface Props {
    data: CollectionItem[]
    dimensions: {
        height: number
        width: number
        margin?: {
            left: number
            right: number
            top: number
            bottom: number
        }
    }
}

const Object: React.FC<Props> = ({ data = [], dimensions }) => {
    const { width, height, margin } = dimensions
    const svgWidth = width + (margin?.left ?? 0) + (margin?.right ?? 0)
    const svgHeight = height + (margin?.top ?? 0) + (margin?.bottom ?? 0)
    const id = useId().replaceAll(':', '')
    const { svgRef } = useGalaxyController(dimensions, data, id)

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef} style={{ background: 'lightGrey' }}>
            <defs>
                {data.map(item => {
                    return (
                        <radialGradient id={`gradient-${item.name}`}>
                            <stop offset="40%" stopColor="red" />
                            <stop offset="160%" stopColor="transparent" />
                        </radialGradient>
                    )
                })}
            </defs>
            {data.map(item => {
                return (
                    <Circle key={item.name} className={id} name={item.name}>
                        <Flex flex={1} alignItems={'center'} justifyContent={'center'} height={'100%'}>
                            <Button onClick={() => undefined}>Go to {item.name}</Button>
                        </Flex>
                    </Circle>
                )
            })}
        </svg>
    )
}

export default Object
