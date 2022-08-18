import React, { useLayoutEffect, useRef } from 'react'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { background, Button, useId } from '@chakra-ui/react'
import { Circle } from '../Galaxy/Circle'
import RelatedObject from './RelatedObject'
import { CollectionItem, useGalaxyController } from '../business/d3/useGalaxyController'
import { useGalaxyAvoidController } from '../business/d3/useGalaxyAvoidController'
import times from 'lodash/times'
import randomstring from 'randomstring'

interface Props {
    data?: CollectionItem[]
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

function createChild(name: string): any {
    return {
        name: name ? name : randomstring.generate(),
        children: times(Math.floor(Math.random() * (10 - 5 + 1) + 5), () => ({
            name: randomstring.generate(),
            children: times(Math.floor(Math.random() * (10 - 5 + 1) + 5), () => ({
                name: randomstring.generate(),
                children: [],
            })),
        })),
    }
}

const testData = [
    createChild('publications'),
    createChild('projects'),
    createChild('archives'),
    createChild('objects'),
    createChild('people'),
]

const ObjectUniverse: React.FC<Props> = ({ data = testData, dimensions }) => {
    const { width, height, margin } = dimensions
    const svgWidth = width + (margin?.left ?? 0) + (margin?.right ?? 0)
    const svgHeight = height + (margin?.top ?? 0) + (margin?.bottom ?? 0)
    const id = useId().replaceAll(':', '')
    const { svgRef, dataDimensions } = useGalaxyAvoidController(dimensions, data, id)

    return (
        <>
            <svg width={svgWidth} height={svgHeight} ref={svgRef} style={{ background: 'lightGrey' }}>
                <defs>
                    {data.map(item => {
                        return (
                            <radialGradient id={`gradient-${item.name}`}>
                                <stop offset="40%" stopColor="yellow" />
                                <stop offset="160%" stopColor="transparent" />
                            </radialGradient>
                        )
                    })}
                </defs>
                <rect fill={'red'} className={`wall-${id}`}></rect>
                {data.map(item => {
                    const dimension = dataDimensions.find(item => item.name === item.name)
                    return (
                        <Circle key={item.name} className={id} name={item.name}>
                            {/* <RelatedObject
                                fill={'blue'}
                                name={item.name}
                                data={item.children}
                                dimensions={{ width: dimension?.takeSpace ?? 0, height: dimension?.takeSpace ?? 0 }}
                            /> */}
                        </Circle>
                    )
                })}
            </svg>
        </>
    )
}

export default ObjectUniverse
