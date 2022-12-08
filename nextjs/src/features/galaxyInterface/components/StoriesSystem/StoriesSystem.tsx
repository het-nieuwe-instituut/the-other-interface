/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import React, { memo, useEffect } from 'react'
import { StoriesItem } from '../../galaxies/MainGalaxy/types'
import { StoryDataPoint, usePresenter } from './usePresenter'

interface Props {
    disableLinkAndHover: boolean
    data: StoriesItem[]
    dimensions?: {
        height: number
        width: number
    }
}

const defaultDimensions = {
    width: 537.85,
    height: 537.85,
}

export const StoriesSystem: React.FC<Props> = ({ data = [], dimensions = defaultDimensions, disableLinkAndHover }) => {
    const svgWidth = dimensions.width
    const svgHeight = dimensions.height
    const { triangles, dataPoints, showTooltip, hideTooltip, cleanupTooltips } = usePresenter(data)

    useEffect(() => {
        // cleanup any remaining visible tooltips on unmount
        return () => {
            cleanupTooltips()
        }
    }, [])

    return (
        <svg width={svgWidth} height={svgHeight}>
            <g>
                {triangles.map((triangle, index, array) => (
                    <polygon key={`${index}-${array.length}`} points={triangle.join()} fill={'transparent'}></polygon>
                ))}
            </g>
            {dataPoints.map((item, index, array) => (
                <React.Fragment key={`${index}-${array.length}`}>
                    {disableLinkAndHover ? (
                        renderDot(item, showTooltip, hideTooltip, disableLinkAndHover)
                    ) : (
                        <Link className="pointer" href={`/story/${item.slug}`}>
                            {renderDot(item, showTooltip, hideTooltip, disableLinkAndHover)}
                        </Link>
                    )}
                </React.Fragment>
            ))}
        </svg>
    )
}

function renderDot(
    item: StoryDataPoint,
    showTooltip: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: StoryDataPoint) => void,
    hideTooltip: (item: StoryDataPoint) => void,
    disableLinkAndHover: boolean
) {
    return (
        <g className="StoriesSystem-dot" style={{ cursor: disableLinkAndHover ? 'default' : 'pointer' }} id={item.id}>
            <foreignObject
                x={`${item.point[0]}`}
                y={`${item.point[1]}`}
                height={'7.47px'}
                width={'7.47px'}
                className={`${item.parent}-dot`}
                data-id={item.id}
            >
                <Box
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                        !disableLinkAndHover && showTooltip(e, item)
                    }
                    onMouseLeave={() => !disableLinkAndHover && hideTooltip(item)}
                    height="100%"
                    width="100%"
                    background="radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 77.6%);"
                ></Box>
            </foreignObject>
        </g>
    )
}
export const MemoizedStoriesSystem = memo(StoriesSystem)
