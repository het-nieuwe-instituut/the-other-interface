import { CollectionItem, useGalaxyController } from '@/features/poc/business/d3/useGalaxyController'
import { Circle } from '@/features/poc/Galaxy/Circle'
import { createChild } from '@/features/poc/Galaxy/GalaxyUpdates'
import { Box, useDimensions } from '@chakra-ui/react'
import { createRef, useEffect, useId, useState } from 'react'

type Props = {
    items: {name: string}[]
}

const FilterClouds = (props: Props) => {
    const id = useId().replaceAll(':', '')
    const wrapperRef = createRef<HTMLDivElement>()
    const dimensions = useDimensions(wrapperRef, true)
    const width = dimensions?.contentBox?.width;
    const height = 800
    const { items } = props
    const [data, setData] = useState<CollectionItem[]>()
    

    useEffect(() => {
        const collectionItems = items.map(item => {
            return createChild(item.name)
        })
        setData(collectionItems)
    }, [items])

    const { svgRef } = useGalaxyController({ height, width }, data, id)
    return (
        <Box ref={wrapperRef}>
            <svg width={width} height={height} ref={svgRef} style={{ background: 'lightGrey' }}>
                <defs>
                    {data?.map(item => {
                        return (
                            <radialGradient key={`gradient-${item.name}`} id={`gradient-${item.name}`}>
                                <stop offset="40%" stopColor="yellow" />
                                <stop offset="160%" stopColor="transparent" />
                            </radialGradient>
                        )
                    })}
                </defs>
                {data?.map(item => {
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
        </Box>
    )
}

export default FilterClouds
