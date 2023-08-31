import { Grid } from '@chakra-ui/react'

import { Story } from '../Story'
import { usePresenter } from './usePresenter'
import { ComponentModulesImage, StoryEntity } from 'src/generated/graphql'
import { useMemo } from 'react'

const fakeStories = [
  {
    title: 'Oral Herstories',
    image: 'https://picsum.photos/500/500',
  },
  {
    title: 'Nelly &',
    image: 'https://picsum.photos/104/160',
  },
  {
    title: 'De Witdruk',
    image: 'https://picsum.photos/104/160',
  },
  {
    title: 'Collecting Other Types',
    image: 'https://picsum.photos/150/100',
  },
  {
    title: 'Architect Portrait',
    image: 'https://picsum.photos/104/160',
  },
]

type Props = {
  stories: StoryEntity[]
}

export const Stories: React.FC<Props> = ({ stories }) => {
  const { positionedStories } = usePresenter(stories)

  return (
    <Grid
      position="absolute"
      top="13%"
      right="18vw"
      w="65vw"
      h="55%"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      gap="20px"
    >
      {positionedStories.map((positionedStory, index) => (
        <Story key={positionedStory?.title ?? `empty-${index}`} story={positionedStory} />
      ))}
    </Grid>
  )
}
