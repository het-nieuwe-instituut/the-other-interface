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
    const { svgRef } = useGalaxyController(dimensions, data)

    return (
        <svg width={svgWidth} height={svgHeight} style={{ background: 'red' }} ref={svgRef}>
            {data.map(item => (
                <Circle key={item.name}>
                    {/* <div
                        style={{
                            height: '100%',
                            width: '100%',
                            background: 'blue',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <p>testing this thing</p>
                    </div> */}
                </Circle>
            ))}
        </svg>
    )
}

export default RelatedObject
