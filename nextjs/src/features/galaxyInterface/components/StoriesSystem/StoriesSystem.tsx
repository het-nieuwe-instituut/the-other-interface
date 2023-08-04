/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import useQuery from '@/features/shared/hooks/useQuery'
import { Box } from '@chakra-ui/react'
import isEmpty from 'lodash/isEmpty'
import Link from 'next/link'
import React, { memo, useState } from 'react'
import { PortalWithState } from 'react-portal'

import { ImageModuleFragmentFragment } from 'src/generated/graphql'

import { StoriesItem } from '../../galaxies/MainGalaxy/types'
import { GalaxyTooltip } from '../GalaxyTooltip/GalaxyTooltip'
import { usePresenter } from './usePresenter'
import { initApiClient } from '@/features/shared/utils/api'

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

export const StoriesSystem: React.FC<Props> = ({
  data = [],
  dimensions = defaultDimensions,
  disableLinkAndHover,
}) => {
  const svgWidth = dimensions.width
  const svgHeight = dimensions.height
  const { triangles, dataPoints } = usePresenter(data)

  return (
    <React.Fragment>
      <svg width={svgWidth} height={svgHeight}>
        <g>
          {triangles.map((triangle, index, array) => (
            <polygon
              key={`${index}-${array.length}`}
              points={triangle.join()}
              fill={'transparent'}
            ></polygon>
          ))}
        </g>
        {dataPoints.map((item, index, array) => (
          <React.Fragment key={`${index}-${array.length}`}>
            {disableLinkAndHover ? (
              RenderDot(item, disableLinkAndHover)
            ) : (
              <Link className="pointer" href={`/story/${item.id}-${item.slug}`}>
                {RenderDot(item, disableLinkAndHover)}
              </Link>
            )}
          </React.Fragment>
        ))}
      </svg>
    </React.Fragment>
  )
}

function RenderDot(
  item: ReturnType<typeof usePresenter>['dataPoints'][0],
  disableLinkAndHover?: boolean
) {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  return (
    <g
      className="StoriesSystem-dot"
      style={{ cursor: disableLinkAndHover ? 'default' : 'pointer' }}
      id={item.id}
    >
      <foreignObject
        x={`${item.point[0]}`}
        y={`${item.point[1]}`}
        height={'7.47px'}
        width={'7.47px'}
        className={`${item.parent}-dot`}
        data-id={item.id}
      >
        <PortalWithState>
          {({ openPortal, closePortal, portal }) => (
            <React.Fragment>
              <Box
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  if (disableLinkAndHover) {
                    return
                  }
                  setX(e.clientX)
                  setY(e.clientY)

                  openPortal()
                }}
                onMouseLeave={() => {
                  if (disableLinkAndHover) {
                    return
                  }
                  closePortal()
                }}
                height="100%"
                width="100%"
                background="radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 77.6%);"
              ></Box>
              {portal(<GalaxyPositionTooltip item={item} x={x} y={y} />)}
            </React.Fragment>
          )}
        </PortalWithState>
      </foreignObject>
    </g>
  )
}

export const MemoizedStoriesSystem = memo(StoriesSystem)

const GalaxyPositionTooltip: React.FC<{
  item: ReturnType<typeof usePresenter>['dataPoints'][0]
  x: number
  y: number
}> = ({ item, x, y }) => {
  const api = initApiClient(null)
  const { isLoading, isError, data } = useQuery(() => api?.storyImages({ id: item.id }))
  console.log(data, 'data')
  const components = data?.story.data?.attributes?.components?.filter(c => !isEmpty(c))
  const imgComponent = components?.find(x => x !== undefined) as
    | ImageModuleFragmentFragment
    | undefined

  return (
    <Box position={'fixed'} left={x + 16} top={y} zIndex="100">
      <GalaxyTooltip
        isError={isError}
        isLoading={isLoading}
        description={item.shortDescription}
        title={item.title}
        url={imgComponent?.image.data?.attributes?.url}
        alt={imgComponent?.alt_text ?? undefined}
      />
      {/* <Tooltip id={item.id} description={item.shortDescription} title={item.title} /> */}
    </Box>
  )
}
