import { Box, Button, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, useId } from '@chakra-ui/react'
import times from 'lodash/times'
import randomstring from 'randomstring'
import React, { useState } from 'react'
import { useGalaxyController } from '../business/d3/useGalaxyController'
import { Circle } from './Circle'

function createChild(name?: string) {
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

export interface Order {
    id: string
    order: number
    fixedDiameter?: number
}

const GalaxyUpdates: React.FC = () => {
    const id = useId().replaceAll(':', '')
    const [height, setHeight] = useState(1000)
    const [width, setWidth] = useState(1000)
    const [data, setData] = useState(testData)
    const [orders, setOrders] = useState<Order[]>(
        testData.map((item, index) => ({ id: item.name, order: index, fixedDiameter: undefined }))
    )
    const { svgRef } = useGalaxyController({ height, width }, data, id, orders)

    const handleChangeWidth = (width: number) => setWidth(width)
    const handleChangeHeight = (height: number) => setHeight(height)
    return (
        <>
            <Button
                onClick={() => {
                    setData([...data, createChild()])
                }}
            >
                add circle
            </Button>
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
                <SliderThumb fontSize="sm" boxSize="32px">
                    {height}
                </SliderThumb>
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
                <SliderThumb fontSize="sm" boxSize="32px">
                    {width}
                </SliderThumb>
            </Slider>
            <svg width={width} height={height} ref={svgRef} style={{ background: 'lightGrey' }}>
                <defs>
                    {data.map(item => {
                        return (
                            <radialGradient key={`gradient-${item.name}`} id={`gradient-${item.name}`}>
                                <stop offset="40%" stopColor="yellow" />
                                <stop offset="160%" stopColor="transparent" />
                            </radialGradient>
                        )
                    })}
                </defs>
                {data.map(item => {
                    return (
                        <Circle key={item.name} className={id} name={item.name}>
                            <div
                                style={{
                                    display: 'flex',
                                    height: '100%',
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {item.name}
                            </div>
                        </Circle>
                    )
                })}
            </svg>

            {orders.map(order => {
                return (
                    <form key={order.id}>
                        <h2>{order.id}</h2>
                        <Box display={'flex'}>
                            {/* <Box>
                            <label>order</label>
                            <Input onChange={e => setValue(e.currentTarget.value)} value={order.order}  />
                        </Box> */}
                            <Box>
                                <label>fixed diameter</label>
                                <Input
                                    onChange={e => {
                                        const newOrders = orders.reduce<Order[]>((accumilator, current) => {
                                            if (current.id === order.id) {
                                                const updatedItem = {
                                                    ...current,
                                                    fixedDiameter: parseInt(e.currentTarget.value),
                                                }
                                                return [...accumilator, updatedItem]
                                            }
                                            return accumilator
                                        }, [])
                                        return setOrders(newOrders)
                                    }}
                                    value={order.fixedDiameter}
                                />
                            </Box>
                        </Box>
                    </form>
                )
            })}
        </>
    )
}

export default GalaxyUpdates
