import { Box } from '@chakra-ui/react'
import { Fragment } from 'react'

import {
  CloudTitle,
  Cloud,
  CloudSize,
  CollectionType,
  Position,
  StoriesContainer,
} from './fragments'

interface CollectionCloud {
  title: CollectionType
  size: CloudSize
  titlePosition: Position
  cloudPosition: Position
}

const collectionClouds: CollectionCloud[] = [
  {
    title: 'Archives',
    size: '144.4vw',
    titlePosition: { left: '4.2vw', bottom: '42.5vh' },
    cloudPosition: { left: 'calc(-144.4vw + 32vw)', bottom: 'calc(-144.4vw / 2 + 34vh)' },
  },
  {
    title: 'Publications',
    size: '135.4vw',
    titlePosition: { right: '14vw', bottom: '26vh' },
    cloudPosition: { right: 'calc(-135.4vw / 2 + 13vw)', bottom: 'calc(-135.4vw + 44vh)' },
  },
  {
    title: 'Objects',
    size: '84.41vw',
    titlePosition: { right: '5.4vw', top: '22vh' },
    cloudPosition: { top: 'calc(-84.41vw / 2 + 12.7vh)', right: 'calc(-84.41vw + 22vw)' },
  },
  {
    title: 'People',
    size: '62.42vw',
    titlePosition: { left: '41vw', top: '6.4vh' },
    cloudPosition: { top: 'calc(-62.42vw + 23.7vh)', left: 'calc(-62.42vw / 2 + 44vw)' },
  },
]

const MainGalaxy: React.FC = () => (
  <Box position="relative" width="100vw" height="100vh">
    {collectionClouds.map(cloud => (
      <Fragment key={cloud.title}>
        <Cloud size={cloud.size} position={cloud.cloudPosition} />
        <CloudTitle position={cloud.titlePosition}>{cloud.title}</CloudTitle>
        <StoriesContainer />
      </Fragment>
    ))}
  </Box>
)

export default MainGalaxy
