'use client'
import { Box } from '@chakra-ui/react'

import { Cloud, CategoryCloud, Stories } from './fragments'
import { ThemeTitle } from '../../components/ThemeTitle/ThemeTitle'
import { Pagination, StoryEntity } from 'src/generated/graphql'
import { GalaxyFooter } from '../../components/GalaxyWrapper/GalaxyFooter/GalaxyFooter'
import { GalaxyPagination } from '../../components/GalaxyWrapper/GalaxyPagination/GalaxyPagination'
import { usePresenter } from './usePresenter'

const categoryClouds: CategoryCloud[] = [
  {
    title: 'archives',
    size: '144.4vw',
    titlePosition: { left: '4.2vw', bottom: '42.5%' },
    cloudPosition: { left: 'calc(-144.4vw + 32vw)', bottom: 'calc(-144.4vw / 2 + 34%)' },
  },
  {
    title: 'publications',
    size: '135.4vw',
    titlePosition: { right: '14vw', bottom: '26%' },
    cloudPosition: { right: 'calc(-135.4vw / 2 + 13vw)', bottom: 'calc(-135.4vw + 44%)' },
  },
  {
    title: 'objects',
    size: '84.41vw',
    titlePosition: { right: '5.4vw', top: '22%' },
    cloudPosition: { top: 'calc(-84.41vw / 2 + 12.7%)', right: 'calc(-84.41vw + 22vw)' },
  },
  {
    title: 'people',
    size: '62.42vw',
    titlePosition: { left: '41vw', top: '6.4%' },
    cloudPosition: { top: 'calc(-62.42vw + 23.7%)', left: 'calc(-62.42vw / 2 + 44vw)' },
  },
]

interface Props {
  storyTitle?: string
  stories: StoryEntity[]
  pagination?: Pagination
}

export const MainGalaxy: React.FC<Props> = ({ storyTitle, stories, pagination }) => {
  const { increasePageNumber, decreasePageNumber } = usePresenter(pagination?.pageCount || 0)

  return (
    <Box position="relative" width="100vw" height="100vh">
      {categoryClouds.map(cloud => (
        <Cloud key={cloud.title} cloud={cloud} />
      ))}
      <Stories stories={stories} />
      <ThemeTitle title={storyTitle} />

      <GalaxyFooter
        galaxyPagination={
          <GalaxyPagination
            currentPageNumber={pagination?.page || 0}
            pageAmount={pagination?.pageCount || 0}
            isResultAmountLoading={false}
            handleLeftClick={decreasePageNumber}
            handleRightClick={increasePageNumber}
            isResultEmpty={stories.length === 0}
          />
        }
      />
    </Box>
  )
}
