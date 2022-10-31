/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { InstancesPerClass, usePresenter } from './usePresenter'

interface Props {
    data: InstancesPerClass[]
    dimensions?: {
        height: number
        width: number
    }
}

const defaultDimensions = {
    width: 537.85,
    height: 537.85,
}

export const StoriesSystem: React.FC<Props> = ({ data = [], dimensions = defaultDimensions }) => {
    const svgWidth = dimensions.width
    const svgHeight = dimensions.height
    const { svgRef, triangles, dataPoints, showTooltip, hideTooltip } = usePresenter(data)

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef}>
            <style>
                {`
                    .StoriesSystem-dot { cursor: pointer }
                `}
            </style>
            <g>
                {triangles.map((triangle, index, array) => (
                    <polygon key={`${index}-${array.length}`} points={triangle.join()} fill={'transparent'}></polygon>
                ))}
            </g>
            {dataPoints.map((item, index, array) => (
                <Link href={`/story/${item.slug}`} key={`${index}-${array.length}`}>
                    <g className="StoriesSystem-dot" id={item.id}>
                        <foreignObject
                            x={`${item.point[0]}`}
                            y={`${item.point[1]}`}
                            height={'7.47px'}
                            width={'7.47px'}
                            className={`${item.parent}-dot`}
                            data-id={item.id}
                        >
                            <Box
                                onMouseEnter={e => showTooltip(e, item)}
                                onMouseLeave={() => hideTooltip(item)}
                                height="100%"
                                width="100%"
                                background="radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 77.6%);"
                            ></Box>
                        </foreignObject>
                    </g>
                </Link>
            ))}
        </svg>
    )
}
