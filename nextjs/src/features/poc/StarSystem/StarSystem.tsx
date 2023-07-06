/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from '@chakra-ui/react'
import times from 'lodash/times'
import randomstring from 'randomstring'
import React from 'react'

import { Circle } from '../Galaxy/Circle'
import RelatedObject from '../Object/RelatedObject'
import { CollectionItem } from '../business/d3/useGalaxyController'
import { useStarSystemController } from '../business/d3/useStarSystemController'

interface Props {
  data?: CollectionItem[]
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

function createChild(name: string): any {
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

const colors = ['#41463D', '#9D8DF1', '#B8CDF8', '#95F2D9', '#1CFEBA']

const StarSystem: React.FC<Props> = ({ data = testData, dimensions }) => {
  const { width, height, margin } = dimensions
  const svgWidth = width + (margin?.left ?? 0) + (margin?.right ?? 0)
  const svgHeight = height + (margin?.top ?? 0) + (margin?.bottom ?? 0)
  const id = useId().replaceAll(':', '')
  const { svgRef, dataDimensions } = useStarSystemController(dimensions, data, id)

  return (
    <>
      <svg width={svgWidth} height={svgHeight} ref={svgRef} style={{ background: 'lightGrey' }}>
        <defs>
          {data.map((item, index) => {
            return (
              <radialGradient key={item.name} id={`gradient-${item.name}`}>
                <stop offset="40%" stopColor={colors[index]} />
                <stop offset="160%" stopColor="transparent" />
              </radialGradient>
            )
          })}
        </defs>
        {data.map((item, index) => {
          const dimension = dataDimensions.find(dataDimension => dataDimension.name === item.name)
          return (
            <Circle key={item.name} className={id} name={item.name}>
              <div style={{ height: '100%', width: '100%' }}>
                <RelatedObject
                  name={item.name}
                  fill={colors[index]}
                  data={item.children}
                  dimensions={{
                    width: dimension?.takeSpace ?? 0,
                    height: dimension?.takeSpace ?? 0,
                  }}
                />
              </div>
            </Circle>
          )
        })}
      </svg>
    </>
  )
}

export default StarSystem
