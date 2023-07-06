import { useId } from '@chakra-ui/react'
import React from 'react'

import { Circle } from '../Galaxy/Circle'
import { CollectionItem } from '../business/d3/useGalaxyController'
import { useStarSystemController } from '../business/d3/useStarSystemController'

interface Props {
  data: CollectionItem[]
  fill: string
  name: string
  dimensions: {
    height: number
    width: number
    margin?: {
      left: number
      right: number
      top: number
      bottom: number
    }
  }
}

const RelatedObject: React.FC<Props> = ({ data = [], dimensions, fill, name }) => {
  const id = useId().replaceAll(':', '')
  const { svgRef } = useStarSystemController(dimensions, data, id)
  return (
    <>
      <svg style={{ width: dimensions.width, height: dimensions.height }} ref={svgRef}>
        <defs>
          <radialGradient id={`gradient-${name}`}>
            <stop offset="40%" stopColor={fill} />
            <stop offset="160%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {data.map(item => {
          return <Circle key={item.name} className={id} name={name}></Circle>
        })}
      </svg>
    </>
  )
}

export default RelatedObject
