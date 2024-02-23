'use client'
import { Box } from '@chakra-ui/react'

import { Cloud, CategoryCloud, Stories } from './fragments'
import { ThemeTitle } from '../../components/ThemeTitle/ThemeTitle'
import { StoryEntity } from 'src/generated/graphql'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'

const categoryClouds: CategoryCloud[] = [
  {
    title: 'archives',
    size: { base: '144.4vw', xl: '2079.36px' },
    titlePosition: {
      left: { base: '4.2vw', xl: '60.48px' },
      bottom: { base: '42.5%', xl: '42.5%' },
    },
    cloudPosition: {
      left: { base: 'calc(-144.4vw + 32vw)', xl: '-1618.56px' },
      bottom: { base: 'calc(-144.4vw / 2 + 34%)', xl: 'calc(-2079.36px / 2 + 34%)' },
    },
  },

  {
    title: 'publications',
    size: { base: '135.4vw', xl: '1949.760px' },
    titlePosition: {
      right: { base: '14vw', xl: '201.6px' },
      bottom: { base: '26%', xl: '26vh' },
    },
    cloudPosition: {
      right: { base: 'calc(-135.4vw / 2 + 13vw)', xl: '-787.68px' },
      bottom: { base: 'calc(-135.4vw + 44%)', xl: 'calc(-1949.760px + 44%)' },
    },
  },
  {
    title: 'objects',
    size: { base: '84.41vw', xl: '1215.500px' },
    titlePosition: {
      right: { base: '5.4vw', xl: '77.76px' },
      top: { base: '22%', xl: '22vh' },
    },
    cloudPosition: {
      top: { base: 'calc(-84.41vw / 2 + 12.7%)', xl: 'calc(-1215.500px / 2 + 12.7%)' },
      right: { base: 'calc(-84.41vw + 22vw)', xl: '-898.704px' },
    },
  },
  {
    title: 'people',
    size: { base: '62.42vw', xl: '898.844px' },
    titlePosition: {
      left: { base: '41vw', xl: '590.4px' },
      top: { base: '6.4%', xl: '6.4vh' },
    },
    cloudPosition: {
      top: { base: 'calc(-62.42vw + 23.7%)', xl: 'calc(-898.844px + 23.7%)' },
      left: { base: 'calc(-62.42vw / 2 + 44vw)', xl: '184.176px' },
    },
  },
]

interface Props {
  storyTitle?: string
  stories: StoryEntity[]
}

export const MainGalaxy: React.FC<Props> = ({ storyTitle, stories }) => {
  return (
    <Box w={'100vw'} backgroundColor={'pinkAlpha.100'}>
      <Box
        position="relative"
        width="100vw"
        height="100vh"
        maxW={'1440px'}
        overflow={'hidden'}
        marginX={'auto'}
      >
        {categoryClouds.map(cloud => (
          <Cloud key={cloud.title} cloud={cloud} />
        ))}
        <Stories stories={stories} />
        <ThemeTitle title={storyTitle} />

        <GalaxyFooter />
      </Box>
    </Box>
  )
}
