import useScroll from '@/features/shared/hooks/useScroll'
import { Text, Box } from '@chakra-ui/react'

interface Props {
  title: string
  handleScrollToContentClick?: () => void
}

export const RecordTitle: React.FC<Props> = props => {
  const { scrollPosition } = useScroll()
  return (
    <Box
      width="100%"
      backgroundColor={'inherit'}
      onClick={props.handleScrollToContentClick}
      cursor={scrollPosition < 750 ? 'pointer' : 'cursor'}
    >
      <Text textStyle="h1" as={'h1'}>
        {props.title}
      </Text>
    </Box>
  )
}
