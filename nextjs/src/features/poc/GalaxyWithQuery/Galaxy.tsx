import React, { useId, useMemo } from 'react'
import { useGalaxyController } from './useGalaxyController'
import { Circle } from './Circle'
import { ObjectPerType } from 'src/pages/poc/galaxy'

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
    const objectsPerTypeWithIds = useMemo(
        () => data.map(item => ({ ...item, name: item.class.substring(item.class.lastIndexOf('/') + 1) })),
        [data]
    )
    const id = useId().replaceAll(':', '')
    const { svgRef, zoomout } = useGalaxyController(dimensions, objectsPerTypeWithIds, id)

    return (
        <div style={{ overflow: 'hidden' }}>
            <svg
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox="0 0 1000 1000"
                style={{ background: 'grey' }}
            >
                <defs>
                    {objectsPerTypeWithIds.map((item, index, array) => {
                        return (
                            <radialGradient key={`${index}-${array.length}`} id={`gradient-${item.name}`}>
                                <stop offset="40%" stopColor="white" />
                                <stop offset="160%" stopColor="transparent" />
                            </radialGradient>
                        )
                    })}
                </defs>
                {objectsPerTypeWithIds.map((item, index, array) => {
                    return (
                        <Circle key={`${index}-${array.length}`} className={id} name={item.name}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button onClick={() => undefined}>Go to {item.name}</button>
                            </div>
                        </Circle>
                    )
                })}

                <foreignObject></foreignObject>
            </svg>
            <button onClick={zoomout}>zoom out</button>
        </div>
    )
}

export default Object
