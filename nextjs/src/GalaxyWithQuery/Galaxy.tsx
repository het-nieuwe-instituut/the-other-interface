import { Button, Flex } from '@chakra-ui/react'
import React, { useId, useMemo } from 'react'
import { useGalaxyController } from './useGalaxyController'
import { Circle } from './Circle'
import { ObjectPerType } from '../pages/galaxy'

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
    const objectsPerTypeWithIds = useMemo(() => data.map((item, index) => ({...item, name: item.class. })), [data])
    const id = useId().replaceAll(':', '')
    const { svgRef } = useGalaxyController(dimensions, objectsPerTypeWithIds, id)

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef} style={{ background: 'lightGrey' }}>
           <defs>
                {objectsPerTypeWithIds.map(item => {
                    return (
                        <radialGradient key={item.name} id={`gradient-${item.name}`}>
                            <stop offset="40%" stopColor="red" />
                            <stop offset="160%" stopColor="transparent" />
                        </radialGradient>
                    )
                })}
            </defs>
            {objectsPerTypeWithIds.map(item => {
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
