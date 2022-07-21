import { useId } from '@chakra-ui/react'
import React from 'react'
import { CollectionItem, useGalaxyController } from '../business/d3/useGalaxyController'
import { Circle } from '../Galaxy/homepage/components/core/Circle'

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

const RelatedObject: React.FC<Props> = ({ data = [], dimensions }) => {
    const { width, height, margin } = dimensions
    const svgWidth = width + (margin?.left ?? 0) + (margin?.right ?? 0)
    const svgHeight = height + (margin?.top ?? 0) + (margin?.bottom ?? 0)
    const id = useId().replaceAll(':', 'test')
    const { svgRef, dataDimensions } = useGalaxyController(dimensions, data, id)

    return (
        <>
            <svg
                width={svgWidth}
                height={svgHeight}
                style={{ height: dimensions.height, width: dimensions.width }}
                ref={svgRef}
            >
                {data.map(item => {
                    const takeSpace = dataDimensions.find(item => item.name === item.name)?.takeSpace ?? 0
                    return (
                        <Circle key={item.name} className={id} r={takeSpace / 2}>
                            testing
                        </Circle>
                    )
                })}
            </svg>
        </>
    )
}

export default RelatedObject
