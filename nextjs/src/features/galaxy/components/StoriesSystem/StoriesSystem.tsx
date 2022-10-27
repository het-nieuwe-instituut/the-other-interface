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
    const { svgRef, triangles, dataPoints } = usePresenter(data)

    return (
        <svg width={svgWidth} height={svgHeight} ref={svgRef}>
            <style>
                {`
                    .StoriesSystem-dot { cursor: pointer }
                    .tooltip-container {
                        height: 100%;
                        width: 100%;
                        position: relative;
                        display: none;
                    }
                    .StoriesSystem-dot:hover .tooltip-container {
                        display: block;
                    }
                    .tooltip {
                        width: fit-content;
                        max-height: 100%;
                        background-color: rgba(255, 255, 255, 0.85);
                        padding: 15px;
                        border-radius: 5px;
                    }
                    .text {
                        font-family: 'Univers';
                        font-style: normal;
                        font-weight: 900;
                        font-size: 16px;
                        line-height: 118%;
                        color: #001223;

                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 4; /* number of lines to show */
                                line-clamp: 4; 
                        -webkit-box-orient: vertical;
                    }
                `}
            </style>
            <g>
                {triangles.map((triangle, index, array) => (
                    <polygon key={`${index}-${array.length}`} points={triangle.join()} fill={'transparent'}></polygon>
                ))}
            </g>
            {dataPoints.map((item, index, array) => {
                return (
                    <>
                        <Link href={`/story/${item.slug}`} key={`${index}-${array.length}`}>
                            <g className="StoriesSystem-dot">
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
                                <foreignObject
                                    // TODO: fix anchor
                                    // TODO: handle overflow over main svg
                                    // TODO: check mobile?
                                    x={`${item.point[0]}`}
                                    y={`${item.point[1]}`}
                                    height={'100px'}
                                    width={'300px'}
                                >
                                    <div className="tooltip-container">
                                        <div className="tooltip">
                                            <p className="text">{item.title}</p>
                                        </div>
                                    </div>
                                </foreignObject>
                            </g>
                        </Link>
                    </>
                )
            })}
        </svg>
    )
}
