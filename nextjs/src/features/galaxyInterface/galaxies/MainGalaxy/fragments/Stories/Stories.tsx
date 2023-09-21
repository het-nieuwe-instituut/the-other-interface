import { Grid } from '@chakra-ui/react'

import { Story } from '../Story'
import { usePresenter } from './usePresenter'
import { StoryEntity } from 'src/generated/graphql'

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
      {positionedStories.map(positionedStory => (
        <Story key={`${positionedStory.id}-${positionedStory.locale}`} story={positionedStory} />
      ))}
    </Grid>
  )
}
