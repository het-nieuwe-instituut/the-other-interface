/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@chakra-ui/react'
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
    const { svgRef, triangles, dataPoints } = usePresenter(data)

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef}>
            <style>
                {`
                    .text { font: italic 13px sans-serif }
                `}
            </style>
            <g>
                {triangles.map((triangle, index, array) => (
                    <polygon key={`${index}-${array.length}`} points={triangle.join()} fill={'transparent'}></polygon>
                ))}
            </g>
            {dataPoints.map((item, index, array) => {
                return (
                    <g key={`${index}-${array.length}`} className="StoriesSystem-dot">
                        <foreignObject
                            x={`${item.point[0]}`}
                            y={`${item.point[1]}`}
                            height={'7.47px'}
                            width={'7.47px'}
                            className={`${item.parent}-dot`}
                            data-id={item.id}
                        >
                            <Box
                                height="100%"
                                width="100%"
                                background="radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 77.6%);"
                            ></Box>
                        </foreignObject>
                    </g>
                )
            })}
        </svg>
    )
}
