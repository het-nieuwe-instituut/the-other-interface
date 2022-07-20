import React, { useLayoutEffect, useRef } from 'react'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { background, Button, useId } from '@chakra-ui/react'
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
    const id = useId().replaceAll(':', '')
    const { svgRef, dataDimensions } = useGalaxyController(dimensions, data, id)

    return (
        <>
            <svg width={svgWidth} height={svgHeight} ref={svgRef} style={{ background: 'teal' }}>
                <rect fill={'red'} className={`wall-${id}`}></rect>
                {data.map(item => {
                    const dimension = dataDimensions.find(item => item.name === item.name)
                    return (
                        <Circle key={item.name} className={id}>
                            <RelatedObject
                                data={item.children}
                                dimensions={{ width: dimension?.takeSpace ?? 0, height: dimension?.takeSpace ?? 0 }}
                            />
                        </Circle>
                    )
                })}
            </svg>
        </>
    )
}

export default ObjectUniverse
