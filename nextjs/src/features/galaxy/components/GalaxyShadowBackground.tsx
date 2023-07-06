import { Flex } from '@chakra-ui/react'

import { Dimensions } from '../types/galaxy'

const GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER = 3.3
const GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE = 1169.17
export const GalaxyShadowBackground: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
  const height = dimensions.height ?? 0

  return (
    <>
      <GalaxyShadowBackgroundCircle
        x={
          -(GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER)
        }
        y={
          -(
            GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
          ) +
          height / 2
        }
        width={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
        }
        height={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
        }
      />
      <GalaxyShadowBackgroundCircle
        x={
          -(GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER)
        }
        y={height / 2}
        width={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
        }
        height={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
        }
      />
      <GalaxyShadowBackgroundCircle
        x={0}
        y={
          -(
            GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
          ) +
          height / 2
        }
        width={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
        }
        height={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
        }
      />
      <GalaxyShadowBackgroundCircle
        x={0}
        y={height / 2}
        width={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
        }
        height={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER
        }
      />
      <GalaxyShadowBackgroundCircle
        x={GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * 2}
        y={
          -(
            (GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE *
              (GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER * 2)) /
              2 -
            height / 2
          )
        }
        width={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE *
          (GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER * 2)
        }
        height={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE *
          (GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER * 2)
        }
      />
      <GalaxyShadowBackgroundCircle
        x={-(GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE * 8)}
        y={
          -(
            (GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE *
              (GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER * 2)) /
              2 -
            height / 2
          )
        }
        width={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE *
          (GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER * 2)
        }
        height={
          GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE *
          (GALAXY_SHADOW_BACKGROUND_CIRCLE_SIZE_MULTIPLIER * 2)
        }
      />
    </>
  )
}

interface ShadowCircleProps {
  x: number
  y: number
  height: number
  width: number
}
const GalaxyShadowBackgroundCircle: React.FC<ShadowCircleProps> = props => {
  return (
    <foreignObject
      xmlns="http://www.w3.org/1999/xhtml"
      x={props.x}
      y={props.y}
      width={props.width}
      height={props.height}
      pointerEvents="none"
    >
      <Flex
        width={'100%'}
        height="100%"
        background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
      ></Flex>
    </foreignObject>
  )
}
