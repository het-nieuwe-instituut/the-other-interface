import React, { useLayoutEffect, useRef } from 'react'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { background, Button } from '@chakra-ui/react'
import { Circle } from '../Galaxy/homepage/components/core/Circle'
import RelatedObject from './RelatedObject'
import { CollectionItem, useGalaxyController } from '../business/d3/useGalaxyController'

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

const ObjectUniverse: React.FC<Props> = ({ data = [], dimensions }) => {
    const { width, height, margin } = dimensions
    const svgWidth = width + (margin?.left ?? 0) + (margin?.right ?? 0)
    const svgHeight = height + (margin?.top ?? 0) + (margin?.bottom ?? 0)
    const { svgRef } = useGalaxyController(dimensions, data)

    return (
        <>
            <svg width={svgWidth} height={svgHeight} style={{ background: 'red' }} ref={svgRef}>
                {data.map(item => (
                    <Circle key={item.name}></Circle>
                ))}
            </svg>
        </>
    )
}

export default ObjectUniverse
