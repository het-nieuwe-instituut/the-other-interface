
import { Circle } from '@/features/GalaxyInterface/components/Circle'
import { useId, useMemo } from 'react'
import { ObjectPerType } from 'src/pages/poc/galaxy'
import { usePresenter } from './usePresenter'

type Props = {
    data: ObjectPerType[]
    dimensions: {
        height: number
        width: number
    }
}

const FilterClouds: React.FunctionComponent<Props> = ({ dimensions, data }) => {

    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height
    const objectsPerTypeWithIds = useMemo(
        () => data.map(item => ({ ...item, name: item.class.substring(item.class.lastIndexOf('/') + 1) })),
        [data]
    )
    const id = useId().replaceAll(':', '')
    const { svgRef } = usePresenter(dimensions, objectsPerTypeWithIds, id)

    return (
        <div style={{ overflow: 'hidden' }}>
            <svg
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            >
                <defs>
                    {objectsPerTypeWithIds.map((item, index, array) => {
                        return (
                            <radialGradient key={`${index}-${array.length}`} id={`gradient-${item.name}`}>
                                <stop stopColor="#F7FF96" />
                                <stop offset="0.927083" stopColor="#F9FFB5" stopOpacity="0.12" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </radialGradient>
                        )
                    })}
                </defs>
                {objectsPerTypeWithIds.map((item, index, array) => {
                    return (
                        <Circle key={`${index}-${array.length}`} className={id}>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <button onClick={() => undefined}>Go to {item.name}</button>
                            </div>
                        </Circle>
                    )
                })}
            </svg>
        </div>
    )
}

export default FilterClouds