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
    const objectsPerTypeWithIds = useMemo(() => data.map((item, index) => ({...item, name: item.class.substring(item.class.lastIndexOf('/') + 1) })), [data])
    const id = useId().replaceAll(':', '')
    const { svgRef, zoomout } = useGalaxyController(dimensions, objectsPerTypeWithIds, id)

    return (
        <div style={{overflow: 'hidden'}}>
        <svg width={svgWidth} height={svgHeight} ref={svgRef} viewBox="0 0 1000 1000" style={{ background: 'lightGrey' }}>
           <defs>
                {objectsPerTypeWithIds.map((item, index, array) => {
                    return (
                        <radialGradient  key={`${index}-${array.length}`} id={`gradient-${item.name}`}>
                            <stop offset="40%" stopColor="red" />
                            <stop offset="160%" stopColor="transparent" />
                        </radialGradient>
                    )
                })}
            </defs>
            {objectsPerTypeWithIds.map((item, index, array) => {
                return (
                    <Circle key={`${index}-${array.length}`}  className={id} name={item.name}>
                        <Flex flex={1} alignItems={'center'} justifyContent={'center'} height={'100%'}>
                            <Button className={`gotoitem`}>{item.name}</Button>
                        </Flex>
                    </Circle>
                )
            })}

            <foreignObject>
            </foreignObject>
            </svg>
            <Button onClick={zoomout}>zoom out</Button>
        </div>
    )
}

export default Object
