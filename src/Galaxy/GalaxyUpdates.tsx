import React, { useLayoutEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { SimulationNodeDatum } from 'd3'
import { background, Button, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, useId } from '@chakra-ui/react'
import { Circle } from '../Galaxy/Circle'
import { CollectionItem, useGalaxyController } from '../business/d3/useGalaxyController'
import { useGalaxyAvoidController } from '../business/d3/useGalaxyAvoidController'
import times from 'lodash/times'
import randomstring from 'randomstring'

interface Props {}

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

const GalaxyUpdates: React.FC<Props> = () => {
    const id = useId().replaceAll(':', '')
    const [value, setValue] = useState('')
    const [height, setHeight] = useState(1000)
    const [width, setWidth] = useState(1000)
    const [data, setData] = useState(testData)
    const { svgRef, dataDimensions } = useGalaxyController({ height, width }, data, id)

    const handleChangeWidth = (width: number) => setWidth(width)
    const handleChangeHeight = (height: number) => setHeight(height)
    return (
        <>
            <Input onChange={e => setValue(e.currentTarget.value)} />
            <Button
                onClick={() => {
                    setData([...data, createChild(value)])
                }}
            />
            <Slider
                step={10}
                defaultValue={1000}
                min={0}
                max={2000}
                flex="1"
                focusThumbOnChange={false}
                value={height}
                onChange={handleChangeHeight}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" children={height} />
            </Slider>

            <Slider
                step={10}
                defaultValue={1000}
                min={0}
                max={2000}
                flex="1"
                focusThumbOnChange={false}
                value={width}
                onChange={handleChangeWidth}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px" children={width} />
            </Slider>
            <svg width={width} height={height} ref={svgRef}>
                <defs>
                    {data.map(item => {
                        return (
                            <radialGradient key={`gradient-${item.name}`} id={`gradient-${item.name}`}>
                                <stop offset="40%" stopColor="red" />
                                <stop offset="160%" stopColor="transparent" />
                            </radialGradient>
                        )
                    })}
                </defs>
                {data.map(item => {
                    const dimension = dataDimensions.find(item => item.name === item.name)
                    return (
                        <Circle key={item.name} className={id} name={item.name}>
                            Test
                        </Circle>
                    )
                })}
            </svg>
        </>
    )
}

export default GalaxyUpdates
